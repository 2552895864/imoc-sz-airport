import { message } from "antd";
import _ from "lodash";
import * as service from "./service";

const resultFeedback = ({ success, message: msg }, actionName) => {
  if (success) {
    message.success(`${actionName}成功`);
  } else {
    message.error(`${actionName}失败${msg ? `:${msg}` : ""}`);
  }
};

const orderWorkingScheduleListByDate = (data) => {
  const newData = _.cloneDeep(data);
  if (newData.length) {
    newData.sort((a, b) => {
      const aTimeStamp = new Date(a.date.toString()).valueOf();
      const bTimeStamp = new Date(b.date.toString()).valueOf();
      return aTimeStamp - bTimeStamp;
    });
  }
  // console.log("newData:", newData);
  return newData;
};
const handleWorkingScheduleList = (data) => {
  const workingScheduleList = [];
  const rotaByDay = orderWorkingScheduleListByDate(
    _.get(data, "rotaByDay", [])
  );
  // const leaderList = _.get(data, "leaderList", []);

  rotaByDay.forEach((dayData) => {
    const date = _.get(dayData, "date", "-");
    const staffList = _.get(dayData, "staffList", []);
    const dailyLeaderList = _.get(dayData, "leaderList", []);

    const staffListDay = staffList.filter((staff) => staff.shift === "D");
    const staffListNight = staffList.filter((staff) => staff.shift === "N");

    const dailyLeaderListDay = dailyLeaderList.filter(
      (staff) => staff.shift === "D"
    );
    const dailyLeaderListNight = dailyLeaderList.filter(
      (staff) => staff.shift === "N"
    );

    workingScheduleList.push(
      {
        id: `${date}_D`,
        date,
        type: "白班",
        leader: dailyLeaderListDay,
        member: staffListDay,
      },
      {
        id: `${date}_N`,
        date,
        type: "晚班",
        leader: dailyLeaderListNight,
        member: staffListNight,
      }
    );
  });
  return workingScheduleList;
};

export default {
  namespace: "DutyAdmin",
  state: {
    dutyMonthList: ["2020/06", "2020/07"],
    currentDutyMonth: "2020/07",

    workingScheduleList: [],
    workingScheduleListLoading: false,
    updateWorkingScheduleListLoading: false,

    uploadMsLoading: false,
    uploadDataCenterLoading: false,

    staffList: [],
    leaderList: [],
    staffListLoading: false,
    updateStaffLoading: false,

    briefList: [],
    briefLoading: false,
  },
  effects: {
    *getAllMonth({ payload }, { put, call }) {
      try {
        let result = yield call(service.getAllMonth);
        const dutyMonthList = _.get(result, "data", []);
        yield put({
          type: "save",
          payload: {
            dutyMonthList,
            currentDutyMonth: dutyMonthList[dutyMonthList.length - 1],
          },
        });
        return dutyMonthList;
      } catch (error) {
        console.log("error:", error);
      }
    },
    *getWorkingScheduleList({ payload }, { put, call }) {
      yield put({
        type: "save",
        payload: { workingScheduleListLoading: true },
      });
      try {
        let result = yield call(service.getMaintenanceRotaByDay, payload);
        const originData = _.get(result, "data", []);
        yield put({
          type: "save",
          payload: {
            workingScheduleList: handleWorkingScheduleList(originData),
            workingScheduleListLoading: false,
          },
        });
        return result;
      } catch (error) {
        yield put({
          type: "save",
          payload: { workingScheduleListLoading: false },
        });
      }
    },
    *updateWorkingScheduleList({ payload }, { put, call, select }) {
      yield put({
        type: "save",
        payload: { updateWorkingScheduleListLoading: true },
      });
      try {
        let { success } = yield call(service.updateMSData, payload);
        if (success) {
          const month = yield select((state) => {
            const {
              DutyAdmin: { currentDutyMonth },
            } = state;
            return currentDutyMonth;
          });
          yield put({ type: "getWorkingScheduleList", payload: { month } });
        }
        yield put({
          type: "save",
          payload: { updateWorkingScheduleListLoading: false },
        });
        return success;
      } catch (error) {
        yield put({
          type: "save",
          payload: { updateWorkingScheduleListLoading: false },
        });
      }
    },
    *updateStaffInfo({ payload }, { put, call, select }) {
      yield put({
        type: "save",
        payload: { updateStaffLoading: true },
      });
      try {
        let { success } = yield call(service.updateStaffInfo, payload);
        if (success) {
          yield put({ type: "getStaffInfoByCondition" });
        }
        yield put({
          type: "save",
          payload: { updateStaffLoading: false },
        });
        return success;
      } catch (error) {
        yield put({
          type: "save",
          payload: { updateStaffLoading: false },
        });
      }
    },

    *getStaffInfoByCondition({ payload }, { put, call }) {
      yield put({ type: "save", payload: { staffListLoading: true } });
      try {
        let { data } = yield call(service.getStaffInfoByCondition);
        console.log("getStaffInfoByCondition:");
        yield put({
          type: "save",
          payload: {
            staffList: data,
            leaderList: data.filter((staff) => staff.leader),
            staffListLoading: false,
          },
        });
        return data;
      } catch (error) {
        yield put({ type: "save", payload: { staffListLoading: false } });
        console.log("error:", error);
      }
      // debugger;
    },
    *getBrief({ payload }, { put, call }) {
      try {
        let { data } = yield call(service.getBrief);
        yield put({
          type: "save",
          payload: {
            briefList: data,
          },
        });
        return data;
      } catch (error) {
        console.log("error:", error);
      }
    },
    *addBrief({ payload }, { put, call }) {
      yield put({ type: "save", payload: { briefLoading: true } });
      try {
        let { success } = yield call(service.addBrief, payload);
        if (success) {
          yield put({ type: "getBrief" });
        }
        yield put({ type: "save", payload: { briefLoading: false } });
        return success;
      } catch (error) {
        yield put({ type: "save", payload: { briefLoading: false } });
      }
    },

    *uploadMsData({ payload }, { put, call }) {
      yield put({ type: "save", payload: { uploadMsLoading: true } });
      try {
        let result = yield call(service.uploadMsData, payload);
        yield put({ type: "save", payload: { uploadMsLoading: false } });
        resultFeedback(result, "上传统一运维排班");
        // return success;
      } catch (error) {
        resultFeedback({ success: false }, "上传统一运维排班");
        yield put({ type: "save", payload: { uploadMsLoading: false } });
        console.log("error:", error);
      }
    },
    *uploadDataCenterData({ payload }, { put, call }) {
      yield put({ type: "save", payload: { uploadDataCenterLoading: true } });
      try {
        let result = yield call(service.uploadDataCenterData, payload);
        yield put({
          type: "save",
          payload: { uploadDataCenterLoading: false },
        });
        resultFeedback(result, "上传数据中心排班");
        // return success;
      } catch (error) {
        resultFeedback({ success: false }, "上传数据中心排班");
        yield put({
          type: "save",
          payload: { uploadDataCenterLoading: false },
        });
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
