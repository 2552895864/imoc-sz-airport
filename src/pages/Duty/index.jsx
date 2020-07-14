import React from "react";
import PageContainer from "@/components/PageContainer";
import WeatherAndTime from "./components/WeatherAndTime";
import DutyBasicInfo from "./components/DutyBasicInfo";
import Brief from "./components/Brief";
import DutyListInfo from "./components/DutyListInfo";
import DutyGroupInfo from "./components/DutyGroupInfo";

import { getCurrentTimeStamp } from "@/utils/getDateTime";
import dutyData from "@/data/dutyInfoByGroup1.json";
import weatherData from "@/data/天气.json";
import dutyListData from "@/data/dutyList.json";
import briefData from "@/data/简报通知.json";

import styles from "./index.module.less";

export default class Duty extends React.Component {
  state = {
    currentTimeStamp: getCurrentTimeStamp(),
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

    // console.log("currentTimeStamp:", currentTimeStamp);
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
    // console.log("staffList::", staffList);
    // console.log("staffByGroup::", staffByGroup);

    return { currentLeaderList, staffByGroup };
  };

  render() {
    const { currentLeaderList, staffByGroup } = this.handleDutyData();
    return (
      <PageContainer title="统一运维值班表" needTimeZone={false}>
        {/* 上部信息 */}
        <div className={styles.top}>
          <WeatherAndTime weatherData={weatherData} />
          <div className={styles.topRight}>
            <DutyBasicInfo data={currentLeaderList} />
            <Brief data={briefData} />
          </div>
        </div>
        {/* 下部信息 */}
        <div className={styles.bottom}>
          <DutyListInfo data={dutyListData} />
          <DutyGroupInfo data={staffByGroup} />
          {/* <DividerLine/> */}
        </div>
      </PageContainer>
    );
  }
}
