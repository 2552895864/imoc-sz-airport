import React, { useState } from "react";
import LineChart from "./components/LineChart";
import Tab from "./components/Tab";

import styles from "./index.module.less";

const SwitchableLineChart = ({data}) => {
  const [mode, setMode] = useState("week");
  const handleTabClick = (clickMode) => setMode(clickMode);
  const isActive = (target) => (mode === target ? true : false);

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {isActive("week") ? (
          <Tab
            content="一周"
            isActive={true}
            onClick={handleTabClick.bind(this, "week")}
          ></Tab>
        ) : (
          <Tab
            content="一周"
            isActive={false}
            onClick={handleTabClick.bind(this, "week")}
          ></Tab>
        )}
        {isActive("hour") ? (
          <Tab
            content="24小时"
            isActive={true}
            onClick={handleTabClick.bind(this, "hour")}
          ></Tab>
        ) : (
          <Tab
            content="24小时"
            isActive={false}
            onClick={handleTabClick.bind(this, "hour")}
          ></Tab>
        )}
      </div>
      <LineChart className={styles.chart} data={data} mode={mode}></LineChart>
    </div>
  );
};

export default SwitchableLineChart;
