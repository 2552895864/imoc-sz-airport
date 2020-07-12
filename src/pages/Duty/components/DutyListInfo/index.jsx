import React from "react";
import HorizontalPhoneCard from "@/components/HorizontalPhoneCard";
import DividerLine from "@/components/DividerLine";

import styles from "./index.module.less";

const List = ({ data }) => (
  <ul className={styles.list}>
    {data.map((item) => (
      <li className={styles.item} key={item.name}>
        <HorizontalPhoneCard
          label={item.name}
          value={item.value}
          hideTitle={item.hideTitle}
        />
      </li>
    ))}
  </ul>
);

const DutyListInfo = ({ data }) => {
  const { groupOne, groupTwo, groupThree } = data;
  return (
    <div className={styles.container}>
      <List data={groupOne} />
      <DividerLine />
      <List data={groupTwo} />
      <DividerLine />
      <List data={groupThree} />
    </div>
  );
};

export default DutyListInfo;
