/*
 * @Author: thelostword
 * @Date: 2022-11-14 17:00:52
 * @LastEditors: thelostword
 * @LastEditTime: 2022-11-15 11:25:58
 * @FilePath: \timeline\types\timeline.d.ts
 */
declare type AreaItem = {
  startTime: number;
  endTime: number;
  bgColor?: string;
};

declare type DrawArgs = {
  currentTime: number;
  // zoom?: number;
  areas?: AreaItem[];
  /**
   * waveform should be a [ second, value ] sorted array where the second value is between 0-100
   */
  waveform?: [number, number][];
//   _privateFlag?: boolean;
};

declare type TimeLineOption = {
  fill?: boolean;
  width?: number;
  height?: number;
  bgColor?: string;
  textColor?: string;
  scaleColor?: string;
  scaleSpacing?: number;
  areaBgColor?: string;
  pointColor?: string;
  pointWidth?: number;
  fps?: number;
  zoom?: number;
  maxZoom?: number;
  minZoom?: number;
};

/**
 * newTime is [currentTime, startTime, endTime]
 */
declare type TimeUpdateFn = (
  newTime: [number,],
) => void;

/**
 * s is [startTime, endTime]
 */
declare type DragUpdateFn = (s: [number, number]) => void;

declare class Timeline {
  constructor(id: string | HTMLCanvasElement, option?: TimeLineOption);
  draw(option: DrawArgs): { startTime: number; endTime: number };
  on(type: "timeUpdate", call: TimeUpdateFn): void;
  on(type: "drag", call: DragUpdateFn): void;
}

export = Timeline;
