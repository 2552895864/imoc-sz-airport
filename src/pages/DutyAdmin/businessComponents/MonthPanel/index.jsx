import React, { useEffect } from "react";
import { connect } from "dva";
import { Select, Button } from "antd";

const { Option } = Select;

const MonthPanel = ({ dispatch, dutyMonthList, currentDutyMonth }) => {
  const handleChange = () => {};

  useEffect(() => {
    dispatch({
      type: "DutyAdmin/getAllMonth",
    });
  }, [dispatch]);
  return (
    <div>
      <Select
        defaultValue={currentDutyMonth}
        style={{ width: 120, marginRight: "10px" }}
        onChange={handleChange}
      >
        {dutyMonthList.map((item) => (
          <Option value={item} key={item}>
            {item}
          </Option>
        ))}
      </Select>
      <Button>删除排班信息</Button>
    </div>
  );
};

export default connect(({ DutyAdmin }) => DutyAdmin)(MonthPanel);
