import React, { useEffect } from "react";
import { connect } from "dva";
import { Select, Button } from "antd";

const { Option } = Select;

const MonthPanel = ({
  dispatch,
  dutyMonthList,
  currentDutyMonth,
  workingScheduleListLoading,
}) => {
  const handleChange = (value) => {
    dispatch({
      type: "DutyAdmin/save",
      payload: { currentDutyMonth: value },
    });
  };
  const handleDelete = () => {
    dispatch({
      type: "DutyAdmin/deleteMsByMonth",
      payload: { month: currentDutyMonth },
    });
  };

  useEffect(() => {
    dispatch({
      type: "DutyAdmin/getAllMonth",
    });
  }, [dispatch]);
  return (
    <div>
      <Select
        value={currentDutyMonth}
        style={{ width: 120, marginRight: "10px" }}
        onChange={handleChange}
        disabled={workingScheduleListLoading}
      >
        {dutyMonthList.map((item) => (
          <Option value={item} key={item}>
            {item}
          </Option>
        ))}
      </Select>
      <Button onClick={handleDelete}>删除排班信息</Button>
    </div>
  );
};

export default connect(({ DutyAdmin }) => DutyAdmin)(MonthPanel);
