import React from "react";
import { Checkbox, Input } from "antd";
import HTable from "../../components/Table";
import HModal from "../../components/Modal";
// import styles from "./index.module.less";

const dataSource = [
  {
    id: "1",
    position: "云计算",
    name: "兰正旺",
    phone: "13599998888",
    isLeader: true,
  },
  {
    id: "2",
    position: "机位/IOC",
    name: "罗智霖",
    phone: "13476565333",
    isLeader: false,
  },
];

const StaffInfo = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const formItem = [
    { label: "专业", name: "position", component: <Input /> },
    { label: "姓名", name: "name", component: <Input /> },
    { label: "联系电话", name: "phone", component: <Input /> },
    { label: "是否组长", name: "isLeader", component: <Input /> },
  ];
  const columns = [
    { title: "专业", dataIndex: "position", key: "position" },
    { title: "姓名", dataIndex: "name", key: "name" },
    { title: "联系电话", dataIndex: "phone", key: "phone" },
    {
      title: "是否组长",
      dataIndex: "isLeader",
      key: "isLeader",
      render: (value) => (value ? "是" : "否"),
    },
    {
      title: "操作",
      key: "action",
      render: (text, record) => (
        <HModal
          title="修改运维人员信息"
          buttonType="link"
          buttonText="修改"
          // buttonClassName={styles.add}
          width={800}
          formItem={formItem}
        />
      ),
    },
  ];

  return (
    <>
      <Checkbox onChange={onChange}>只查看组长</Checkbox>
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

export default StaffInfo;
