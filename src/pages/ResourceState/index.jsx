import React from "react";
import PageContainer from "./components/PageContainer";
import OverView from "./components/OverView";
import DeviceInfo from "./components/DeviceInfo";
import AnimationLines from "./components/AnimationLines";
import ShineNoteBoxWrapper from "./components/ShineNoteBoxWrapper";
import BoxInnerLine from "./components/BoxInnerLine";
import BoxItemOfPie from "./components/BoxItemOfPie";

import resourceDevices from "@/data/resourceDevices";
import styles from "./index.module.less";

export default class ResourceState extends React.Component {
  render() {
    return (
      <PageContainer title="资源态势">
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.lefttop}>
              <ShineNoteBoxWrapper>
                <BoxItemOfPie
                  label="CPU"
                  data={{
                    usage: 58.24,
                    sumCount: 24234,
                    unit: "核",
                    usedCount: 7000,
                  }}
                ></BoxItemOfPie>
                <BoxInnerLine />
                <BoxItemOfPie
                  label="内存"
                  data={{
                    usage: 88.24,
                    sumCount: 24234,
                    unit: "核",
                    usedCount: 7000,
                  }}
                ></BoxItemOfPie>
                <BoxInnerLine />
                <BoxItemOfPie
                  label="CPU"
                  data={{
                    usage: 58.24,
                    sumCount: 24234,
                    unit: "核",
                    usedCount: 7000,
                  }}
                ></BoxItemOfPie>
              </ShineNoteBoxWrapper>
            </div>
            <div className={styles.leftbottom}></div>
          </div>
          <div className={styles.center}>
            <div className={styles.centertop}>
              <OverView></OverView>
            </div>
            <div className={styles.centerbottom}>
              <DeviceInfo data={resourceDevices.data}></DeviceInfo>
            </div>
          </div>
          <div className={styles.right}></div>
        </div>
        <div className={styles.footer}>
          <AnimationLines />
        </div>
      </PageContainer>
    );
  }
}
