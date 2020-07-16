import React from "react";
import LineChart from "@/components/LineChart";
import options from "./config/options.json";

const Chart = ({ className, data, mode }) => {
  return (
    <LineChart
      className={className}
      data={data[mode]}
      label={mode === "week" ? "日期" : mode === "hour" ? "小时" : ""}
      options={options}
    ></LineChart>
  );
};

export default Chart;
