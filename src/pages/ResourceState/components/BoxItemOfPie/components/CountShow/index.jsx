import React from "react";
import classnames from "classnames";
import styles from "./index.module.less";

const CountShow = ({
  isNumberNeedParse = true,
  count,
  unit = "",
  label = "",
  className = "",
  labelClass = "",
  countClass = "",
  unitClass = "",
}) => {
  const ContainerClass = classnames({
    [styles.container]: true,
    [className]: className,
  });
  const LabelClass = classnames({
    [styles.label]: true,
    [labelClass]: labelClass,
  });
  const CountClass = classnames({
    [styles.count]: true,
    [countClass]: countClass,
  });
  const UnitClass = classnames({
    [styles.unit]: true,
    [unitClass]: unitClass,
  });
  return (
    <div className={ContainerClass}>
      <div className={styles.countcontent}>
        <div className={CountClass}>{count.toLocaleString()}</div>
        <div className={UnitClass}>{unit}</div>
      </div>
      <div className={LabelClass}>{label}</div>
    </div>
  );
};

export default CountShow;
