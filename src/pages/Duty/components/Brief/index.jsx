import React from "react";
import styles from "./index.module.less";

const Brief = ({data}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>工作简报/重要通知：</div>
      <ul className={styles.list}>
        {data.map((item) => (
          <li className={styles.item} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Brief;
