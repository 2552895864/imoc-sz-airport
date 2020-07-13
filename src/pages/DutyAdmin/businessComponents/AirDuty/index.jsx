import React from "react";
import { Button, Input } from "antd";
import HTable from "../../components/Table";
import HModal from "../../components/Modal";

// import styles from "./index.module.less";

const dataSource = [
  {
    id: "1",
    date: "2020/7/1",
    duty01: "白班",
    dutyManager: "兰正旺",
    dataCenter: "伍柏荣",
    comOperation: "伍柏荣",
    sys: "伍柏荣",
    security: "伍柏荣",
    network: "伍柏荣",
    com: "伍柏荣",
  },
  {
    id: "2",
    date: "2020/7/1",
    duty01: "晚班",
    dutyManager: "兰正旺",
    dataCenter: "伍柏荣",
    comOperation: "伍柏荣",
    sys: "伍柏荣",
    security: "伍柏荣",
    network: "伍柏荣",
    com: "伍柏荣",
  },
];

const AirDuty = () => {
  const formItem = [
    { label: "日期日期", name: "date", component: <Input /> },
    { label: "值班值班", name: "duty01", component: <Input /> },
    { label: "值班经理", name: "dutyManager", component: <Input /> },
    { label: "数据中心", name: "dataCenter", component: <Input /> },
    { label: "通信运维", name: "comOperation", component: <Input /> },
    { label: "系统值班", name: "sys", component: <Input /> },
    { label: "安防值班", name: "security", component: <Input /> },
    { label: "网络值班", name: "network", component: <Input /> },
    { label: "通讯值班", name: "com", component: <Input /> },
  ];
  const columns = [
    { title: "日期", dataIndex: "date", key: "date" },
    { title: "值班01", dataIndex: "duty01", key: "duty01" },
    { title: "值班经理", dataIndex: "dutyManager", key: "dutyManager" },
    { title: "数据中心", dataIndex: "dataCenter", key: "dataCenter" },
    { title: "通信运维", dataIndex: "comOperation", key: "comOperation" },
    { title: "系统值班", dataIndex: "sys", key: "sys" },
    { title: "安防值班", dataIndex: "security", key: "security" },
    { title: "网络值班", dataIndex: "network", key: "network" },
    { title: "通讯值班", dataIndex: "com", key: "com" },
    {
      title: "操作",
      key: "action",
      render: (text, record) => (
        <HModal
          title="修改机场值班信息"
          buttonType="link"
          buttonText="修改"
          // needGrid
          // buttonClassName={styles.add}
          width={800}
          formItem={formItem}
        />
      ),
    },
  ];

  return (
    <>
      <HTable
        pagination={{
          hideOnSinglePage: true,
        }}
        dataSource={dataSource}
        columns={columns}
      />
    </>
  );
};

export default AirDuty;
