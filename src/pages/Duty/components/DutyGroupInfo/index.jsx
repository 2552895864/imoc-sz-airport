import React from "react";
import classnames from "classnames";
import styles from "./index.module.less";

const data = [
  {
    groupName: "机位/IOC组",
    leaderName: ["王超 12200009999"],
    member: ["李丽（白） 13066665555", "王丽（晚） 13299998888"],
  },
  {
    groupName: "ROMA组",
    leaderName: ["王超 12200009999"],
    member: ["李丽（白） 13066665555", "王丽（晚） 13299998888"],
  },
  {
    groupName: "大数据组",
    leaderName: ["王超 12200009999"],
    member: ["李丽（白） 13066665555", "王丽（晚） 13299998888"],
  },
  {
    groupName: "云计算组",
    leaderName: ["王超 12200009999"],
    member: ["李丽（白） 13066665555", "王丽（晚） 13299998888"],
  },
  {
    groupName: "视频安防组",
    leaderName: ["王超 12200009999"],
    member: ["李丽（白） 13066665555", "王丽（晚） 13299998888"],
  },
  {
    groupName: "UCC组",
    leaderName: ["王超 12200009999"],
    member: ["李丽（白） 13066665555", "王丽（晚） 13299998888"],
  },
  {
    groupName: "数通网络组",
    leaderName: ["王超 12200009999"],
    member: ["李丽（白） 13066665555", "王丽（晚） 13299998888"],
  },
  {
    groupName: "LTE组",
    leaderName: ["王超 12200009999"],
    member: ["李丽（白） 13066665555", "王丽（晚） 13299998888"],
  },
];

const PhoneCard = ({ data, isLeader = false, style }) => (
  <div className={styles.phoneCardContainer} style={style}>
    <div className={styles.phoneCardPosition}>
      {`${isLeader ? "组长" : "当班"}：`}
    </div>
    <ul className={styles.phoneCardMemberList}>
      {data.map((item) => (
        <li className={styles.phoneCardMemberItem} key={item}>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const GroupItemCard = ({ data, index }) => {
  const { groupName, leaderName, member } = data;
  const isQuadruple = (index + 1) % 4 === 0; //是否是第四列
  const cardClass = classnames({
    [styles.cardContainer]:true,
    [styles.cardContainerExtra]:isQuadruple,
  })
  return (
    <div className={cardClass}>
      <div className={styles.cardTitle}>{groupName}</div>
      <PhoneCard data={leaderName} isLeader />
      <PhoneCard data={member} style={{ marginTop: "45px" }} />
    </div>
  );
};

export default class Brief extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        {data.map((item, index) => (
          <GroupItemCard key={item.groupName} data={item} index={index} />
        ))}
      </div>
    );
  }
}
