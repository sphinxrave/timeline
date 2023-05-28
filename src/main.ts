/*
 * @Author: losting
 * @Date: 2022-04-01 16:05:12
 * @LastEditTime: 2022-11-14 17:19:27
 * @LastEditors: thelostword
 * @Description:
 * @FilePath: \timeline\src\main.ts
 */

import type {
  DrawArgs,
  ScaleHeight,
  TimeLineOption,
  TIME_SPACE_ENUM,
  AreaItem,
} from "./type";
import { TIME_SPACING } from "./type";
import mitt from "mitt";
import throttle from "lodash.throttle";
import { drawHelper, formatTime } from "./draw-helper";
import { gte } from "sorted-array-functions";

// 默认配置
const defaultOptions = {
  fill: false,
  bgColor: "rgba(0,0,0,0.5)",
  textColor: "#ffffff",
  scaleColor: "#ffffff",
  areaBgColor: "#ffffff55",
  pointColor: "#00aeec",
  pointWidth: 3,
  scaleSpacing: 7,
  fps: 120,
  zoom: 2,
  maxZoom: 7,
  minZoom: 1,
  // timeFormat: 'HH:mm:ss',
} satisfies TimeLineOption;

class TimeLine {
  $canvas: HTMLCanvasElement; // canvas 元素
  canvasContext: CanvasRenderingContext2D; // canvas context,

  #emitter: any;

  private currentTime: number; // 当前时间
  private areas?: AreaItem[]; // 阴影区域
  private waveform?: [number, number][]; // 波形

  #timeSpacingMap: TIME_SPACE_ENUM[]; // 5 10 30 60 120 300 取值范围
  #timeSpacing: TIME_SPACE_ENUM; // 5 10 30 60 120 300 取值范围
  scaleSpacing: number; // 刻度间距

  bgColor: string;

  // 刻度高度
  #scaleHeight: ScaleHeight;
  // 当前时间指针宽度
  pointWidth: number;
  // 当前指针颜色
  pointColor: string;
  // 文字颜色
  textColor: string;
  // 刻度颜色
  scaleColor: string;
  // 阴影区颜色
  areaBgColor: string;
  // 是否在拖拽中
  #isDraging: boolean;
  // fps
  fps: number;

  startTime: number;
  endTime: number;
  // timeFormat
  // timeFormat: string;

  constructor(id: string | HTMLCanvasElement, options: TimeLineOption) {
    if (!id) {
      throw new Error("canvas id is required!");
    }
    if(typeof id == 'string') {
      this.$canvas = document.getElementById(id) as HTMLCanvasElement;
    } else {
      this.$canvas = id;
    }
    this.canvasContext = this.$canvas.getContext(
      "2d"
    ) as CanvasRenderingContext2D;

    // 获取配置项
    const {
      fill,
      width,
      height,
      bgColor,
      textColor,
      scaleColor,
      areaBgColor,
      pointColor,
      pointWidth,
      scaleSpacing,
      fps,
      zoom,
      maxZoom,
      minZoom,
    } = { ...defaultOptions, ...options };

    // 检查zoom参数是否合法
    if (zoom < minZoom || zoom > maxZoom || zoom % 1 !== 0) {
      throw new Error(
        `zoom must be minZoom ~ maxZoom(${minZoom} ~1 ${maxZoom}), and must be an integer`
      );
    }
    if (maxZoom < 1 || maxZoom > 9 || maxZoom % 1 !== 0) {
      throw new Error("maxZoom must be 1 ~ 9, and must be an integer");
    }
    if (minZoom < 1 || minZoom > 9 || minZoom % 1 !== 0) {
      throw new Error("minZoom must be 1 ~ 9, and must be an integer");
    }
    if (maxZoom < minZoom) {
      throw new Error("maxZoom must be greater than minZoom");
    }

    // 判断使用父元素宽高
    if (fill) {
      // 获取父元素
      const $canvasParent = this.$canvas.parentElement as HTMLElement;
      // 将canvas 宽高设为父元素宽高
      this.$canvas.width = $canvasParent.clientWidth;
      this.$canvas.height = $canvasParent.clientHeight;
      // resize observer
      const parentResizeObserver = new ResizeObserver(
        throttle(this._onParentResize.bind(this), 200)
      );
      // 监听父元素resize
      parentResizeObserver.observe($canvasParent);
    } else {
      if (width) this.$canvas.width = width;
      if (height) this.$canvas.height = height;
    }

    this.#isDraging = false;
    this.#emitter = mitt();

    this.currentTime = 0;

    this.#timeSpacingMap = [];
    for (let i = minZoom - 1; i < maxZoom; i++) {
      this.#timeSpacingMap.push(TIME_SPACING[i]);
    }

    // this.#timeSpacing = 60; // 时间间距
    this.#timeSpacing = TIME_SPACING[zoom - 1];
    this.scaleSpacing = scaleSpacing; // 默认刻度间距7px

    // 刻度高度
    this.#scaleHeight = {
      height6: this.$canvas.height / 2, // 1/2高度
      height5: this.$canvas.height / 3, // 1/3高度
      height4: this.$canvas.height / 4, // 1/4高度
      height3: this.$canvas.height / 5, // 1/5高度
      height2: this.$canvas.height / 8 + 1, // 1/8高度
      height1: this.$canvas.height / 10 + 1, // 1/10高度
    };

