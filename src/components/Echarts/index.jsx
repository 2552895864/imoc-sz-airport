import React from "react";
import ReactEcharts from "echarts-for-react";

const Echarts = ({ className, chartOption = {}, onChartReady = () => {} }) => {
  return (
    <ReactEcharts
      key={Math.random() + new Date().getTime()}
      option={chartOption}
      onChartReady={onChartReady}
      className={className}
    />
  );
};

export default Echarts;
