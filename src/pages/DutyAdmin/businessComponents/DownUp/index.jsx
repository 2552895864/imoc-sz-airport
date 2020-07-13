import React from "react";
import { Button, Space, Menu, Dropdown } from "antd";
import styles from "./index.module.less";

const DownUp = () => {
  return (
    <>
      <Space>
        <Button type="primary">上传统一运维排班</Button>
        <Button type="primary">上传数据中心排班</Button>
        <Button type="primary">上传通讯值班排班</Button>
      </Space>
      {/* <Button className={styles.down}>下载排班模板</Button> */}
      <Dropdown
        className={styles.down}
        overlay={
          <Menu>
            <Menu.Item>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.alipay.com/"
              >
                统一运维
              </a>
            </Menu.Item>
            <Menu.Item>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.taobao.com/"
              >
                数据中心
              </a>
            </Menu.Item>
            <Menu.Item>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.tmall.com/"
              >
                通讯值班
              </a>
            </Menu.Item>
          </Menu>
        }
        placement="bottomRight"
        arrow
      >
        <Button>下载排班模板</Button>
      </Dropdown>
    </>
  );
};

export default DownUp;