    // canvas 背景颜色
    this.bgColor = bgColor;
    // 当前时间指针宽度
    this.pointWidth = pointWidth;
    // 当前指针颜色
    this.pointColor = pointColor;
    // 文字颜色
    this.textColor = textColor;
    // 刻度颜色
    this.scaleColor = scaleColor;
    // 阴影区颜色
    this.areaBgColor = areaBgColor;
    // fps
    this.fps = fps;
    // timeFormat
    // this.timeFormat = timeFormat;

    // caching the start and end time
    const screenScaleCount = Math.ceil(this.$canvas.width / this.scaleSpacing);
    // 当前屏显示秒数
    const screenSecondCount = screenScaleCount * this.#timeSpacing;

    // 开始时间
    this.startTime = this.currentTime - screenSecondCount / 2;
    // 结束时间
    this.endTime = this.currentTime + screenSecondCount / 2;
  }

  // 绘制时间轴
  draw({ currentTime, areas, waveform, _privateFlag }: DrawArgs) {
    // console.time('draw');
    // 拖拽中禁止外部调用,防止冲突
    if (this.#isDraging && !_privateFlag) {
      console.log("dragging so failing");
      return;
    }

    // 获取参数
    this.currentTime = currentTime;
    this.areas = areas || [];
    this.waveform = waveform || [];

    // 当前屏可绘制刻度数量
    const screenScaleCount = Math.ceil(this.$canvas.width / this.scaleSpacing);
    // 当前屏显示秒数
    const screenSecondCount = screenScaleCount * this.#timeSpacing;

    // 开始时间
    const startTime = this.currentTime - screenSecondCount / 2;
    // 结束时间
    const endTime = this.currentTime + screenSecondCount / 2;

    // canvas X轴中心点（当前时间指示刻度）
    const xCenterPoint = this.$canvas.width / 2;

    // 每1px所占时间单位（秒）
    const timePerPixel = screenSecondCount / this.$canvas.width;

    if (_privateFlag) {
      this.emit("drag", startTime, endTime);
    }

    // 清空画布及事件
    this.clear();

    // 填充背景
    this.drawArea(0, 0, this.$canvas.width, this.$canvas.height, this.bgColor);

    // 绘制阴影区域
    this.areas.forEach((item) => {
      const startX =
        item.startTime < startTime
          ? 0
          : Math.floor((item.startTime - startTime) / timePerPixel);
      const endX =
        item.endTime > endTime
          ? this.$canvas.width
          : Math.floor((item.endTime - startTime) / timePerPixel);
      this.drawArea(
        startX,
        0,
        endX,
        this.$canvas.height,
        item.bgColor || this.areaBgColor
      );
    });

    this.canvasContext.beginPath();
    let runningSum = 0;
    let runningCount = 0;
    let limit = Math.max(1, Math.min(Math.floor(this.#timeSpacing), 10));
    let startIdx = gte(this.waveform, [startTime - 1, 0], (a, b) => {
      const k = a[0] - b[0];
      if (k < 0) return -1;
      if (k > 0) return 1;
      return 0;
    });
    if (startIdx === -1) startIdx = this.waveform.length;
    for (let i = startIdx; i < this.waveform.length; i++) {
      const item = this.waveform[i];
      if (item[0] > endTime + 1) break;
      runningCount += 1;
      runningSum += item[1];

      if (runningCount == limit) {
        const centerX = (item[0] - startTime + 0.025) / timePerPixel; // number of pixels on x axis
        const topY =
          (this.$canvas.height -
            (this.$canvas.height - 10) * (runningSum / runningCount / 100)) /
          2;
        this.canvasContext.moveTo(centerX, topY);
        // console.log(centerX, topY);
        this.canvasContext.lineTo(centerX, this.$canvas.height - topY);
        runningSum = 0;
        runningCount = 0;
      }
    }
    this.canvasContext.strokeStyle = this.areaBgColor;
    this.canvasContext.lineWidth = Math.min(1, (0.05 / timePerPixel) * limit);
    this.canvasContext.stroke();

    // 绘制刻度
    drawHelper.bind(this)({
      pointWidth: this.pointWidth,
      timePerPixel,
      scaleHeight: this.#scaleHeight,
      scaleSpacing: this.scaleSpacing,
      timeSpacing: this.#timeSpacing,
      screenScaleCount,
      startTime,
      endTime,
      drawLine: this.drawLine.bind(this),
      drawText: this.drawText.bind(this),
    });

    // 绘制比例尺
    this.drawTimelineScale(this.#timeSpacing);

    // 绘制当前时间指针
    this.drawLine(
      xCenterPoint - this.pointWidth / 2,
      this.$canvas.height,
      this.pointWidth,
      this.pointColor
    );
    this.drawArea(xCenterPoint - 54, 4, xCenterPoint + 54, 18, this.pointColor);
    this.drawText(
      xCenterPoint,
      6,
      formatTime(this.currentTime),
      this.textColor,
      "center",
      "top"
    );

    // 鼠标滚轮事件
    this.$canvas.onwheel = this._onZoom.bind(this);
    // 拖拽事件
    this.$canvas.onmousedown = this._onDrag.bind(this);
    // console.timeEnd('draw');

    return { startTime, endTime };
  }

  // 拖拽
  private _onDrag({ clientX }: MouseEvent) {
    this.#isDraging = true;
    let prexOffset = 0;
    document.onmousemove = throttle(
      (moveEvent) => {
        const curxOffset = moveEvent.clientX - clientX;
        const currentTime = Math.max(
          0.01,
          this.currentTime -
            (this.#timeSpacing / this.scaleSpacing) * (curxOffset - prexOffset)
        );

        prexOffset = curxOffset;

        this.draw({
          currentTime: currentTime,
          areas: this.areas,
          waveform: this.waveform,
          _privateFlag: true,
        });
      },
      this.#timeSpacing === 1 ? 100 : 1000 / this.fps
    );

    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;
      this.#isDraging = false;
      this.emit("timeUpdate", this.currentTime, this.startTime, this.endTime);
    };
  }
  // 缩放
  private _onZoom(e: WheelEvent) {
    e.preventDefault();
    const currentIndex = this.#timeSpacingMap.findIndex(
      (item) => item === this.#timeSpacing
    );
    if (e.deltaY < 0 && currentIndex > 0) {
      this.#timeSpacing = this.#timeSpacingMap[currentIndex - 1];
      this.draw({
        currentTime: this.currentTime,
        areas: this.areas,
        waveform: this.waveform,
        _privateFlag: true,
      });
    } else if (e.deltaY > 0 && currentIndex < this.#timeSpacingMap.length - 1) {
      this.#timeSpacing = this.#timeSpacingMap[currentIndex + 1];
      this.draw({
        currentTime: this.currentTime,
        areas: this.areas,
        waveform: this.waveform,
        _privateFlag: true,
      });
    }
  }

  // 父元素size变化
  private _onParentResize() {
    const $canvasParent = this.$canvas.parentNode as HTMLElement;
    if (!$canvasParent) {
      return;
    }
    this.$canvas.width = $canvasParent.clientWidth;
    this.$canvas.height = $canvasParent.clientHeight;
    // 刻度高度
    this.#scaleHeight = {
      height6: this.$canvas.height / 2, // 1/2高度
      height5: this.$canvas.height / 3, // 1/3高度
      height4: this.$canvas.height / 4, // 1/4高度
      height3: this.$canvas.height / 5, // 1/5高度
      height2: this.$canvas.height / 8, // 1/8高度
      height1: this.$canvas.height / 10, // 1/10高度
    };
    this.draw({
      currentTime: this.currentTime,
      areas: this.areas,
      waveform: this.waveform,
    });
  }

  // 清空画布
  private clear() {
    if (this.canvasContext) {
      this.canvasContext.clearRect(
        0,
        0,
        this.$canvas.width,
        this.$canvas.height
      );
    }
    if (this.$canvas) {
      this.$canvas.onwheel = null;
      this.$canvas.onmousedown = null;
    }
  }
  // 绘制比例尺
  private drawTimelineScale(timespacing: TIME_SPACE_ENUM) {
    let text = timespacing < 60 ? `${timespacing}s` : `${timespacing / 60}min`;

    this.drawText(
      this.scaleSpacing + 12,
      9,
      `${text}`,
      this.textColor,
      "left",
      "middle"
    );

    this.canvasContext.beginPath();
    this.canvasContext.moveTo(5, 6);
    this.canvasContext.lineTo(5, 10);
    this.canvasContext.lineTo(this.scaleSpacing + 7, 10);
    this.canvasContext.lineTo(this.scaleSpacing + 7, 6);
    this.canvasContext.strokeStyle = this.scaleColor;
    this.canvasContext.lineWidth = 1.5;
    this.canvasContext.stroke();
  }

  // 绘制线条
  private drawLine(
    x: number,
    y: number,
    width: number = 1,
    color: string = this.scaleColor
  ): void {
    this.canvasContext.beginPath();
    this.canvasContext.moveTo(x, this.$canvas.height);
    this.canvasContext.lineTo(x, this.$canvas.height - y);
    // this.canvasContext.closePath();
    this.canvasContext.strokeStyle = color;
    this.canvasContext.lineWidth = width;
    this.canvasContext.stroke();
  }

  // 绘制文字
  private drawText(
    x: number,
    y: number,
    text: string,
    color: string = this.textColor,
    align: CanvasTextAlign = "center",
    baseLine: CanvasTextBaseline = "alphabetic"
  ): void {
    this.canvasContext.beginPath();
    this.canvasContext.font = "11px Franklin gothic medium";
    this.canvasContext.fillStyle = color;
    this.canvasContext.textAlign = align;
    this.canvasContext.textBaseline = baseLine;
    this.canvasContext.fillText(text, x, y);
  }

  // 绘制区域
  private drawArea(
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    bgColor: string
  ) {
    this.canvasContext.beginPath();
    this.canvasContext.rect(startX, startY, endX - startX, endY - startY);
    this.canvasContext.fillStyle = bgColor;
    this.canvasContext.fill();
  }

  on(name: "timeUpdate" | "drag", listener: Function) {
    this.#emitter.on(name, listener);
  }

  off(name: "timeUpdate" | "drag", listener: Function) {
    this.#emitter.off(name, listener);
  }

  private emit(...args: unknown[]) {
    this.#emitter.emit(...args);
  }
}

export default TimeLine;
