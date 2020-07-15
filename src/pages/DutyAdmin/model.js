import * as service from "./service";
export default {
  namespace: "DutyAdmin",
  state: {
    staffList: [],
    leaderList: [],

    briefList: [],
    briefLoading: false,
  },
  effects: {
    *getStaffInfoByCondition({ payload }, { put, call }) {
      let { data } = yield call(service.getStaffInfoByCondition);
      yield put({
        type: "save",
        payload: {
          staffList: data,
          leaderList: data.filter((staff) => staff.leader),
        },
      });
      return data;
    },
    *getBrief({ payload }, { put, call }) {
      let { data } = yield call(service.getBrief);
      yield put({
        type: "save",
        payload: {
          briefList: data,
        },
      });
      return data;
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
