import React from "react";
import Echarts from "@/components/Echarts";
import classnames from "classnames";
import options from "./config/options.json";
import getChartsOption from "./utils/getChartsOption";

import styles from "./index.module.less";

const PieChart = ({ className, usage }) => {
  const chartStyle = classnames({
    [styles.chart]: true,
    [className]: className,
  });
  return (
    <Echarts
      className={chartStyle}
      chartOption={getChartsOption(options, usage)}
    ></Echarts>
  );
};

export default PieChart;
