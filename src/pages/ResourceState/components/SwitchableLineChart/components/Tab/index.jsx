import React from "react";
import classnames from "classnames";
import styles from "./index.module.less";

const Tab = ({ content, isActive = false, onClick }) => {
  const BorderClass = classnames({
    [styles.bottomborder]: true,
    [isActive ? styles.active : styles.normal]: true,
  });
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.content}>{content}</div>
      <div className={BorderClass}></div>
    </div>
  );
};

export default Tab;
