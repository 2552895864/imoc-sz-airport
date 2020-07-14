import React from "react";
import styles from "./index.module.less";

/**
 * 
 *
    title - 盒子标题,

 */
const ShineNoteTitle = ({ title = "标题" }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{title}</div>
    </div>
  );
};

export default ShineNoteTitle;
