import React from "react";
import CurveChart from "../CurveChart";

// import lineChartData from "@/data/appLineChart.json";
import styles from "./index.module.less";

const HistoryWarning = ({ dataSource }) => {
  return (
    <div className={styles.container}>
      <CurveChart data={dataSource}></CurveChart>
    </div>
  );
};

export default HistoryWarning;
