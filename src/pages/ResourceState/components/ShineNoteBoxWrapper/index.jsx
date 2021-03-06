import React from "react";
import BoxBottomBorder from "./components/BoxBottomBorder";
import ShineNoteTitle from "./components/ShineNoteTitle";
import styles from "./index.module.less";

/**
 * 
 *
    title - 默认标题,

 */
const ShineNoteBoxWrapper = ({ children, title = "虚拟资源概览" }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <ShineNoteTitle title={title} />
        <div className={styles.shinenote}></div>
      </div>
      <div className={styles.content}>{children}</div>
      <div className={styles.footer}>
        <BoxBottomBorder />
      </div>
    </div>
  );
};

export default ShineNoteBoxWrapper;
