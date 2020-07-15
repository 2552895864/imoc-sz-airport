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

const LineData = ({ data: { app, vm, bz, pm, bm } }) => (
  <>
    <div>
      <div className={styles.workline}></div>
    </div>
    <div>
      <div className={styles.appline}></div>
      <OverviewFloatItem
        label="应用数"
        value={app}
        className={styles.applinecontent}
      ></OverviewFloatItem>
    </div>
    <div>
      <div className={styles.vmline}></div>
      <OverviewFloatItem
        label="虚拟机数"
        value={vm}
        className={styles.vmlinecontent}
      ></OverviewFloatItem>
    </div>
    <div>
      <div className={styles.bzline}></div>
      <OverviewFloatItem
        label="业务区域数"
        value={bz}
        className={styles.bzlinecontent}
      ></OverviewFloatItem>
    </div>
    <div>
      <div className={styles.pmline}></div>
      <OverviewFloatItem
        label="宿主机数"
        value={pm}
        className={styles.pmlinecontent}
      ></OverviewFloatItem>
    </div>
    <div>
      <div className={styles.bmline}></div>
      <OverviewFloatItem
        label="裸金属数"
        value={bm}
        className={styles.bmlinecontent}
      ></OverviewFloatItem>
    </div>
    <div>
      <div className={styles.bdsline}></div>
    </div>
  </>
);

const SumData = ({ data: { cpu, mem, storage, device } }) => (
  <div className={styles.sumdata}>
    <div className={styles.cpuvalue}>
      <div className={styles.cpulabel}>CPU总量</div>
      {cpu.toLocaleString()}核
    </div>
    <div className={styles.memvalue}>
      {mem.toLocaleString()}G<div className={styles.memlabel}>内存总量</div>
    </div>
    <div className={styles.storevalue}>
      <div className={styles.storelabel}>存储总量</div>
      {storage.toLocaleString()}T
    </div>
    <div className={styles.devicevalue}>
      {device.toLocaleString()}台
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

const OverView = ({ lineData, sumData }) => {
  return (
    <>
      <BackGround />
      <LineData data={lineData} />
      <SumData data={sumData} />
      <CircleAnimation />
    </>
  );
};

export default OverView;
