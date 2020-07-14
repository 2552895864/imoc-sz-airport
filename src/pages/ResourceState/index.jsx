import React from "react";
import PageContainer from "./components/PageContainer";
import OverView from "./components/OverView";
import DeviceInfo from "./components/DeviceInfo";

import resourceDevices from "@/data/resourceDevices";

import styles from "./index.module.less";

export default class ResourceState extends React.Component {
  render() {
    return (
      <PageContainer title="资源态势">
        <div className={styles.content}>
          <div className={styles.left}></div>
          <div className={styles.center}>
            <div className={styles.centertop}>
              <OverView></OverView>
            </div>
            <div className={styles.centerbottom}>
              <DeviceInfo data={resourceDevices.data}></DeviceInfo>
            </div>
          </div>
          <div className={styles.right}></div>
          <div className={styles.footer}></div>
        </div>
      </PageContainer>
    );
  }
}
