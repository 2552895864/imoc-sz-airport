import React from "react";
import classnames from "classnames";
import Clock from "../Clock";
import { getNowFormatDate } from "@/utils/getDateTime";
import styles from "./index.module.less";

/**
 * 
 *
    title - 默认标题,
    needTimeZone - 右上角是否需要时间,
    className - 样式
    headerClassName - header样式
 */
const PageContainer = ({
  children,
  title = "默认标题",
  needTimeZone = true,
  className,
  headerClassName,
}) => {
  const timeZoneClass = classnames({
    [styles.timeZone]: true,
    [styles.timeZoneHidden]: !needTimeZone,
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
      <div className={headerClass}>{title}</div>
      <div className={timeZoneClass}>
        <span>{getNowFormatDate()}</span>
        <Clock className={styles.clock} />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default PageContainer;
