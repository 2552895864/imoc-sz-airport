import React from "react";
import styles from "./index.module.less";
import DeviceCounts from "./components/DeviceCounts";

/**
 * 
 *
    data:{
      "value": 54,
      "label": "服务器总数",
      "iconName": "services"
    },
 */
const DeviceInfo = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <DeviceCounts {...item} />
      ))}
    </div>
  );
};

export default DeviceInfo;
