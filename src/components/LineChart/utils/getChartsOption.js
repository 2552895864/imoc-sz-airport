const tooltipFormatter = (params) =>
  params.reduce((acc, item, index) => {
    switch (index) {
      case 0:
        return (
          acc + `${item.name}<br/>${item.seriesName}:    ${item.value} %<br/>`
        );
      default:
        return acc + `${item.seriesName}:    ${item.value} %<br/>`;
    }
  }, "");

export default (options, data = {}) => {
  const { time = [] } = data;
  return {
    ...options,
    tooltip: {
      ...options.tooltip,
      formatter: tooltipFormatter,
    },
    xAxis: [
      {
        ...options.xAxis[0],
        data: time,
      },
    ],
    series: options.series.map((item) => {
      const { name } = item;
      return {
        ...item,
        data: data[name],
      };
    }),
  };
};
