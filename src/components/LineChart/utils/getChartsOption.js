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

export default (options, { time, cpu, memory, disk }) => {
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
    series: [
      {
        ...options.series[0],
        data: cpu,
      },
      {
        ...options.series[1],
        data: memory,
      },
      {
        ...options.series[2],
        data: disk,
      },
    ],
  };
};
