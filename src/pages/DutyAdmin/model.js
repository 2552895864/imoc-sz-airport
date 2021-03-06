import { message } from "antd";
import _ from "lodash";
import * as service from "./service";

const resultFeedback = ({ success, message: msg }, actionName) => {
  if (success) {
    message.success(`${actionName}成功`);
  } else {
    message.error(`${actionName}失败${msg ? `:${msg}` : ""}`);
  }
  return success;
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
  return newData;
};
const handleWorkingScheduleList = (data) => {
  const workingScheduleList = [];
  const workingScheduleListForManager = [];
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
    const dailyManagerList = staffList.filter((staff) => staff.shift === null);

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
    workingScheduleListForManager.push({
      id: date,
      date,
      dailyManagerList,
    });
  });
  return { workingScheduleList, workingScheduleListForManager };
};

const orderStaffList = (data) => {
  const finalStaffList = [];
  const leaderList = data.filter((item) => item.leader);
  const memberList = data.filter((item) => !item.leader);
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
  groupName.forEach((name) => {
    const leader = leaderList.filter((i) => i.staffGroup === name);
    const member = memberList.filter((i) => i.staffGroup === name);
    const arr = [...leader, ...member];
    finalStaffList.push(...arr);
  });
  return finalStaffList;
};

export default {
  namespace: "DutyAdmin",
  state: {
    uploadMsLoading: false,
    uploadDataCenterLoading: false,
    uploadCmLoading: false,

    dutyMonthList: [],
    currentDutyMonth: "",

    workingScheduleList: [],
    workingScheduleListForManager: [],
    workingScheduleListLoading: false,
    updateWorkingScheduleListLoading: false,

    staffList: [],
    leaderList: [],
    staffListLoading: false,
    updateStaffLoading: false,

    briefList: [],
    briefLoading: false,
    updateBriefLoading: false,
  },
  effects: {
    /**
     * 获取全部月份
     */
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
    /**
     * 获取排班信息
     */
    *getWorkingScheduleList({ payload }, { put, call }) {
      yield put({
        type: "save",
        payload: { workingScheduleListLoading: true },
      });
      try {
        let result = yield call(service.getMaintenanceRotaByDay, payload);
        const {
          workingScheduleList,
          workingScheduleListForManager,
        } = handleWorkingScheduleList(_.get(result, "data", []));
        yield put({
          type: "save",
          payload: {
            workingScheduleList,
            workingScheduleListForManager,
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
    /**
     * 更新排班信息
     */
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
    /**
     * 获取运维人员信息
     */
    *getStaffInfoByCondition({ payload }, { put, call }) {
      yield put({ type: "save", payload: { staffListLoading: true } });
      try {
        let { data } = yield call(service.getStaffInfoByCondition, payload);
        yield put({
          type: "save",
          payload: {
            staffList: orderStaffList(data),
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
    /**
     * 更新运维人员信息
     */
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
    /**
     * 获取简报信息
     */
    *getBrief({ payload }, { put, call }) {
      yield put({ type: "save", payload: { briefLoading: true } });
      try {
        let { data } = yield call(service.getBrief);
        yield put({
          type: "save",
          payload: {
            briefList: data,
            briefLoading: false,
          },
        });
        return data;
      } catch (error) {
        console.log("error:", error);
        yield put({ type: "save", payload: { briefLoading: false } });
      }
    },
    /**
     * 添加简报信息
     */
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
    *deleteBrief({ payload }, { put, call }) {
      yield put({ type: "save", payload: { briefLoading: true } });
      try {
        let { success } = yield call(service.deleteBrief, payload);
        if (success) {
          yield put({ type: "getBrief" });
        }
        yield put({ type: "save", payload: { briefLoading: false } });
        return success;
      } catch (error) {
        yield put({ type: "save", payload: { briefLoading: false } });
      }
    },
    /**
     * 更新简报信息
     */
    *updateBrief({ payload }, { put, call }) {
      yield put({ type: "save", payload: { updateBriefLoading: true } });
      try {
        let { success } = yield call(service.updateBrief, payload);
        if (success) {
          yield put({ type: "getBrief" });
        }
        yield put({ type: "save", payload: { updateBriefLoading: false } });
        return success;
      } catch (error) {
        yield put({ type: "save", payload: { updateBriefLoading: false } });
      }
    },
    /**
     * 上传月度排班信息
     */
    *uploadMsData({ payload }, { put, call, select }) {
      yield put({ type: "save", payload: { uploadMsLoading: true } });
      try {
        let result = yield call(service.uploadMsData, payload);
        yield put({ type: "save", payload: { uploadMsLoading: false } });
        const isSuccess = resultFeedback(result, "上传统一运维排班");
        const successDate = _.get(result, "data", "");
        if (isSuccess) {
          yield put({
            type: "getWorkingScheduleList",
            payload: { month: successDate },
          });
          let monthResult = yield call(service.getAllMonth);
          const dutyMonthList = _.get(monthResult, "data", []);
          yield put({
            type: "save",
            payload: {
              dutyMonthList,
              currentDutyMonth: successDate,
            },
          });
        }
        // return success;
      } catch (error) {
        resultFeedback({ success: false }, "上传统一运维排班");
        yield put({ type: "save", payload: { uploadMsLoading: false } });
        console.log("error:", error);
      }
    },

    /**
     * 删除月度值班信息
     */
    *deleteMsByMonth({ payload }, { put, call, select }) {
      yield put({
        type: "save",
        payload: { workingScheduleListLoading: true },
      });
      try {
        let result = yield call(service.deleteMsByMonth, payload);
        yield put({
          type: "save",
          payload: { workingScheduleListLoading: false },
        });
        const isSuccess = resultFeedback(result, "删除运维排班");
        if (isSuccess) {
          yield put({ type: "getAllMonth" });
          const month = yield select((state) => {
            const {
              DutyAdmin: { currentDutyMonth },
            } = state;
            return currentDutyMonth;
          });
          yield put({ type: "save", payload: { currentDutyMonth: month } });
          yield put({ type: "getWorkingScheduleList", payload: { month } });
        }
        // return success;
      } catch (error) {
        resultFeedback({ success: false }, "删除运维排班");
        yield put({
          type: "save",
          payload: { workingScheduleListLoading: false },
        });
        console.log("error:", error);
      }
    },
    /**
     * 上传数据中心排班信息
     */
    *uploadDataCenterData({ payload }, { put, call, select }) {
      yield put({ type: "save", payload: { uploadDataCenterLoading: true } });
      try {
        let result = yield call(service.uploadDataCenterData, payload);
        yield put({
          type: "save",
          payload: { uploadDataCenterLoading: false },
        });
        const isSuccess = resultFeedback(result, "上传数据中心排班");
        if (isSuccess) {
          const successDate = _.get(result, "data", "");
          if (isSuccess) {
            yield put({
              type: "getWorkingScheduleList",
              payload: { month: successDate },
            });
            let monthResult = yield call(service.getAllMonth);
            const dutyMonthList = _.get(monthResult, "data", []);
            yield put({
              type: "save",
              payload: {
                dutyMonthList,
                currentDutyMonth: successDate,
              },
            });
          }
        }
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
    /**
     * 上传值班经理信息
     */
    *uploadCmData({ payload }, { put, call, select }) {
      yield put({ type: "save", payload: { uploadCmLoading: true } });
      try {
        let result = yield call(service.uploadCmData, payload);
        yield put({
          type: "save",
          payload: { uploadCmLoading: false },
        });
        const isSuccess = resultFeedback(result, "上传通讯值班排班");
        if (isSuccess) {
          const successDate = _.get(result, "data", "");
          if (isSuccess) {
            yield put({
              type: "getWorkingScheduleList",
              payload: { month: successDate },
            });

            let monthResult = yield call(service.getAllMonth);
            const dutyMonthList = _.get(monthResult, "data", []);
            yield put({
              type: "save",
              payload: {
                dutyMonthList,
                currentDutyMonth: successDate,
              },
            });
          }
        }
        // return success;
      } catch (error) {
        resultFeedback({ success: false }, "上传通讯值班排班");
        yield put({
          type: "save",
          payload: { uploadCmLoading: false },
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
