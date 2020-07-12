import React from "react";
import classnames from "classnames";
import styles from "./index.module.less";

const ModuleLayout = ({ children, title }) => {
  const titleClass = classnames({
    [styles.title]: true,
    [styles.titleHidden]: !title,
  });
  return (
    <div className={styles.container}>
      <div className={titleClass}>{title}</div>
      {children}
    </div>
  );
};
export default ModuleLayout;
