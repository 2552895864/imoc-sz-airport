import React from "react";
import { Input, Select } from "antd";
import HTable from "../../components/Table";
import HModal from "../../components/Modal";

// import styles from "./index.module.less";

const dataSource = [
  {
    id: "1",
    date: "2020/7/1",
    type: "白班",
    leader: "兰正旺",
    ioc: "伍柏荣",
    roma: "伍柏荣",
    bData: "伍柏荣",
    cloud: "伍柏荣",
    video: "伍柏荣",
    ucc: "伍柏荣",
    network: "伍柏荣",
    lte: "伍柏荣",
  },
  {
    id: "2",
    date: "2020/7/1",
    type: "晚班",
    leader: "兰正旺",
    ioc: "伍柏荣",
    roma: "伍柏荣",
    bData: "伍柏荣",
    cloud: "伍柏荣",
    video: "伍柏荣",
    ucc: "伍柏荣",
    network: "伍柏荣",
    lte: "伍柏荣",
  },
];
const staffDataSource = [
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
const StaffSelect = ({ dataSource, onChange }) => {
  const handleChange = (value) => {
    if (onChange) {
      onChange(value);
    }
  };
  return (
    <Select onChange={handleChange}>
      {dataSource.map((staff) => (
        <Select.Option key={staff.id} value={staff.id}>
          {`(${staff.position})${staff.name}`}
        </Select.Option>
      ))}
    </Select>
  );
};
const WorkingSchedule = () => {
  // const staffSelect = <StaffSelect dataSource={staffDataSource} />;
  const formItem = [
    {
      label: "日期",
      name: "date",
      span: 8,
      component: <Input disabled />,
    },
    {
      label: "排班类别",
      name: "type",
      span: 8,
      component: <Input disabled />,
    },
    {
      label: "值班组长",
      name: "leader",
      span: 8,
      component: <StaffSelect dataSource={staffDataSource} />,
    },
    {
      label: "机位/IOC",
      name: "ioc",
      span: 12,
      component: <StaffSelect dataSource={staffDataSource} />,
    },
    {
      label: "ROMA",
      name: "roma",
      span: 12,
      component: <StaffSelect dataSource={staffDataSource} />,
    },
    {
      label: "大数据",
      name: "bData",
      span: 12,
      component: <StaffSelect dataSource={staffDataSource} />,
    },
    {
      label: "云计算",
      name: "cloud",
      span: 12,
      component: <StaffSelect dataSource={staffDataSource} />,
    },
    {
      label: "视频安防",
      name: "video",
      span: 12,
      component: <StaffSelect dataSource={staffDataSource} />,
    },
    {
      label: "UCC",
      name: "ucc",
      span: 12,
      component: <StaffSelect dataSource={staffDataSource} />,
    },
    {
      label: "数通网络",
      name: "network",
      span: 12,
      component: <StaffSelect dataSource={staffDataSource} />,
    },
    {
      label: "LTE",
      name: "lte",
      span: 12,
      component: <StaffSelect dataSource={staffDataSource} />,
    },
  ];
  const columns = [
    { title: "日期", dataIndex: "date", key: "date" },
    { title: "排班类别", dataIndex: "type", key: "type" },
    { title: "值班组长", dataIndex: "leader", key: "leader" },
    { title: "机位/IOC", dataIndex: "ioc", key: "ioc" },
    { title: "ROMA", dataIndex: "roma", key: "roma" },
    { title: "大数据", dataIndex: "bData", key: "bData" },
    { title: "云计算", dataIndex: "cloud", key: "cloud" },
    { title: "视频安防", dataIndex: "video", key: "video" },
    { title: "UCC", dataIndex: "ucc", key: "ucc" },
    { title: "数通网络", dataIndex: "network", key: "network" },
    { title: "LTE", dataIndex: "lte", key: "lte" },
    {
      title: "操作",
      key: "action",
      render: (text, record) => (
        <HModal
          title="修改排班信息"
          buttonType="link"
          buttonText="修改"
          needGrid
          // buttonClassName={styles.add}
          width={1000}
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

export default WorkingSchedule;
