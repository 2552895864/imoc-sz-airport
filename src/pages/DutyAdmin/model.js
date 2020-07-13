import * as service from "./service";
export default {
  namespace: "DutyAdmin",
  state: {
    staffList: [],
  },
  effects: {
    *getStaffInfoByCondition({ payload }, { put, call }) {
      let { data } = yield call(service.getStaffInfoByCondition);
      yield put({ type: "save", payload: { staffList: data } });
      return data;
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
