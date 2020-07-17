import _ from "lodash";
import { getCurrentTimeStamp } from "@/utils/getDateTime";
import * as service from "./service";

const handleWorkingScheduleList = (data) => {
  // const { currentTimeStamp } = this.state;
  const staffByGroup = [];
  const managerList = [];
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
  const managerNameList = [
    "值班01",
    "值班经理",
    "数据中心",
    "通信运维",
    "系统",
    "安防",
    "网络",
    "manager",
  ];
  const workingScheduleManager = {
    groupOne: [],
    groupTwo: [],
    groupThree: [],
  };

  const { rotaByDay, leaderList } = data;
  const currentDayData = rotaByDay.filter(
    (item) => item.date === getCurrentTimeStamp()
  );
  const staffList = _.get(currentDayData[0], "staffList", []);
  const currentLeaderList = _.get(currentDayData[0], "leaderList", []);

  groupName.forEach((item) => {
    staffByGroup.push({
      [item]: [
        ...staffList.filter((staff) => staff.staffGroup === item),
        ...leaderList.filter((leader) => leader.staffGroup === item),
      ],
    });
  });

  managerNameList.forEach((name) => {
    managerList.push(...staffList.filter((staff) => staff.staffGroup === name));
  });
  // console.log("managerList::", managerList);
  workingScheduleManager.groupOne.push(
    ...managerList
      .filter((staff) => ["值班01", "值班经理"].includes(staff.staffGroup))
      .map((item) => ({
        name: item.staffGroup,
        value: `${item.staffName} ${item.staffMobile}`,
      }))
  );
  workingScheduleManager.groupTwo.push(
    ...managerList
      .filter((staff) => ["数据中心", "通信运维"].includes(staff.staffGroup))
      .map((item) => ({
        name: item.staffGroup,
        value: `${item.staffName} ${item.staffMobile}`,
      }))
  );
  workingScheduleManager.groupThree.push(
    ...managerList
      .filter((staff) =>
        ["系统", "安防", "网络", "manager"].includes(staff.staffGroup)
      )
      .map((item) => ({
        name: `${item.staffGroup === "manager" ? "通讯" : item.staffGroup}值班`,
        value: `${item.staffName} ${item.staffMobile}`,
      }))
  );
  console.log("workingScheduleManager::", workingScheduleManager);
  // console.log("staffList::", staffList);
  return { currentLeaderList, staffByGroup, workingScheduleManager };
};

export default {
  namespace: "Duty",
  state: {
    briefList: [],
    briefLoading: false,
    currentLeaderList: [],
    staffByGroup: [],
    workingScheduleManager: [],
  },
  effects: {
    *getLatestOneBrief({ payload }, { put, call }) {
      try {
        let { data } = yield call(service.getLatestOneBrief);
        const briefList = _.get(data[0], "content", "")
          .split(/[(\r\n)\r\n]+/)
          .filter((item) => item !== "");
        yield put({ type: "save", payload: { briefList } });
        return briefList;
      } catch (error) {
        console.log("getLatestOneBrief Error:", error);
        return false;
      }
    },
    /**
     * 获取排班信息
     */
    *getWorkingScheduleList({ payload }, { put, call }) {
      try {
        let result = yield call(service.getMaintenanceRotaByDay, payload);
        handleWorkingScheduleList(_.get(result, "data", []));
        const {
          currentLeaderList,
          staffByGroup,
          workingScheduleManager,
        } = handleWorkingScheduleList(_.get(result, "data", []));
        yield put({
          type: "save",
          payload: {
            currentLeaderList,
            staffByGroup,
            workingScheduleManager,
          },
        });
        return result;
      } catch (error) {
        console.log("error:", error);
      }
    },
  },
  reducers: {
    save: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
