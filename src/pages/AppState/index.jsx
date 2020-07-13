import React from "react";
// import { Button } from "antd";
import PageContainer from "@/components/PageContainer";
import ModuleContainer from "@/components/ModuleContainer";

import styles from "./index.module.less";

export default class AppState extends React.Component {
  render() {
    return (
      <PageContainer title="应用态势">
        {/* <Button type="primary">应用态势</Button> */}
        <div className={styles.flexBox}>
          <div className={styles.left}>
            <ModuleContainer className={styles.currentWarning} title="当前告警">
              <p>ff</p>
            </ModuleContainer>
            <ModuleContainer className={styles.historyWarning} title="历史告警">
              <p>ff</p>
            </ModuleContainer>
            <ModuleContainer className={styles.topFive} title="应用性能Top5">
              <p>ff</p>
            </ModuleContainer>
          </div>
          <div className={styles.right}>
            <ModuleContainer className={styles.rightTop} title="操作系统">
              <p>ff</p>
            </ModuleContainer>
            <ModuleContainer className={styles.businessApp} title="业务应用">
              <p>ff</p>
            </ModuleContainer>
          </div>
        </div>
      </PageContainer>
    );
  }
}
