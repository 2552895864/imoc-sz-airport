import React from "react";
import HorizontalPhoneCard from "@/components/HorizontalPhoneCard";
import DividerLine from "@/components/DividerLine";
import data from "@/data/dutyList.json";
import styles from "./index.module.less";


const List = ({ data }) => (
  <ul className={styles.list}>
    {data.map((item) => (
      <li className={styles.item} key={item.name}>
        <HorizontalPhoneCard label={item.name} value={item.value} hideTitle={item.hideTitle}/>
      </li>
    ))}
  </ul>
);

export default class DutyListInfo extends React.Component {
  render() {
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
  }
}
