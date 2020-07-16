import React from "react";
import { Chart, Line, Axis, Tooltip, Legend } from "bizcharts";

// 数据源
const data = [
  {
    date: "01/07",
    category: "CPU",
    usage: 0.4,
  },
  {
    date: "02/07",
    category: "CPU",
    usage: 0.5,
  },
  {
    date: "03/07",
    category: "CPU",
    usage: 0.35,
  },
  {
    date: "04/07",
    category: "CPU",
    usage: 0.45,
  },
  {
    date: "05/07",
    category: "CPU",
    usage: 0.38,
  },
  {
    date: "06/07",
    category: "CPU",
    usage: 0.5,
  },
  {
    date: "07/07",
    category: "CPU",
    usage: 0.35,
  },
  {
    date: "01/07",
    category: "内存",
    usage: 0.39,
  },
  {
    date: "02/07",
    category: "内存",
    usage: 0.3,
  },
  {
    date: "03/07",
    category: "内存",
    usage: 0.58,
  },
  {
    date: "04/07",
    category: "内存",
    usage: 0.5,
  },
  {
    date: "05/07",
    category: "内存",
    usage: 0.76,
  },
  {
    date: "06/07",
    category: "内存",
    usage: 0.55,
  },
  {
    date: "07/07",
    category: "内存",
    usage: 0.23,
  },
  {
    date: "01/07",
    category: "存储",
    usage: 0.3,
  },
  {
    date: "02/07",
    category: "存储",
    usage: 0.63,
  },
  {
    date: "03/07",
    category: "存储",
    usage: 0.19,
  },
  {
    date: "04/07",
    category: "存储",
    usage: 0.4,
  },
  {
    date: "05/07",
    category: "存储",
    usage: 0.2,
  },
  {
    date: "06/07",
    category: "存储",
    usage: 0.35,
  },
  {
    date: "07/07",
    category: "存储",
    usage: 0.15,
  },
];

export default class Demo extends React.Component {
  render() {
    return (
      <Chart
        scale={{ usage: { min: 0, alias: "使用率" }, date: { alias: "日期" } }}
        padding={[10, 20, 50, 40]}
        autoFit
        height={500}
        data={data}
      >
        <Axis name="date" title />
        <Axis name="usage" title />
        <Line
          shape="smooth"
          position="date*usage"
          color={[
            "category",
            (category) => {
              switch (category) {
                case "CPU":
                  return "#7682F0";
                case "内存":
                  return "#DB9C51";
                case "存储":
                  return "#AFD860";
                default:
                  return "";
              }
            },
          ]}
        />
        <Tooltip visible={false}></Tooltip>
        <Legend position="right-top" layout="horizontal" />
      </Chart>
    );
  }
}
