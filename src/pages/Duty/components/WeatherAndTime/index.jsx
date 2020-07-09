import React from "react";
import {
  getNowFormatDate,
  getWeekDay,
  getLunarDate,
  getCurrentHoursAndMinutes,
  getTimeFrame,
} from "@/utils/getDateTime";
import weatherData from '@/data/weather.json';
import styles from "./index.module.less";

export default class WeatherAndTime extends React.Component {
  state = {
    currentTime: getCurrentHoursAndMinutes(),
  };
  constructor(props) {
    super(props);
    this.timer = null;
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        currentTime: getCurrentHoursAndMinutes(),
      });
    }, 2000);
  }
  componentWillUnmount() {
    clearImmediate(this.timer);
  }

  render() {
    const { currentTime } = this.state;
    const timeData = {
      date: getNowFormatDate(),
      weekDay: getWeekDay(),
      lunar: getLunarDate(),
    };
    const timeFrame = getTimeFrame();
    return (
      <div className={styles.container}>
        {/* 时间区域 */}
        <div className={styles.timeContainer}>
          {/* 时分 */}
          <div className={styles.currentTime}>
            {currentTime}
            {/* 上下午 */}
            <span
              className={styles.timeCommonStyle}
              style={{ marginLeft: "10px" }}
            >
              {timeFrame}
            </span>
          </div>
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
          <div className={styles.temperature}>{`${weatherData.temperature}℃`}</div>
        </div>
      </div>
    );
  }
}
