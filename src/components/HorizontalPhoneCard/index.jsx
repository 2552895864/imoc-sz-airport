import React from "react";
import classnames from "classnames";
import styles from "./index.module.less";

export default class HorizontalPhoneCard extends React.Component {
  render() {
    const { className, label, value } = this.props;
    const containerClass = classnames({
      [styles.container]: true,
      [className]: className,
    });
    return (
      <div className={containerClass}>
        <span className={styles.label}>{`${label}:`}</span>
        <span className={styles.value}>{value}</span>
      </div>
    );
  }
}
