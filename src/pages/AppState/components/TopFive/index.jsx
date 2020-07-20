import React from "react";
import Radio from "@/components/Radio";
import styles from "./index.module.less";

const moduleEnum = {
  timeout: "timeout",
  cpu: "cpu",
  ram: "ram",
  rom: "rom",
};

const Process = ({ dataSource }) => {
  return (
    <div className={styles.processContainer}>
      <div className={styles.processLabel}>机位智能分配</div>
      <div className={styles.processBox}></div>
      <div className={styles.processInner}></div>
      <div className={styles.processValue}>1000</div>
    </div>
  );
};

const TopFive = ({ dataSource }) => {
  const getSelectedItemValue = (value) => {
    console.log("value:", value);
  };
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <span className={styles.line}></span>
        <Radio
          config={[
            { value: moduleEnum.timeout, label: "时延" },
            { value: moduleEnum.cpu, label: "CPU" },
            { value: moduleEnum.ram, label: "内存" },
            { value: moduleEnum.rom, label: "存储" },
          ]}
          onChange={getSelectedItemValue}
          className={styles.radio}
          itemClassName={styles.itemClassName}
          itemSelectClassName={styles.itemSelectClassName}
          // spaceSize={2}
        />
        <span className={styles.line} style={{ marginLeft: "-2px" }}></span>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomTitle}>
          <span className={styles.bottomTitleNameLabel}>应用名称</span>
          <span className={styles.bottomTitleValueLabel}>平均</span>
        </div>
        <Process />
      </div>
    </div>
  );
};

export default TopFive;
