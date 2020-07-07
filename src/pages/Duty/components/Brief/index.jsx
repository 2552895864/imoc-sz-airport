import React from "react";
import styles from "./index.module.css";

const data = [
  "【 日常巡检 】：2020年6月12日巡检已完成，巡检项12,456个，巡检报告123个",
  "【 工单处理 】：今日事件管理已解决1,234个，变更管理已完成123个，服务请求已完成456个",
  "【 通知 】：今日12,345平台有变更，请相关人员提前准备",
];
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
