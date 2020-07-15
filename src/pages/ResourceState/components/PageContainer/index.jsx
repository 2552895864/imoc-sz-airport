import React, { useState, useEffect } from "react";
import classnames from "classnames";
import DateTime from "./components/DateTime";
import getDateTimeString from "./utils/getDateTimeString";

import styles from "./index.module.less";

/**
 * 
 *
    title - 默认标题,
    className - 样式
    datetime - 对象，包含date、time、dayOfWeek
    headerClassName - header样式
 */
const PageContainer = ({
  children,
  title = "默认标题",
  className,
  datetime = new Date(),
  headerClassName,
}) => {
  const [dateTime, setDateTime] = useState(getDateTimeString(datetime));
  useEffect(() => {
    const timer = setTimeout(() => {
      if (timer) clearTimeout(timer);
      setDateTime(getDateTimeString(new Date()));
    }, 1000);
    return () => clearTimeout(timer);
  });
  const containerClass = classnames({
    [styles.container]: true,
    [className]: className,
  });
  const headerClass = classnames({
    [styles.header]: true,
    [headerClassName]: className,
  });
  return (
    <div className={containerClass}>
      <div className={headerClass}>
        {title}
        <DateTime {...dateTime}></DateTime>
      </div>
      {children}
    </div>
  );
};

export default PageContainer;
