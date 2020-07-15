import echarts from "echarts";

const getGradientColor = (usage) => {
  if (+usage > 80) return "#c90050";
  if (+usage > 60) return "#ffa200";
  if (+usage > 20) return "#00dcff";
  return "#46d311";
};

export default (options, usage) => {
  return {
    ...options,
    series: [
      {
        ...options.series[0],
        data: [
          {
            ...options.series[0].data[0],
            value: usage,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                {
                  offset: 0,
                  color: getGradientColor(usage),
                },
                {
                  offset: 1,
                  color: "#0451a9",
                },
              ]),
            },
          },
          {
            ...options.series[0].data[1],
            value: 100 - usage,
          },
        ],
      },
    ],
  };
};
