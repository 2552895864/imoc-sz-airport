import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { getCurrentHoursAndMinutes } from "@/utils/getDateTime";
import styles from "./index.module.less";

const Clock = ({ children, className }) => {
  const clockClass = classnames({
    [className]: className,
    [styles.container]: true,
  });
  const [currentTime, setCurrentTime] = useState(getCurrentHoursAndMinutes());
  useEffect(() => {
    let clockTimer = null;
    clockTimer = setInterval(() => {
      setCurrentTime(getCurrentHoursAndMinutes());
    }, 2000);
    return () => {
      // 组件销毁时，清除定时器
      clearInterval(clockTimer);
    };
  }, []);
  return (
    <div className={clockClass}>
      {currentTime}
      {children}
    </div>
  );
};
export default Clock;
