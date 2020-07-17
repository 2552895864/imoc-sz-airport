import React from "react";
// import { Button } from "antd";
import PageContainer from "@/components/PageContainer";
import ModuleContainer from "@/components/ModuleContainer";
import CurveChart from "./components/CurveChart";
import Pie from "@/components/PieChart";
import GaugeChart from "./components/GaugeChart";

import CurrentWarning from "./components/CurrentWarning";

import lineChartData from "@/data/appLineChart.json";
import styles from "./index.module.less";

export default class AppState extends React.Component {
  render() {
    return (
      <PageContainer title="应用态势">
        {/* <Button type="primary">应用态势</Button> */}
        <div className={styles.flexBox}>
          <div className={styles.left}>
            <ModuleContainer className={styles.currentWarning} title="当前告警">
              {/* <p>ff</p> */}
              <CurrentWarning />
            </ModuleContainer>
            <ModuleContainer className={styles.historyWarning} title="历史告警">
              <CurveChart data={lineChartData}></CurveChart>
            </ModuleContainer>
            <ModuleContainer className={styles.topFive} title="应用性能Top5">
              <p>ff</p>
            </ModuleContainer>
          </div>
          <div className={styles.right}>
            <ModuleContainer className={styles.rightTop} title="操作系统">
              <Pie sumCount={205}></Pie>
            </ModuleContainer>
            <ModuleContainer className={styles.businessApp} title="业务应用">
              <GaugeChart percent={56}></GaugeChart>
            </ModuleContainer>
          </div>
        </div>
      </PageContainer>
    );
  }
}
