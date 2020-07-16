import React from "react";
import classnames from "classnames";
import Echarts from "@/components/Echarts";
import getChartsOption from "./utils/getChartsOption";
import styles from "./index.module.less";

/**
 *
 * @param {className} 类名（需指定宽高） e.g. .chart { width: 432px !important; height: 187px !important; }
 * @param {data} 数据对象
 * @param {options} echarts配置对象（除去数据相关配置）
 * @param {labelClass} x轴label类名 e.g. .label { bottom: 4.81% !important; left: 6.94% !important; font-size: 12px !important; }
 * @param {label} x轴名称
 */

const LineChart = ({
  className,
  data,
  options,
  labelClass,
  label = "日期",
}) => {
  const ChartClass = classnames({
    [styles.chart]: true,
    [className]: className,
  });
  const LabelClass = classnames({
    [styles.xlabel]: true,
    [labelClass]: labelClass,
  });
  return (
    <div className={styles.container}>
      <Echarts
        className={ChartClass}
        chartOption={getChartsOption(options, data)}
      ></Echarts>
      <div className={LabelClass}>{label}</div>
    </div>
  );
};

export default LineChart;
