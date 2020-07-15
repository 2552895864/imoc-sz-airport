import React from "react";
import classnames from "classnames";
import Echarts from "@/components/Echarts";
import options from "./config/options.json";
import getChartsOption from "./utils/getChartsOption";
import styles from "./index.module.less";

const LineChart = ({ className, data, mode }) => {
  const ChartClass = classnames({
    [styles.chart]: true,
    [className]: className,
  });
  return (
    <div className={styles.container}>
      <Echarts
        className={ChartClass}
        chartOption={getChartsOption(options, data[mode])}
      ></Echarts>
      <div className={styles.xlabel}>
        {mode === "week" ? "日期" : mode === "hour" ? "小时" : ""}
      </div>
    </div>
  );
};

export default LineChart;
