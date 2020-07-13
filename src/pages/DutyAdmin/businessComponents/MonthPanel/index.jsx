import React from "react";
import { Select, Button } from "antd";

const { Option } = Select;

const MonthPanel = () => {
  const handleChange = () => {};
  return (
    <div>
      <Select
        defaultValue="202006"
        style={{ width: 120, marginRight: "10px" }}
        onChange={handleChange}
      >
        <Option value="202006">2020年6月</Option>
        <Option value="202007">2020年7月</Option>
      </Select>
      <Button>删除排班信息</Button>
    </div>
  );
};

export default MonthPanel;
