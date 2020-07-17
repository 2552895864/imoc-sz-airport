import React from "react";
import ModuleContainer from "@/components/ModuleContainer";
import HorizontalPhoneCard from "@/components/HorizontalPhoneCard";
import DividerLine from "@/components/DividerLine";

import styles from "./index.module.less";

const List = ({ data, style = {} }) => {
  let sysCount = 0;
  let comCount = 0;
  return (
    <ul className={styles.list} style={style}>
      {data.map((item) => {
        if (item.name === "系统值班") {
          sysCount += 1;
        }
        if (item.name === "通讯值班") {
          comCount += 1;
        }
        return (
          <li className={styles.item} key={item.value}>
            <HorizontalPhoneCard
              label={item.name}
              value={item.value}
              hideTitle={
                (item.name === "系统值班" && sysCount === 2) ||
                (item.name === "通讯值班" && comCount === 2)
              }
            />
          </li>
        );
      })}
    </ul>
  );
};

const DutyListInfo = ({ data }) => {
  const { groupOne = [], groupTwo = [], groupThree = [] } = data;
  const recordCount = groupOne.length + groupTwo.length + groupThree.length;
  const recordCountHeightMapping = {
    10: "15px",
    9: "27px",
    8: "38px",
  };
  const style = { paddingTop: recordCountHeightMapping[recordCount] };
  return (
    <ModuleContainer className={styles.container}>
      <List data={groupOne} style={style} />
      <DividerLine />
      <List data={groupTwo} style={style} />
      <DividerLine />
      <List data={groupThree} style={style} />
    </ModuleContainer>
  );
};

export default DutyListInfo;
