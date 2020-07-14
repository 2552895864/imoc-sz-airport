import React, { useEffect, useState } from "react";
import { connect } from "dva";
import { Checkbox, Input } from "antd";
import HTable from "../../components/Table";
import HModal from "../../components/Modal";
// import styles from "./index.module.less";

const StaffInfo = ({ dispatch, staffList, leaderList }) => {
  const [onlyLeader, setLeaderList] = useState(false);
  const onChange = (e) => {
    // console.log(`checked = ${e.target.checked}`);
    setLeaderList(e.target.checked);
  };
  const formItem = [
    { label: "专业", name: "staffGroup", component: <Input /> },
    { label: "姓名", name: "staffName", component: <Input /> },
    { label: "联系电话", name: "staffMobile", component: <Input /> },
    { label: "是否组长", name: "leader", component: <Input /> },
  ];
  const columns = [
    { title: "专业", dataIndex: "staffGroup", key: "staffGroup" },
    { title: "姓名", dataIndex: "staffName", key: "staffName" },
    { title: "联系电话", dataIndex: "staffMobile", key: "staffMobile" },
    {
      title: "是否组长",
      dataIndex: "leader",
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

  useEffect(() => {
    dispatch({
      type: "DutyAdmin/getStaffInfoByCondition",
    });
  }, [dispatch]);
  return (
    <>
      <Checkbox onChange={onChange}>只查看组长</Checkbox>
      <HTable
        pagination={{
          hideOnSinglePage: true,
        }}
        dataSource={onlyLeader ? leaderList : staffList}
        columns={columns}
      />
    </>
  );
};

export default connect(({ DutyAdmin }) => DutyAdmin)(StaffInfo);
