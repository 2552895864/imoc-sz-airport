import React, { useState, useEffect } from "react";
import { Button, Divider } from "antd";
import { connect } from "dva";
import _ from "lodash";
import HTable from "../../components/Table";
import StaffSelectModal from "../StaffSelectModal";

import styles from "./index.module.less";

let selectedUpdateId = "";
const AirDuty = ({
  dispatch,
  workingScheduleListForManager,
  workingScheduleListLoading,
  updateWorkingScheduleListLoading,
  currentDutyMonth,
}) => {
  const [visible, setVisible] = useState(false);
  const [selectedUpdateInfo, setSelectedUpdateInfo] = useState("");
  const [initialValue, setInitialValue] = useState({});

  const handleOpenUpdateModal = (staff, record, groupName) => {
    const { date } = record;
    const { id, staffName, staffMobile } = staff;
    const finalGroupName = groupName === "manager" ? "通讯" : groupName;
    const groupLabel = finalGroupName ? `${finalGroupName}值班人员` : "";
    selectedUpdateId = id;
    setVisible(true);
    setInitialValue({ staffName, staffMobile });
    setSelectedUpdateInfo(`更新 ${date} ${groupLabel}`);
  };
  const handleHideUpdateModal = () => {
    setVisible(false);
    selectedUpdateId = "";
  };
  const confirmUpdateAction = async ({ staffMobile, staffName }) => {
    const result = await dispatch({
      type: "DutyAdmin/updateWorkingScheduleList",
      payload: { id: selectedUpdateId, staffMobile, staffName },
    });
    if (result) {
      handleHideUpdateModal();
    }
  };
  const setCellButton = (record, groupName) => {
    const member = _.get(record, "dailyManagerList", []);
    const target = member.filter((item) => item.staffGroup === groupName);

    return (
      <span>
        {target.map((staff, index) => (
          <span key={staff.id}>
            <Button
              type="link"
              className={styles.staffName}
              onClick={() => {
                handleOpenUpdateModal(staff, record, groupName);
              }}
            >
              {_.get(staff, "staffName", "-")}
            </Button>
            {index !== target.length - 1 ? <Divider type="vertical" /> : null}
          </span>
        ))}
      </span>
    );
  };

  const columns = [
    { title: "日期", dataIndex: "date", key: "date" },
    {
      title: "值班01",
      dataIndex: "duty01",
      key: "duty01",
      render: (value, record) => setCellButton(record, "值班01"),
    },
    {
      title: "值班经理",
      dataIndex: "dutyManager",
      key: "dutyManager",
      render: (value, record) => setCellButton(record, "值班经理"),
    },
    {
      title: "数据中心",
      dataIndex: "dataCenter",
      key: "dataCenter",
      render: (value, record) => setCellButton(record, "数据中心"),
    },
    {
      title: "通信运维",
      dataIndex: "comOperation",
      key: "comOperation",
      render: (value, record) => setCellButton(record, "通信运维"),
    },
    {
      title: "系统值班",
      dataIndex: "sys",
      key: "sys",
      render: (value, record) => setCellButton(record, "系统"),
    },
    {
      title: "安防值班",
      dataIndex: "security",
      key: "security",
      render: (value, record) => setCellButton(record, "安防"),
    },
    {
      title: "网络值班",
      dataIndex: "network",
      key: "network",
      render: (value, record) => setCellButton(record, "网络"),
    },
    {
      title: "通讯值班",
      dataIndex: "com",
      key: "com",
      render: (value, record) => setCellButton(record, "manager"),
    },
  ];

  useEffect(() => {
    if (currentDutyMonth) {
      dispatch({
        type: "DutyAdmin/getWorkingScheduleList",
        payload: { month: currentDutyMonth },
      });
    }
  }, [currentDutyMonth, dispatch, workingScheduleListForManager.length]);

  return (
    <>
      <div className={styles.extraInfo} style={{ marginBottom: "15px" }}>
        点击人员名称进行更改
      </div>
      <HTable
        // pagination={{
        //   hideOnSinglePage: true,
        // }}
        dataSource={workingScheduleListForManager}
        columns={columns}
        tableLayout="auto"
        loading={workingScheduleListLoading}
      />
      <StaffSelectModal
        mode="input"
        visible={visible}
        initialValue={initialValue}
        onCancel={handleHideUpdateModal}
        title="修改机场值班信息"
        updateInfo={selectedUpdateInfo}
        confirmLoading={updateWorkingScheduleListLoading}
        confirmAction={confirmUpdateAction}
      />
    </>
  );
};

export default connect(({ DutyAdmin }) => DutyAdmin)(AirDuty);
