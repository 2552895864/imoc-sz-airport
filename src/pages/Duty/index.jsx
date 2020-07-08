import React from "react";
import WeatherAndTime from "./components/WeatherAndTime";
import DutyBasicInfo from "./components/DutyBasicInfo";
import Brief from "./components/Brief";
import DutyListInfo from "./components/DutyListInfo";
import DutyGroupInfo from "./components/DutyGroupInfo";

import data from "@/assets/test.json";

import styles from "./index.module.less";

export default class Duty extends React.Component {
  render() {
    console.log("data::::", data);
    return (
      <div className={styles.container}>
        <div className={styles.header}>统一运维值班表</div>
        <div className={styles.content}>
          {/* 上部信息 */}
          <div className={styles.top}>
            <WeatherAndTime />
            <div className={styles.topRight}>
              <DutyBasicInfo />
              <Brief />
            </div>
          </div>
          {/* 下部信息 */}
          <div className={styles.bottom}>
            <DutyListInfo />
            <DutyGroupInfo />
            {/* <DividerLine/> */}
          </div>
        </div>
      </div>
    );
  }
}
