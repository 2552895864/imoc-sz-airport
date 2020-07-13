import React from "react";
import styles from "./index.module.less";

/**
 * 
 *
    time - 时间字符串,
    dayOfWeek - 字符串-星期几
    date - 日期字符串
 */
const DateTime = ({ time, dayOfWeek, date }) => {
  return (
    <div className={styles.datetime}>
      <span className={styles.time}>{time+' '}</span>
      <span className={styles.dayofweek}>{dayOfWeek+' '}</span>
      <span>{date}</span>
    </div>
  );
};

export default DateTime;
