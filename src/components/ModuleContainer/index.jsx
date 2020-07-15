import React from "react";
import classnames from "classnames";
import styles from "./index.module.less";
const Decorate = () => (
  <>
    <span className={styles.angle}></span>
    <span className={styles.angle}></span>
    <span className={styles.angle}></span>
    <span className={styles.angle}></span>
    <div className={styles.topGradient}></div>
    <div className={styles.bottomGradient}></div>
    <div className={styles.leftLine}></div>
    <div className={styles.rightLine}></div>
  </>
);
const ModuleContainer = ({ children, className, title }) => {
  const containerClass = classnames({
    [styles.container]: true,
    [className]: className,
  });
  const titleClass = classnames({
    [styles.title]: true,
    [styles.hideTitle]: !title,
  });
  return (
    <div className={containerClass}>
      <Decorate />
      <div className={titleClass}>{title}</div>
      {children}
    </div>
  );
};

export default ModuleContainer;
