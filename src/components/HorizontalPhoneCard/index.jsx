import React from "react";
import classnames from "classnames";
import styles from "./index.module.less";

export default class HorizontalPhoneCard extends React.Component {
  render() {
    const { className, label, value, hideTitle } = this.props;
    const containerClass = classnames({
      [styles.container]: true,
      [className]: className,
    });
    const labelClass = classnames({
      [styles.label]: true,
      [styles.labelHidden]: hideTitle,
    })
    const valueIsArray = Array.isArray(value);
    return (
      <div className={containerClass}>
        <div className={labelClass}>{`${label}:`}</div>
        <div className={styles.valueContainer}>
          {valueIsArray ? (
            value.map((item) => (
              <span className={styles.multiValue} key={item}>
                {item}
              </span>
            ))
          ) : (
            <span className={styles.value}>{value}</span>
          )}
        </div>
      </div>
    );
  }
}
