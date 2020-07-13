import React from "react";
import styles from "./index.module.less";

const ModuleContainer = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}></div>
      {children}
    </div>
  );
};

export default ModuleContainer;
