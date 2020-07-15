import React from "react";
import styles from "./index.module.less";

const Badge = () => (
  <span className={styles.badge}>
    <span className={styles.dot}></span>
  </span>
);

const CurrentWarning = () => {
  return (
    <div className={styles.container}>
      <Badge />
      CurrentWarning
    </div>
  );
};

export default CurrentWarning;
