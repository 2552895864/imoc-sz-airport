import React from "react";
import styles from "./index.module.less";
import HorizontalPhoneCard from "@/components/HorizontalPhoneCard";

export default class DutyBasicInfo extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <HorizontalPhoneCard
          className={styles.groupLeader}
          label="值班组长"
          value="李磊 13022221111 王力 130XXXXXXXX"
        />
        <HorizontalPhoneCard
          className={styles.dispatchRoom}
          label="调度室"
          value="联系电话：11233344"
        />
      </div>
    );
  }
}
