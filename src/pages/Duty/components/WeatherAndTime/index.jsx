import React from "react";
import Clock from "@/components/Clock";
import ModuleContainer from "@/components/ModuleContainer";
import {
  getNowFormatDate,
  getWeekDay,
  getLunarDate,
} from "@/utils/getDateTime";

import styles from "./index.module.less";

const WeatherAndTime = (props) => {
  const { weatherData } = props;
  const timeData = {
    date: getNowFormatDate(),
    weekDay: getWeekDay(),
    lunar: getLunarDate(),
  };
  return (
    <ModuleContainer className={styles.container}>
      {/* 时间区域 */}
      <div className={styles.timeContainer}>
        {/* 时分 */}
        <Clock className={styles.currentTime} needTimeFrame />
        {/* 日期、星期、农历 */}
        {Object.keys(timeData).map((item) => (
          <div className={styles.timeCommonStyle} key={item}>
            {timeData[item]}
          </div>
        ))}
      </div>
      {/* 天气区域 */}
      <div className={styles.weatherContainer}>
        <div className={styles.weather}>{weatherData.weather}</div>
        <div
          className={styles.temperature}
        >{`${weatherData.temperature}℃`}</div>
      </div>
    </ModuleContainer>
  );
};

export default WeatherAndTime;
