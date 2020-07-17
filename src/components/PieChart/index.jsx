import React from "react";
import {
  Chart,
  Interval,
  Coordinate,
  Legend,
  Annotation,
  Geom,
} from "bizcharts";
import DataSet from "@antv/data-set";

const userData = [
  { type: "睡眠", value: 70 },
  { type: "淡茶 & 烟斗 & 冥想", value: 10 },
  { type: "写作", value: 10 },
  { type: "教课", value: 40 },
  { type: "酒吧吃肉配白酒", value: 40 },
  { type: "散步", value: 10 },
  { type: "拜访马大大", value: 30 },
  { type: "阅读", value: 30 },
];

const PieChart = ({ height = 250, data = userData, sumCount = 0 }) => {
  const { DataView } = DataSet;

  const userDv = new DataView();
  userDv.source(data).transform({
    type: "percent",
    field: "value",
    dimension: "type",
    as: "percent",
  });

  return (
    <Chart
      placeholder={false}
      height={height}
      padding={50}
      autoFit
      data={userDv.rows}
      scale={{
        percent: {
          formatter: (val) => {
            return (val * 100).toFixed(2) + "%";
          },
        },
      }}
    >
      <Geom type="interval" position="percent" color="type"></Geom>
      <Legend
        visible={true}
        position="right"
        marker={{ symbol: "square" }}
        itemName={{
          style: {
            fill: "#ffffff",
          },
        }}
      />
      <Coordinate type="theta" innerRadius={0.75} />
      <Interval position="percent" adjust="stack" color="type" />
      <Annotation.Text
        position={["50%", "45%"]}
        content={sumCount + ""}
        style={{
          fontSize: "24",
          fill: "#ffffff",
          textAlign: "center",
        }}
      />
      <Annotation.Text
        position={["50%", "65%"]}
        content="总数"
        style={{
          fontSize: "12",
          fill: "#ffffff",
          textAlign: "center",
        }}
      />
    </Chart>
  );
};

export default PieChart;
