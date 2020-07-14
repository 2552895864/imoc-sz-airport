import React from "react";
import PieChart from "./components/PieChart";
import CountShow from "./components/CountShow";

import styles from "./index.module.less";

const BoxItemOfPie = ({
  label,
  data: { usage = 58.24, sumCount = 24234, unit = "核", usedCount = 7000 },
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.label}>{label}</div>
      <PieChart className={styles.piechart} usage={usage}></PieChart>
      <div className={styles.content}>
        <CountShow
          className={styles.sum}
          count={sumCount}
          unit={unit}
          label={"总量"}
        ></CountShow>
        <CountShow
          className={styles.usage}
          count={usage}
          unit={"%"}
          label={"使用率"}
          countClass={styles.bigcount}
          unitClass={styles.bigunit}
          labelClass={styles.textcenter}
        ></CountShow>
        <CountShow
          className={styles.used}
          count={usedCount}
          unit={unit}
          label={"已使用"}
          labelClass={styles.textleft}
        ></CountShow>
      </div>
    </div>
  );
};

export default BoxItemOfPie;
