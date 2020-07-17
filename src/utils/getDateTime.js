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
  return currentDate;
};

/**
 *
 * 获取当月时间
 */
const getCurrentTimeStampByMonth = () => {
  const { year, month } = getTimeInfo();
  const currentDate = `${year}/${addZero(month)}`;
  // const currentTimeStamp = new Date(currentDate).valueOf();
  return currentDate;
};

/**
 * 处理 2020-03-18T01:57:23.000+0000
 */

const getTimeFormatFromTTime = (tTime) => {
  let date = new Date(tTime.substr(0, 19));
  let Year = date.getFullYear();
  let Month =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;
  let d = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  let Hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  let Minutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  let Seconds =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  let over_time =
    Year + "/" + Month + "/" + d + " " + Hours + ":" + Minutes + ":" + Seconds;
  //***至此以上是将时间2020-03-18T01:57:23.000+0000转为正常时间格式，以下为将时间进行增加8小时解决时区差异的操作***
  let time = new Date(Date.parse(over_time));
  time.setTime(time.setHours(time.getHours() + 8));
  let Y = time.getFullYear() + "年";
  let M = addZero(time.getMonth() + 1) + "月";
  let D = addZero(time.getDate()) + " ";
  // let h = addZero(time.getHours()) + ":";
  // let m = addZero(time.getMinutes()) + ":";
  // let s = addZero(time.getSeconds());
  return Y + M + D; // + " " + h + m + s;
};

export {
  getNowFormatDate,
  getWeekDay,
  getLunarDate,
  getCurrentHoursAndMinutes,
  getTimeFrame,
  getCurrentTimeStamp,
  getTimeFormatFromTTime,
  getCurrentTimeStampByMonth
};
