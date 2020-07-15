import _ from "lodash";
import * as service from "./service";
export default {
  namespace: "Duty",
  state: {
    briefList: [],
    briefLoading: false,
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
