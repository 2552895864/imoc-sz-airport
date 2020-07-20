import React from "react";
import PageContainer from "@/components/PageContainer";
import ModuleContainer from "@/components/ModuleContainer";
import PieChart from "@/components/PieChart";

import HorizontalLine from "./components/HorizontalLine";
import Table from "./components/Table";

import tableData from "@/data/flowTableData.json";
import PieData from "@/data/flowPieChartData.json";
import styles from "./index.module.less";

export default class FlowSubject extends React.Component {
  render() {
    return (
      <PageContainer title="流程专题">
        <div className={styles.flexBox}>
          <div className={styles.left}>
            <div className={styles.title}>事件管理</div>
            <ModuleContainer className={styles.eventManage} title="">
              <div className={styles.content}>
                <div className={styles.pieChart}>
                  <PieChart
                    width={680}
                    height={266}
                    itemWidth={171}
                    sumCount={Number(1324).toLocaleString()}
                    data={PieData}
                  />
                </div>
                <Table data={tableData}></Table>
              </div>
            </ModuleContainer>
            <ModuleContainer className={styles.eventTrend} title="事件解决趋势">
              <div className={styles.content}>
                <p>ff</p>
              </div>
            </ModuleContainer>
          </div>
          <HorizontalLine />
          <div className={styles.center}>
            <div className={styles.title}>变更管理</div>
            <ModuleContainer className={styles.changeManage} title="">
              <div className={styles.content}></div>
            </ModuleContainer>
            <ModuleContainer
              className={styles.changeTrend}
              title="变更完成趋势"
            >
              <div className={styles.content}>
                <p>ff</p>
              </div>
            </ModuleContainer>
          </div>
          <HorizontalLine />
          <div className={styles.right}>
            <div className={styles.title}>服务请求</div>
            <ModuleContainer className={styles.service} title="">
              <div className={styles.content}></div>
            </ModuleContainer>
            <ModuleContainer
              className={styles.requestTrend}
              title="请求完成趋势"
            >
              <div className={styles.content}>
                <p>ff</p>
              </div>
            </ModuleContainer>
          </div>
        </div>
      </PageContainer>
    );
  }
}
