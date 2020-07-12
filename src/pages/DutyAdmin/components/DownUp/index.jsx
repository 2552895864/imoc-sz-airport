import React from "react";
import { Button } from "antd";
import styles from "./index.module.less";

const DownUp = () => {
  return (
    <>
      <Button className={styles.down}>下载排班模板</Button>
      <Button type="primary">上传排班信息</Button>
    </>
  );
};

export default DownUp;
