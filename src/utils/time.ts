/*
 * @Author: losting
 * @Date: 2022-05-07 16:05:57
 * @LastEditTime: 2022-05-17 16:25:24
 * @LastEditors: losting
 * @Description: 
 * @FilePath: \timeline\src\utils\time.ts
 */
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';

dayjs.extend(utc)
dayjs.extend(duration)

// 时间戳转时间
export const dateTime = (time: number, format: string = 'MM/DD HH:mm'): string => {
  return ( time < 0 ? '-' : '' ) + dayjs(Math.abs(time * 1000)).utc().format(format);
}

//获得本周的开端日期
export const getWeekStartDate = (timestamp: number = Math.floor(Date.now() / 1000)): number => {
  const time = timestamp * 1000;
  const year = dayjs(time).year();
  const month = dayjs(time).month();
  const date = dayjs(time).date();
  const day = dayjs(time).day();
	const weekStartDate = new Date(year, month, date - day).getTime();
	return Math.floor(weekStartDate / 1000);
}

//获得本周的停止日期
export const getWeekEndDate = (timestamp: number = Math.floor(Date.now() / 1000)): number => {
  const time = timestamp * 1000;
  const year = dayjs(time).year();
  const month = dayjs(time).month();
  const date = dayjs(time).date();
  const day = dayjs(time).day();
	const weekEndDate = new Date(year, month, date + 6 - day).getTime();
	return Math.floor(weekEndDate / 1000);
}
