import React from "react";
import { connect } from "dva";
import ModuleContainer from '@/components/ModuleContainer';
import styles from "./index.module.less";

const Brief = ({ briefList, previewData }) => {
  const finalData = previewData && previewData.length ? previewData : briefList;
  return (
    <ModuleContainer className={styles.container} title="工作简报/重要通知：">
      <ul className={styles.list}>
        {finalData.map((item, index) => (
          <li className={styles.item} key={`${index}_${item}`}>
            {item}
          </li>
        ))}
      </ul>
    </ModuleContainer>
  );
};

export default connect(({ Duty }) => Duty)(Brief);
