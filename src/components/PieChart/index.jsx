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

const PieChart = ({
  width,
  height = 250,
  data = [],
  sumCount = 0,
  itemWidth = 120,
}) => {
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
      width={width ? width : undefined}
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
        offsetX={-20}
        visible={true}
        position="right"
        marker={{ symbol: "square", style: { r: 8 } }}
        itemWidth={itemWidth}
        itemHeight={35}
        itemName={{
          style: {
            fontFamily: "MicrosoftYaHei",
            fontSize: 16,
            fill: "#ffffff",
          },
        }}
        itemValue={{
          alignRight: true,
          style: {
            fontFamily: "MicrosoftYaHei",
            fontSize: 16,
            fill: "#ffffff",
          },
          formatter: (text, item, index) =>
            `${data.filter((item) => item.type === text)[0].value}`,
        }}
      />
      <Coordinate type="theta" innerRadius={0.75} />
      <Interval position="percent" adjust="stack" color="type" />
      <Annotation.Text
        position={["50%", "45%"]}
        content={sumCount + ""}
        style={{
          fontFamily: "ArialMT",
          fontSize: "32",
          fill: "#ffffff",
          textAlign: "center",
        }}
      />
      <Annotation.Text
        position={["50%", "65%"]}
        content="总数"
        style={{
          fontFamily: "MicrosoftYaHei",
          fontSize: "16",
          fill: "#ffffff",
          textAlign: "center",
        }}
      />
    </Chart>
  );
};

export default PieChart;
