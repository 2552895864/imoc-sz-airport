import React from "react";
import PageContainer from "@/components/PageContainer";
import ModuleContainer from "@/components/ModuleContainer";
import Pie from "@/components/PieChart";
import GaugeChart from "./components/GaugeChart";
import SliderChart from "@/components/SliderChart";

import CurrentWarning from "./components/CurrentWarning";
import HistoryWarning from "./components/HistoryWarning";
import TopFive from "./components/TopFive";

import lineChartData from "@/data/appLineChart.json";
import pieChartData from "@/data/flowPieChartData.json";
import styles from "./index.module.less";

export default class AppState extends React.Component {
  render() {
    return (
      <PageContainer title="应用态势">
        <div className={styles.flexBox}>
          <div className={styles.left}>
            <ModuleContainer className={styles.currentWarning} title="当前告警">
              <CurrentWarning />
            </ModuleContainer>
            <ModuleContainer className={styles.historyWarning} title="历史告警">
              <HistoryWarning dataSource={lineChartData} />
            </ModuleContainer>
            <ModuleContainer className={styles.topFive} title="应用性能Top5">
              <TopFive />
            </ModuleContainer>
          </div>
          <div className={styles.right}>
            <ModuleContainer className={styles.rightTop} title="操作系统">
              <Pie data={pieChartData} sumCount={205}></Pie>
            </ModuleContainer>
            <ModuleContainer className={styles.businessApp} title="业务应用">
              <GaugeChart percent={88}></GaugeChart>
              <SliderChart></SliderChart>
            </ModuleContainer>
          </div>
        </div>
      </PageContainer>
    );
  }
}
