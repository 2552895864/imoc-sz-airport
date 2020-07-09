import React from "react";
import WeatherAndTime from "./components/WeatherAndTime";
import DutyBasicInfo from "./components/DutyBasicInfo";
import Brief from "./components/Brief";
import DutyListInfo from "./components/DutyListInfo";
import DutyGroupInfo from "./components/DutyGroupInfo";

import { getCurrentTimeStamp } from "@/utils/getDateTime";
import dutyData from "@/data/dutyInfoByGroup1.json";

import styles from "./index.module.less";

export default class Duty extends React.Component {
  state = {
    currentTimeStamp: getCurrentTimeStamp(),
  };
  handleDateChange = (e) => {
    const selectDate = e.target.value.replace(/-/g, "/");
    // console.log("selectDate:", selectDate);
    this.setState({
      currentTimeStamp: selectDate,
    });
  };
  handleDutyData = () => {
    const { currentTimeStamp } = this.state;
    const staffByGroup = [];
    const groupName = [
      "机位/IOC",
      "ROMA",
      "大数据",
      "云计算",
      "视频安防",
      "UCC",
      "数通网络",
      "LTE",
    ];
    // const currentTimeStamp = getCurrentTimeStamp();
    const { rotaByDay, leaderList } = dutyData;

    const { staffList, leaderList: currentLeaderList } = rotaByDay.filter(
      (item) => item.date === currentTimeStamp
    )[0];

    groupName.forEach((item) => {
      staffByGroup.push({
        [item]: [
          ...staffList.filter((staff) => staff.staffGroup === item),
          ...leaderList.filter((leader) => leader.staffGroup === item),
        ],
      });
    });
    console.log("staffList::", staffList);
    console.log("staffByGroup::", staffByGroup);

    return { currentLeaderList, staffByGroup };
  };

  render() {
    const { currentLeaderList, staffByGroup } = this.handleDutyData();
    return (
      <div className={styles.container}>
        <div className={styles.header}>统一运维值班表</div>
        <input
          type="date"
          style={{ position: "absolute" }}
          onChange={this.handleDateChange}
          className={styles.testCalendar}
        />
        <div className={styles.content}>
          {/* 上部信息 */}
          <div className={styles.top}>
            <WeatherAndTime />
            <div className={styles.topRight}>
              <DutyBasicInfo data={currentLeaderList} />
              <Brief />
            </div>
          </div>
          {/* 下部信息 */}
          <div className={styles.bottom}>
            <DutyListInfo />
            <DutyGroupInfo data={staffByGroup} />
            {/* <DividerLine/> */}
          </div>
        </div>
      </div>
    );
  }
}
