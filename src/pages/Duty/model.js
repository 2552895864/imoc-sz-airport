import _ from "lodash";
import { getCurrentTimeStamp } from "@/utils/getDateTime";
import * as service from "./service";

const handleWorkingScheduleList = (data) => {
  // const { currentTimeStamp } = this.state;
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
  const { rotaByDay, leaderList } = data;

  // console.log("currentTimeStamp:", currentTimeStamp);
  const currentDayData = rotaByDay.filter(
    (item) => item.date === getCurrentTimeStamp()
  );
  // const { staffList, leaderList: currentLeaderList } = rotaByDay.filter(
  //   (item) => item.date === getCurrentTimeStamp()
  // )[0];
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
  // console.log("staffList::", staffList);
  console.log("staffByGroup::", staffByGroup);

  return { currentLeaderList, staffByGroup };
};

export default {
  namespace: "Duty",
  state: {
    briefList: [],
    briefLoading: false,
    currentLeaderList: [],
    staffByGroup: [],
  },
  effects: {
    *getLatestOneBrief({ payload }, { put, call }) {
      // console.log("getDutyData modal");
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
      // yield put({
      //   type: "save",
      //   payload: { workingScheduleListLoading: true },
      // });
      try {
        let result = yield call(service.getMaintenanceRotaByDay, payload);
        handleWorkingScheduleList(_.get(result, "data", []));
        const { currentLeaderList, staffByGroup } = handleWorkingScheduleList(
          _.get(result, "data", [])
        );
        yield put({
          type: "save",
          payload: {
            currentLeaderList,
            staffByGroup,
          },
        });
        return result;
      } catch (error) {
        console.log("error:", error);
        // yield put({
        //   type: "save",
        //   payload: { workingScheduleListLoading: false },
        // });
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
