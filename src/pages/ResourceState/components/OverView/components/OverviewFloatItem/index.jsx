import React from "react";
import classnames from "classnames";
import styles from "./index.module.less";

/**
 * 
 *
    className - 自定义类
    label - 字段名
    value - 字段值
 */

const OverviewFloatItem = ({ className, label, value }) => {
  const containerClass = classnames({
    [styles.container]: true,
    [className]: className,
  });

  return (
    <div className={containerClass}>
      {value}个<div className={styles.label}>{label}</div>
    </div>
  );
};

export default OverviewFloatItem;
