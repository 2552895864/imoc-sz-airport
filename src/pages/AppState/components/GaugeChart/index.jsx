import React from "react";
import Gauge from "@/components/Gauge";
import options from "./config/options.json";
import styles from "./index.module.less";

const GaugeChart = ({ percent }) => {
  return (
    <Gauge className={styles.chart} percent={percent} options={options}></Gauge>
  );
};

export default GaugeChart;
