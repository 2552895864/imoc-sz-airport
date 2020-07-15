import React, { useState } from "react";
import { Space, Input } from "antd";
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

const NamePhoneInput = ({ value = {}, onChange }) => {
  const [phone, setPhone] = useState(null);
  const [name, setName] = useState("");
  const triggerChange = (changedValue) => {
    if (onChange) {
      onChange({
        phone,
        name,
        ...value,
        ...changedValue,
      });
    }
  };
  const onPhoneChange = (e) => {
    const newPhone = parseInt(e.target.value || 0);

    if (Number.isNaN(newPhone)) {
      return;
    }

    if (!("phone" in value)) {
      setPhone(newPhone);
    }

    triggerChange({
      phone: newPhone,
    });
  };
  const onNameChange = (newCurrency) => {
    if (!("name" in value)) {
      setName(newCurrency);
    }

    triggerChange({
      currency: newCurrency,
    });
  };
  return (
    <Space size={20}>
      <Input
        placeholder="姓名"
        type="text"
        value={value.name || name}
        onChange={onNameChange}
        style={{
          width: 300,
        }}
      />
      <Input
        placeholder="电话"
        type="text"
        value={value.phone || phone}
        onChange={onPhoneChange}
        style={{
          width: 300,
        }}
        // max={11}
      />
    </Space>
  );
};

const AirDuty = () => {
  const formItem = [
    { label: "值班01", name: "duty01", component: <NamePhoneInput /> },
    { label: "值班经理", name: "dutyManager", component: <NamePhoneInput /> },
    { label: "数据中心", name: "dataCenter", component: <NamePhoneInput /> },
    { label: "通信运维", name: "comOperation", component: <NamePhoneInput /> },
    { label: "系统值班", name: "sys", component: <NamePhoneInput /> },
    {
      label: "系统二班",
      name: "sys.2",
      component: <NamePhoneInput />,
      hidden: true,
    },
    { label: "安防值班", name: "security", component: <NamePhoneInput /> },
    { label: "网络值班", name: "network", component: <NamePhoneInput /> },
    { label: "通讯值班", name: "com", component: <NamePhoneInput /> },
    {
      label: "通讯二班",
      name: "com.2",
      component: <NamePhoneInput />,
      hidden: true,
    },
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
          formLabelWidth={70}
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
