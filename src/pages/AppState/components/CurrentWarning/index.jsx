import React from "react";
import styles from "./index.module.less";

// const Badge = () => (
//   <span className={styles.badge}>
//     <span className={styles.dot}></span>
//   </span>
// );

const Badge = ({ dataSource: { type, count, title } }) => {
  const colorMapping = {
    urgency: "#FE3657",
    seriousness: "#FD8000",
    warning: "#FEDE00",
    info: "#3F9EFF",
  };
  console.log("colorMapping[type],:", colorMapping[type]);
  const style = {
    backgroundColor: colorMapping[type],
  };
  return (
    <div className={styles.badgeContainer}>
      <div className={styles.number}>{count}</div>
      <div className={styles.circleContainer}>
        <div className={styles.outCircle} style={style}></div>
        <span className={styles.innerCircle} style={style}></span>
      </div>
      <div className={styles.description}>{title}</div>
    </div>
  );
};

const CurrentWarning = () => {
  const data = [
    { type: "urgency", count: 2, title: "紧急" },
    { type: "seriousness", count: 10, title: "严重" },
    { type: "warning", count: 49, title: "警告" },
    { type: "info", count: 126, title: "信息" },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {data.map((item) => (
          <Badge dataSource={item} />
        ))}
      </div>
    </div>
  );
};

export default CurrentWarning;
