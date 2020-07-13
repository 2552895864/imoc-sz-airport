import React from "react";
import OverviewFloatItem from "./components/OverviewFloatItem";
import styles from "./index.module.less";

const BackGround = () => (
  <>
    <div className={styles.opacitybg}></div>
    <div className={styles.netbg}></div>
    <div className={styles.overview}></div>
    <div className={styles.cloudbg}></div>
  </>
);

const LineData = () => (
  <>
    <div>
      <div className={styles.workline}></div>
    </div>
    <div>
      <div className={styles.appline}></div>
      <OverviewFloatItem
        label="应用数"
        value={14}
        className={styles.applinecontent}
      ></OverviewFloatItem>
    </div>
    <div>
      <div className={styles.vmline}></div>
      <OverviewFloatItem
        label="虚拟机数"
        value={154}
        className={styles.vmlinecontent}
      ></OverviewFloatItem>
    </div>
    <div>
      <div className={styles.bzline}></div>
      <OverviewFloatItem
        label="业务区域数"
        value={3}
        className={styles.bzlinecontent}
      ></OverviewFloatItem>
    </div>
    <div>
      <div className={styles.pmline}></div>
      <OverviewFloatItem
        label="宿主机数"
        value={30}
        className={styles.pmlinecontent}
      ></OverviewFloatItem>
    </div>
    <div>
      <div className={styles.bmline}></div>
      <OverviewFloatItem
        label="裸金属数"
        value={3}
        className={styles.bmlinecontent}
      ></OverviewFloatItem>
    </div>
    <div>
      <div className={styles.bdsline}></div>
    </div>
  </>
);

const SumData = () => (
  <div className={styles.sumdata}>
    <div className={styles.cpuvalue}>
      <div className={styles.cpulabel}>CPU总量</div>
      123,234核
    </div>
    <div className={styles.memvalue}>
      123,234G
      <div className={styles.memlabel}>内存总量</div>
    </div>
    <div className={styles.storevalue}>
      <div className={styles.storelabel}>存储总量</div>
      123,234T
    </div>
    <div className={styles.devicevalue}>
      1239台
      <div className={styles.devicelabel}>设备总量</div>
    </div>
  </div>
);

const CircleAnimation = () => (
  <>
    <div className={styles.circlelevel1}></div>
    <div className={styles.circlelevel2}></div>
    <div className={styles.circlelevel3}></div>
    <div className={styles.circlelevel4}></div>
    <div className={styles.circlelevel5}></div>
  </>
);

const OverView = () => {
  return (
    <>
      <BackGround />
      <LineData />
      <SumData />
      <CircleAnimation />
    </>
  );
};

export default OverView;
