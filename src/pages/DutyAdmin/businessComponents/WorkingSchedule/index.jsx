import React, { useEffect, useState } from "react";
import _ from "lodash";
import { connect } from "dva";
import { Button } from "antd";
import HTable from "../../components/Table";
import StaffSelectModal from "../StaffSelectModal";

import styles from "./index.module.less";

let selectedUpdateId = "";

const WorkingSchedule = ({
  dispatch,
  currentDutyMonth,
  workingScheduleList,
  workingScheduleListLoading,
  updateWorkingScheduleListLoading,
}) => {
  const [visible, setVisible] = useState(false);
  const [selectedUpdateInfo, setSelectedUpdateInfo] = useState("");

  const handleOpenUpdateModal = (record, groupName) => {
    setVisible(true);
    const { date, type } = record;
    const groupLabel = groupName ? `${groupName}组` : "";
    const levelLabel = `值班${groupName ? "人员" : "组长"}`;

    const selectedStaff = groupName
      ? _.get(record, "member", []).filter(
          (staff) => staff.staffGroup === groupName
        )[0]
      : _.get(record, "leader", [])[0];
    selectedUpdateId = _.get(selectedStaff, "id", "");
    setSelectedUpdateInfo(`更新 ${date} ${type} ${groupLabel} ${levelLabel}`);
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
  const setCellButton = (record, groupName, staffName = null) => {
    let member, target;
    if (!staffName) {
      member = _.get(record, "member", []);
      target = member.filter((item) => item.staffGroup === groupName);
    }

    return (
      <Button
        type="link"
        className={styles.staffName}
        onClick={() => {
          handleOpenUpdateModal(record, groupName);
        }}
      >
        {staffName || _.get(target[0], "staffName", "")}
      </Button>
    );
  };
  const columns = [
    { title: "日期", dataIndex: "date", key: "date" },
    { title: "排班类别", dataIndex: "type", key: "type" },
    {
      title: "值班组长",
      dataIndex: "groupLeader",
      key: "groupLeader",
      render: (value, record) =>
        setCellButton(record, null, _.get(record, "leader[0].staffName")),
    },
    {
      title: "机位/IOC",
      dataIndex: "ioc",
      key: "ioc",
      render: (value, record) => setCellButton(record, "机位/IOC"),
    },
    {
      title: "ROMA",
      dataIndex: "roma",
      key: "roma",
      render: (value, record) => setCellButton(record, "ROMA"),
    },
    {
      title: "大数据",
      dataIndex: "bData",
      key: "bData",
      render: (value, record) => setCellButton(record, "大数据"),
    },
    {
      title: "云计算",
      dataIndex: "cloud",
      key: "cloud",
      render: (value, record) => setCellButton(record, "云计算"),
    },
    {
      title: "视频安防",
      dataIndex: "video",
      key: "video",
      render: (value, record) => setCellButton(record, "视频安防"),
    },
    {
      title: "UCC",
      dataIndex: "ucc",
      key: "ucc",
      render: (value, record) => setCellButton(record, "UCC"),
    },
    {
      title: "数通网络",
      dataIndex: "network",
      key: "network",
      render: (value, record) => setCellButton(record, "数通网络"),
    },
    {
      title: "LTE",
      dataIndex: "lte",
      key: "lte",
      render: (value, record) => setCellButton(record, "LTE"),
    },
  ];
  useEffect(() => {
    if (currentDutyMonth !== "") {
      dispatch({
        type: "DutyAdmin/getWorkingScheduleList",
        payload: { month: currentDutyMonth },
      });
    }

    // dispatch({
    //   type: "DutyAdmin/getStaffInfoByCondition",
    // });
  }, [currentDutyMonth, dispatch]);
  return (
    <>
      <div className={styles.extraInfo} style={{ marginBottom: "15px" }}>
        点击人员名称进行更改
      </div>
      <HTable
        dataSource={workingScheduleList}
        columns={columns}
        loading={workingScheduleListLoading}
      />
      <StaffSelectModal
        visible={visible}
        onCancel={handleHideUpdateModal}
        title="修改排班信息"
        updateInfo={selectedUpdateInfo}
        confirmLoading={updateWorkingScheduleListLoading}
        confirmAction={confirmUpdateAction}
      />
    </>
  );
};
export default connect(({ DutyAdmin }) => DutyAdmin)(WorkingSchedule);