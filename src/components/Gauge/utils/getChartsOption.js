import echarts from "echarts";
const pointerClolr = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
  {
    offset: 0,
    color: "#22eeff",
  },
  {
    offset: 0.57,
    color: "#0077ff",
  },
  {
    offset: 1,
    color: "#0050be",
  },
]);
const colorMap = {
  low: "#99CC00",
  normal: "#0099FF",
  high: "#FFCC00",
  alarm: "#E34548",
};

export default (options, percent) => {
  return {
    ...options,
    series: options.series.map((item) => {
      return {
        ...item,
        itemStyle: {
          ...item.itemStyle,
          color: pointerClolr,
        },
        data: [
          {
            value: percent,
          },
        ],
      };
    }),
  };
};
