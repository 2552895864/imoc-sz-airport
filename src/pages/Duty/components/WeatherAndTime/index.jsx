import React from "react";
import styles from "./index.module.css";

const timeData = {
  date: "2020年7月7日",
  week: "星期二",
  lunar: "庚子年五月十七",
};

export default class WeatherAndTime extends React.Component {
  render() {
    const currentTime = "10:21";
    return (
      <div className={styles.container}>
        <div className={styles.timeContainer}>
          <div className={styles.currentTime}>
            {currentTime}
            <span className={styles.timeCommonStyle}>上午</span>
          </div>
          {Object.keys(timeData).map((item) => (
            <div className={styles.timeCommonStyle}>{timeData[item]}</div>
          ))}
        </div>
        <div className={styles.weatherContainer}>
          <div className={styles.weather}>小雨</div>
          <div className={styles.temperature}>28 ℃</div>
        </div>
      </div>
    );
  }
}
