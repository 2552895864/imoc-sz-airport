import { GetLunarDate } from "./getCNDate";

const getTimeInfo = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let weekDay = date.getDay();
  let hour = date.getHours(); //当前系统时间的小时值
  let minute = date.getMinutes(); //当前系统时间的分钟值
  return {
    year,
    month,
    day,
    weekDay,
    hour,
    minute,
  };
};

const addZero = (number) => (number > 9 ? number : `0${number}`);

/**
 * 获取当前时分
 */

const getCurrentHoursAndMinutes = () => {
  const { hour, minute } = getTimeInfo();
  return `${addZero(hour)}:${addZero(minute)}`;
};

const getTimeFrame = () => {
  const { hour } = getTimeInfo();
  let timeFrame = hour >= 12 ? (hour >= 18 ? "晚上" : "下午") : "上午";
  return timeFrame;
};

/**
 * 获取年月日
 */
const getNowFormatDate = () => {
  const { year, month, day } = getTimeInfo();
  return `${year}年${month}月${day}日`;
};

/**
 * 获取今天是星期几
 */
const getWeekDay = () => {
  const { weekDay } = getTimeInfo();
  let weekDayString = `星期${"日一二三四五六".charAt(weekDay)}`;
  return weekDayString;
};

/**
 * 获取农历
 */

const getLunarDate = () => {
  const { year, month, day } = getTimeInfo();
  return GetLunarDate(year, month, day);
};

/**
 * 获取当天时间戳
 */

const getCurrentTimeStamp = () => {
  const { year, month, day } = getTimeInfo();
  const currentDate = `${year}/${addZero(month)}/${addZero(day)}`;
  // const currentTimeStamp = new Date(currentDate).valueOf();
  return currentDate
};

export {
  getNowFormatDate,
  getWeekDay,
  getLunarDate,
  getCurrentHoursAndMinutes,
  getTimeFrame,
  getCurrentTimeStamp
};
