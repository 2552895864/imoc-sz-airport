import React from "react";
import data from '@/data/简报通知.json';
import styles from "./index.module.less";

export default class Brief extends React.Component {
  render() {
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
  }
}
