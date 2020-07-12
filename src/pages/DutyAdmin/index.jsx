import React from "react";
import ModuleLayout from "./components/ModuleLayout";
import DownUp from "./components/DownUp";
import styles from "./index.module.less";

export default class DutyAdmin extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <ModuleLayout>
          <DownUp />
        </ModuleLayout>
        <ModuleLayout title="排版月份">排版月份</ModuleLayout>
        <ModuleLayout title="排版详情">排版详情</ModuleLayout>
      </div>
    );
  }
}
