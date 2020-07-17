import React from "react";
import classnames from "classnames";
import Echarts from "@/components/Echarts";
import getChartsOption from "./utils/getChartsOption";
import styles from "./index.module.less";

/**
 *
 * @param {className} 类名（需指定宽高） e.g. .chart { width: 432px !important; height: 187px !important; }
 * @param {percent} 仪表盘百分比
 * @param {options} echarts配置对象（除去数据相关配置）
 */

const Gauge = ({ className, percent, options }) => {
  const ChartClass = classnames({
    [styles.chart]: true,
    [className]: className,
  });
  return (
    <div className={styles.container}>
      <Echarts
        className={ChartClass}
        chartOption={getChartsOption(options, percent)}
      ></Echarts>
    </div>
  );
};

export default Gauge;
