/*
 * @Author: losting
 * @Date: 2022-05-10 11:30:36
 * @LastEditTime: 2022-11-14 17:26:11
 * @LastEditors: thelostword
 * @Description:
 * @FilePath: \timeline\src\draw-helper.ts
 */
import type { DrawHelperOption } from "./type";

export function drawHelper({
  pointWidth,
  // timePerPixel,
  timeSpacing,
  // screenScaleCount,
  scaleSpacing,
  scaleHeight,
  startTime,
  endTime,
  drawLine,
  drawText,
}: DrawHelperOption) {
  const secondsPerPixel = timeSpacing / scaleSpacing;

  let minorTickInterval, majorTickInterval;
  switch (timeSpacing) {
    case 1:
      minorTickInterval = 0.5;
      majorTickInterval = 5;
      break;
    case 1.5:
      minorTickInterval = 1;
      majorTickInterval = 10;
      break;
    case 2:
      minorTickInterval = 1;
      majorTickInterval = 10;
      break;
    case 2.5:
      minorTickInterval = 1;
      majorTickInterval = 10;
      break;
    case 3:
      minorTickInterval = 1;
      majorTickInterval = 10;
      break;
    case 5:
      minorTickInterval = 2;
      majorTickInterval = 20;
      break;
    case 8:
      minorTickInterval = 3;
      majorTickInterval = 30;
      break;
    case 12:
      minorTickInterval = 4;
      majorTickInterval = 40;
      break;
    default:
      throw new Error(`Unsupported zoom level: ${timeSpacing}`);
  }

  let startTick = Math.floor(startTime / minorTickInterval) * minorTickInterval;
  // const startOffset: number = (startTime / minorTickInterval - Math.floor(startTime / minorTickInterval) ) * minorTickInterval;
  let endTick = Math.floor(endTime / minorTickInterval) * minorTickInterval;

  for (let tick = startTick; tick <= endTick; tick += minorTickInterval) {
    const height =
      tick % majorTickInterval === 0
        ? scaleHeight.height5
        : tick % (majorTickInterval / 2) === 0
        ? scaleHeight.height3
        : scaleHeight.height1;

    const position = (tick - startTime) / secondsPerPixel - pointWidth;
    drawLine(position, height);

    if (height === scaleHeight.height5) {
      const timeText = formatTime(tick);
      drawText(position, scaleHeight.height5 + 6, timeText);
    }
  }
}

/**
 * Formats the given tick duration (in seconds) into a string representing hours, minutes and seconds.
 *
 * @param {number} tick - The duration in seconds to format.
 * @return {string} A string representing the formatted duration in the format "hh:mm:ss".
 */
export function formatTime(tick: number): string {
  const hours = Math.floor(tick / 60 / 60);
  const minutes = Math.floor(Math.abs(tick) / 60);
  const seconds = Math.floor(Math.abs(tick) % 60);
  const timeText = `${hours ? hours.toString().padStart(2, "0") + ':' : ''}${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
  return timeText;
}

