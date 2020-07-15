import React from "react";
import PageContainer from "./components/PageContainer";
import OverView from "./components/OverView";
import DeviceInfo from "./components/DeviceInfo";
import AnimationLines from "./components/AnimationLines";
import ShineNoteBoxWrapper from "./components/ShineNoteBoxWrapper";
import BoxInnerLine from "./components/BoxInnerLine";
import BoxItemOfPie from "./components/BoxItemOfPie";
import SwitchableLineChart from "./components/SwitchableLineChart";

import resourceDevices from "@/data/resourceDevices";
import resourceLineChart from "@/data/resourceLineChart";
import resourcePieChart from "@/data/resourcePieChart";
import resourceLineData from "@/data/resourceLineData";
import resourceSumData from "@/data/resourceSumData";
import styles from "./index.module.less";

export default class ResourceState extends React.Component {
  render() {
    return (
      <PageContainer title="资源态势">
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.lefttop}>
              <ShineNoteBoxWrapper title="虚拟资源概览">
                {resourcePieChart.data.map(
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
                      {index === resourcePieChart.data.length - 1 ? null : (
                        <BoxInnerLine />
                      )}
                    </>
                  )
                )}
              </ShineNoteBoxWrapper>
            </div>
            <div className={styles.leftbottom}>
              <ShineNoteBoxWrapper title="虚拟资源使用趋势">
                <SwitchableLineChart data={resourceLineChart} />
              </ShineNoteBoxWrapper>
            </div>
          </div>
          <div className={styles.center}>
            <div className={styles.centertop}>
              <OverView
                lineData={resourceLineData}
                sumData={resourceSumData}
              ></OverView>
            </div>
            <div className={styles.centerbottom}>
              <DeviceInfo data={resourceDevices.data}></DeviceInfo>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.righttop}>
              <ShineNoteBoxWrapper title="物理资源概览">
                {resourcePieChart.data.map(
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
                      {index === resourcePieChart.data.length - 1 ? null : (
                        <BoxInnerLine />
                      )}
                    </>
                  )
                )}
              </ShineNoteBoxWrapper>
            </div>
            <div className={styles.rightbottom}>
              <ShineNoteBoxWrapper title="物理资源使用趋势">
                <SwitchableLineChart data={resourceLineChart} />
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
