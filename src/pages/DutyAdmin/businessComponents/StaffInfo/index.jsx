import React, { useEffect, useState, useRef } from "react";
import { connect } from "dva";
import { Checkbox, Input, message, Button } from "antd";
import HTable from "../../components/Table";
import HModal from "../../components/Modal";
// import styles from "./index.module.less";
let staffId = "";
const StaffInfo = ({
  dispatch,
  staffList,
  leaderList,
  staffListLoading,
  updateStaffLoading,
  currentDutyMonth,
}) => {
  const modalRef = useRef();
  // const [formInitialValues, setFormInitialValues] = useState({});
  const [onlyLeader, setLeaderList] = useState(false);
  const onChange = (e) => {
    setLeaderList(e.target.checked);
  };
  const handleAction = (record) => {
    staffId = record.id;
    const newRecord = Object.assign({}, record, {
      leader: record.leader ? "是" : "否",
    });
    // setFormInitialValues(
    //   Object.assign({}, record, { leader: record.leader ? "是" : "否" })
    // );
    modalRef.current.form.setFieldsValue(newRecord);
    modalRef.current.showModal();
  };
  const getValues = async (values) => {
    const params = {
      id: staffId,
      staffMobile: values.staffMobile,
    };
    const result = await dispatch({
      type: "DutyAdmin/updateStaffInfo",
      payload: params,
    });
    if (result) {
      message.success("修改成功");
      modalRef.current.hideModal();
    } else {
      message.success("修改失败");
    }
  };
  const hideModalCallback = () => {
    staffId = "";
  };
  const formItem = [
    { label: "专业", name: "staffGroup", component: <Input disabled /> },
    { label: "姓名", name: "staffName", component: <Input disabled /> },
    { label: "联系电话", name: "staffMobile", component: <Input /> },
    { label: "是否组长", name: "leader", component: <Input disabled /> },
  ];
  const columns = [
    {
      title: "专业",
      dataIndex: "staffGroup",
      key: "staffGroup",
      render: (value) => (value === "manager" ? "通讯" : value),
    },
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
        <Button type="link" onClick={() => handleAction(record)}>
          修改
        </Button>
      ),
    },
  ];

  useEffect(() => {
    if (currentDutyMonth !== "" && currentDutyMonth !== undefined)  {
      dispatch({
        type: "DutyAdmin/getStaffInfoByCondition",
        payload: { month: currentDutyMonth },
      });
    }
  }, [dispatch, currentDutyMonth]);
  return (
    <>
      <Checkbox onChange={onChange}>只查看组长</Checkbox>
      <HTable
        pagination={{
          hideOnSinglePage: true,
        }}
        dataSource={onlyLeader ? leaderList : staffList}
        columns={columns}
        loading={staffListLoading}
      />
      <HModal
        title="修改运维人员信息"
        hideDefaultButton
        loading={updateStaffLoading}
        width={600}
        formLabelWidth={70}
        formItem={formItem}
        // formInitialValues={formInitialValues}
        getValues={getValues}
        mRef={modalRef}
        hideModalCallback={hideModalCallback}
      />
    </>
  );
};

export default connect(({ DutyAdmin }) => DutyAdmin)(StaffInfo);
