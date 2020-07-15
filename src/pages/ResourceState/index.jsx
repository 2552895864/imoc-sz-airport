import React from "react";
import PageContainer from "./components/PageContainer";
import OverView from "./components/OverView";
import DeviceInfo from "./components/DeviceInfo";
import AnimationLines from "./components/AnimationLines";
import ShineNoteBoxWrapper from "./components/ShineNoteBoxWrapper";
import BoxInnerLine from "./components/BoxInnerLine";
import BoxItemOfPie from "./components/BoxItemOfPie";
import SwitchableLineChart from "./components/SwitchableLineChart";

import {
  queryLineData,
  querySumData,
  queryDeviceData,
  queryVMPieChartData,
  queryPMPieChartData,
  queryVMLineChartData,
  queryPMLineChartData,
} from "./services";
import {
  normalizeLineData,
  normalizeSumData,
  normalizeDeviceData,
  normalizePieChartData,
  normalizeLineChartData,
} from "./utils/normalize";
import resourceDevices from "@/data/resourceDevices";
import resourceLineChart from "@/data/resourceLineChart";
import resourcePieChart from "@/data/resourcePieChart";
import resourceLineData from "@/data/resourceLineData";
import resourceSumData from "@/data/resourceSumData";
import styles from "./index.module.less";

const DataFuncsMap = {
  resourceLineData: {
    query: queryLineData,
    normalize: normalizeLineData,
  },
  resourceSumData: {
    query: querySumData,
    normalize: normalizeSumData,
  },
  resourceDevices: {
    query: queryDeviceData,
    normalize: normalizeDeviceData,
  },
  resourceVMPieChart: {
    query: queryVMPieChartData,
    normalize: normalizePieChartData,
  },
  resourcePMPieChart: {
    query: queryPMPieChartData,
    normalize: normalizePieChartData,
  },
  resourceVMLineChart: {
    query: queryVMLineChartData,
    normalize: normalizeLineChartData,
  },
  resourcePMLineChart: {
    query: queryPMLineChartData,
    normalize: normalizeLineChartData,
  },
};

export default class ResourceState extends React.Component {
  state = {
    resourceLineData,
    resourceSumData,
    resourceDevices,
    resourceVMPieChart: resourcePieChart,
    resourcePMPieChart: resourcePieChart,
    resourceVMLineChart: resourceLineChart,
    resourcePMLineChart: resourceLineChart,
  };

  async componentDidMount() {
    /**
     * 对于已声明的state：
     *  1.获取对应数据
     *  2.使用对应方法对数据进行标准化
     *
     * 注：state名与各个函数的对应关系见DataFuncsMap
     */
    const results = await Promise.all(
      Object.keys(this.state).map(async (key) => {
        const apiData = await DataFuncsMap[key].query();
        const data = DataFuncsMap[key].normalize(apiData);
        return {
          [key]: data,
        };
      })
    );
    /**
     * results:[{resourceLineData:data1},{resourceSumData:data2}]
     */
    const datas = results.reduce((acc, val) => {
      return {
        ...acc,
        ...val,
      };
    }, {});
    this.setState(datas);
  }

  render() {
    return (
      <PageContainer title="资源态势">
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.lefttop}>
              <ShineNoteBoxWrapper title="虚拟资源概览">
                {this.state.resourceVMPieChart.map(
                  ({ label, usage, sumCount, unit, usedCount }, index) => (
                    <>
                      <BoxItemOfPie
                        label={label}
                        data={{
                          usage,
                          sumCount,
                          unit,
                          usedCount,
                        }}
                      ></BoxItemOfPie>
                      {index ===
                      this.state.resourceVMPieChart.length - 1 ? null : (
                        <BoxInnerLine />
                      )}
                    </>
                  )
                )}
              </ShineNoteBoxWrapper>
            </div>
            <div className={styles.leftbottom}>
              <ShineNoteBoxWrapper title="虚拟资源使用趋势">
                <SwitchableLineChart data={this.state.resourceVMLineChart} />
              </ShineNoteBoxWrapper>
            </div>
          </div>
          <div className={styles.center}>
            <div className={styles.centertop}>
              <OverView
                lineData={this.state.resourceLineData}
                sumData={this.state.resourceSumData}
              ></OverView>
            </div>
            <div className={styles.centerbottom}>
              <DeviceInfo data={this.state.resourceDevices}></DeviceInfo>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.righttop}>
              <ShineNoteBoxWrapper title="物理资源概览">
                {this.state.resourcePMPieChart.map(
                  ({ label, usage, sumCount, unit, usedCount }, index) => (
                    <>
                      <BoxItemOfPie
                        label={label}
                        data={{
                          usage,
                          sumCount,
                          unit,
                          usedCount,
                        }}
                      ></BoxItemOfPie>
                      {index ===
                      this.state.resourcePMPieChart.length - 1 ? null : (
                        <BoxInnerLine />
                      )}
                    </>
                  )
                )}
              </ShineNoteBoxWrapper>
            </div>
            <div className={styles.rightbottom}>
              <ShineNoteBoxWrapper title="物理资源使用趋势">
                <SwitchableLineChart data={this.state.resourcePMLineChart} />
              </ShineNoteBoxWrapper>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <AnimationLines />
        </div>
      </PageContainer>
    );
  }
}
