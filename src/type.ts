/*
 * @Author: thelostword
 * @Date: 2022-11-14 17:18:59
 * @LastEditors: thelostword
 * @LastEditTime: 2022-11-14 17:28:13
 * @FilePath: \timeline\src\type.ts
 */
export type AreaItem = {
  startTime: number;
  endTime: number;
  bgColor?: string;
}
export type Area = AreaItem[];

export type DrawArgs = {
  currentTime?: number;
  zoom?: number;
  areas?: Area;
  _privateFlag?: boolean;
}

export type Draw = (args: DrawArgs) => void;

export type ScaleHeight = {
  height6: number;
  height5: number;
  height4: number;
  height3: number;
  height2: number;
  height1: number;
}

export type TimeLineOption = {
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
  timeFormat?: string;
}

export const TIME_SPACING = [1, 1.5, 2, 2.5, 3, 5, 8, 12] as const;
export type TIME_SPACE_ENUM = typeof TIME_SPACING[number];

export type DrawHelperOption = {
  pointWidth: number;
  timePerPixel: number;
  scaleHeight: ScaleHeight;
  scaleSpacing: number;
  timeSpacing: TIME_SPACE_ENUM;
  screenScaleCount: number;
  startTime: number;
  endTime: number;
  drawLine: Function;
  drawText: Function;
}
export type DrawHelper = (option: DrawHelperOption) => void;
