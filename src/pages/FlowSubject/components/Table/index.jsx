import React from "react";
import classnames from "classnames";
import styles from "./index.module.less";

const labelMap = {
  number: "个数",
  avg: "平均解决时长(ms)",
  percent: "及时解决率",
};

const Table = ({ data = {}, className }) => {
  const containerClass = classnames({
    [styles.container]: true,
    [className]: className,
  });
  return (
    <div className={containerClass}>
      <table className={styles.content}>
        <thead className={styles.row}>
          <td className={styles.tableName}>优先级</td>
          {["紧急", "重要", "一般", "低"].map((item) => (
            <td>{item}</td>
          ))}
        </thead>
        <tbody className={styles.body}>
          {(() => {
            const arr = Object.entries(data);
            return arr.map(([key, value], index) => (
              <tr
                className={styles[index === arr.length - 1 ? "lastRow" : "row"]}
              >
                <td className={styles.firstColum}>{labelMap[key]}</td>
                <td className={styles.secondColum}>{value.urgent}</td>
                <td className={styles.thirdColum}>{value.important}</td>
                <td className={styles.fourthColum}>{value.low}</td>
                <td className={styles.lastColum}>{value.normal}</td>
              </tr>
            ));
          })()}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
