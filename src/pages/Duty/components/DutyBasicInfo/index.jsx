import React from "react";
import HorizontalPhoneCard from "@/components/HorizontalPhoneCard";
import { generatePhoneCardString } from "../../utils";
import { dispatchPhone } from "@/data/dispatch.json";
import styles from "./index.module.less";

const DutyBasicInfo = ({ data }) => {
  const leaderGroup = ["D", "N"].map((flag) =>
    generatePhoneCardString(data.filter((item) => item.shift === flag)[0])
  );
  return (
    <div className={styles.container}>
      <HorizontalPhoneCard
        className={styles.groupLeader}
        label="值班组长"
        value={leaderGroup}
      />
      <HorizontalPhoneCard
        className={styles.dispatchRoom}
        label="调度室"
        value={dispatchPhone}
      />
    </div>
  );
};

export default DutyBasicInfo;
