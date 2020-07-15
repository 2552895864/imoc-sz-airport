import React from "react";
import { connect } from "dva";
import styles from "./index.module.less";

const Brief = ({ briefList, previewData }) => {
  const finalData = previewData && previewData.length ? previewData : briefList;
  return (
    <div className={styles.container}>
      <div className={styles.title}>工作简报/重要通知：</div>
      <ul className={styles.list}>
        {finalData.map((item, index) => (
          <li className={styles.item} key={`${index}_${item}`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default connect(({ Duty }) => Duty)(Brief);
