import React from "react";
import { connect } from "dva";
import PageContainer from "@/components/PageContainer";
import WeatherAndTime from "./components/WeatherAndTime";
import DutyBasicInfo from "./components/DutyBasicInfo";
import Brief from "./components/Brief";
import DutyListInfo from "./components/DutyListInfo";
import DutyGroupInfo from "./components/DutyGroupInfo";

import {
  getCurrentTimeStamp,
  getCurrentTimeStampByMonth,
} from "@/utils/getDateTime";
// import dutyData from "@/data/dutyInfoByGroup1.json";
import weatherData from "@/data/天气.json";
// import dutyListData from "@/data/dutyList.json";
import briefData from "@/data/简报通知.json";

import styles from "./index.module.less";

let timer = null;
@connect(({ Duty }) => Duty)
class Duty extends React.Component {
  state = {
    currentTimeStamp: getCurrentTimeStamp(),
  };
  componentDidMount() {
    this.getDutyData();
    // const self = this;
    // timer = setInterval(() => {
    //   self.getDutyData();
    // }, 10000);
  }
  componentWillUnmount() {
    clearInterval(timer);
  }
  getDutyData = () => {
    const { dispatch } = this.props;
    dispatch({ type: "Duty/getLatestOneBrief" });
    dispatch({
      type: "Duty/getWorkingScheduleList",
      payload: { month: getCurrentTimeStampByMonth() },
    });
  };

  render() {
    const {
      currentLeaderList,
      staffByGroup,
      workingScheduleManager,
    } = this.props;
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
          <DutyListInfo data={workingScheduleManager} />
          <DutyGroupInfo data={staffByGroup} />
        </div>
      </PageContainer>
    );
  }
}

export default Duty;
