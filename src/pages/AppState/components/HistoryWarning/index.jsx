import React from "react";
import Chart from "../Chart";

// import lineChartData from "@/data/appLineChart.json";
import styles from "./index.module.less";

const HistoryWarning = ({dataSource}) => {
  return (
    <div className={styles.container}>
      <Chart data={dataSource}></Chart>
    </div>
  );
};

export default HistoryWarning;
