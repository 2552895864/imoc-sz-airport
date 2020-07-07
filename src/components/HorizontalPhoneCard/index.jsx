import React from "react";
import styles from "./index.module.css";
import classnames from "classnames";

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
