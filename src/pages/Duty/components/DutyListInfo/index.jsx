import React from "react";
import HorizontalPhoneCard from "@/components/HorizontalPhoneCard";
import DividerLine from "@/components/DividerLine";
import styles from "./index.module.less";

const data1 = [
  { name: "值班01", value: "李磊 13022221111" },
  { name: "值班经理", value: "李磊 13022221111" },
];
const data2 = [
  { name: "数据中心", value: "李磊 13022221111" },
  { name: "通讯运维", value: "李磊 13022221111" },
];
const data3 = [
  { name: "系统值班", value: "李磊 13022221111" },
  { name: "安防值班", value: "李磊 13022221111" },
  { name: "网络值班", value: "李磊 13022221111" },
  { name: "通讯值班", value: "李磊 13022221111" },
];

const List = ({ data }) => (
  <ul className={styles.list}>
    {data.map((item) => (
      <li className={styles.item} key={item.name}>
        <HorizontalPhoneCard label={item.name} value={item.value} />
      </li>
    ))}
  </ul>
);

export default class DutyListInfo extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <List data={data1} />
        <DividerLine />
        <List data={data2} />
        <DividerLine />
        <List data={data3} />
      </div>
    );
  }
}
