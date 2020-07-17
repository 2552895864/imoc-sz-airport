import React from "react";
import LineChart from "@/components/LineChart";
import options from "./config/options.json";
import styles from "./index.module.less";

const CurveChart = ({ data }) => {
  return (
    <LineChart
      className={styles.chart}
      labelClass={styles.label}
      data={data}
      label="日期"
      options={options}
    ></LineChart>
  );
};

export default CurveChart;
