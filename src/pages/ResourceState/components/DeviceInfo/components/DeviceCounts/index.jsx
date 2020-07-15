import React from "react";
import classnames from "classnames";
import styles from "./index.module.less";

/**
 * 
 *
    value - 数量,
    label - 名称,
    iconName - 图标名,
    className - 类名
    e.g.
        {
            value:54,
            label:'服务器总数',
            iconName:'services' | 'net' | 'storage'
        }
 */
const DeviceCounts = ({ className, value, label, iconName }) => {
  const containerClass = classnames({
    [styles.container]: true,
    [className]: className,
  });
  const iconClass = classnames({
    [styles.icon]: true,
    [styles[iconName]]: true,
  });

  return (
    <div className={containerClass}>
      <div className={iconClass}></div>
      <div className={styles.content}>
        <div>{value}个</div>
        <div className={styles.label}>{label}</div>
      </div>
    </div>
  );
};

export default DeviceCounts;
