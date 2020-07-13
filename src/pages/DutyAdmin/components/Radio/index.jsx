import React, { useState } from "react";
import _ from "lodash";
import classnames from "classnames";
import styles from "./index.module.less";

const Radio = ({ config, onChange }) => {
  // const defaultKey =;
  const [activeKey, setActiveKey] = useState(_.get(config[0], "value", ""));
  const itemClass = (value) =>
    classnames({
      [styles.item]: true,
      [styles.itemSelected]: value === activeKey,
    });
  const handleItem = (value) => {
    if (activeKey !== value) {
      setActiveKey(value);
      onChange(value);
    }
  };
  return (
    <div>
      {config.map((item) => (
        <span
          key={item.value}
          className={itemClass(item.value)}
          onClick={() => handleItem(item.value)}
        >
          {item.label}
        </span>
      ))}
    </div>
  );
};
export default Radio;
