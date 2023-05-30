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
      minorTickInterval = 1;
      majorTickInterval = 10;
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

  let startTick = startTime * 10;
  // const startOffset: number = (startTime / minorTickInterval - (startTime / minorTickInterval) ) * minorTickInterval;
  let endTick = endTime * 10;

  for (let tick = Math.floor(startTick); tick <= Math.ceil(endTick); tick += minorTickInterval) {
    const height =
      tick % majorTickInterval === 0
        ? scaleHeight.height5
        : tick % (majorTickInterval / 2) === 0
        ? scaleHeight.height3
        : scaleHeight.height1;

    const position = (tick/10 - startTime) / secondsPerPixel - pointWidth / 2;
    drawLine(position, height);

    if (height === scaleHeight.height5) {
      const timeText = formatTime(tick/10);
      drawText(position, scaleHeight.height6, timeText); // this is drawing upside down so using height6 will put it perfectly in the middle.
      // this is because y comes in 0 at the top left, but drawLine has height logic to place it on the bottom instead. Weird stuff.
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

