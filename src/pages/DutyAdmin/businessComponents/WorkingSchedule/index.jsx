import React, { useEffect, useState } from "react";
import _ from "lodash";
import { connect } from "dva";
import { Select, Button, Space, Modal } from "antd";
import HTable from "../../components/Table";

import styles from "./index.module.less";


let selectedUpdateId = "";
let staffMobile = "";
let staffName = "";
const setSelectLabel = (staff) => `(${staff.staffGroup})${staff.staffName}`;
const WorkingSchedule = ({
  dispatch,
  staffList,
  currentDutyMonth,
  workingScheduleList,
  workingScheduleListLoading,
  updateWorkingScheduleListLoading,
}) => {
  const [visible, setVisible] = useState(false);
  const [selectValue, setSelectValue] = useState("");
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
  const hideModal = () => {
    setVisible(false);
    setSelectValue("");
    selectedUpdateId = "";
    staffMobile = "";
    staffName = "";
  };
  const handleUpdateMs = async (value, options) => {
    setSelectValue(value);
    const { key } = options;
    const [mobilePhone, name] = key.split("_");
    staffMobile = mobilePhone;
    staffName = name;
  };
  const updateConfirm = async () => {
    const result = await dispatch({
      type: "DutyAdmin/updateWorkingScheduleList",
      payload: { id: selectedUpdateId, staffMobile, staffName },
    });
    if (result) {
      hideModal();
    }
  };
  const setTableName = (record, groupName, staffName = null) => {
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
        {staffName || _.get(target[0], "staffName", "-")}
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
        setTableName(record, null, _.get(record, "leader[0].staffName")),
    },
    {
      title: "机位/IOC",
      dataIndex: "ioc",
      key: "ioc",
      render: (value, record) => setTableName(record, "机位/IOC"),
    },
    {
      title: "ROMA",
      dataIndex: "roma",
      key: "roma",
      render: (value, record) => setTableName(record, "ROMA"),
    },
    {
      title: "大数据",
      dataIndex: "bData",
      key: "bData",
      render: (value, record) => setTableName(record, "大数据"),
    },
    {
      title: "云计算",
      dataIndex: "cloud",
      key: "cloud",
      render: (value, record) => setTableName(record, "云计算"),
    },
    {
      title: "视频安防",
      dataIndex: "video",
      key: "video",
      render: (value, record) => setTableName(record, "视频安防"),
    },
    {
      title: "UCC",
      dataIndex: "ucc",
      key: "ucc",
      render: (value, record) => setTableName(record, "UCC"),
    },
    {
      title: "数通网络",
      dataIndex: "network",
      key: "network",
      render: (value, record) => setTableName(record, "数通网络"),
    },
    {
      title: "LTE",
      dataIndex: "lte",
      key: "lte",
      render: (value, record) => setTableName(record, "LTE"),
    },
  ];
  useEffect(() => {
    dispatch({
      type: "DutyAdmin/getWorkingScheduleList",
      payload: { month: currentDutyMonth },
    });
    dispatch({
      type: "DutyAdmin/getStaffInfoByCondition",
    });
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
      <Modal footer={null} visible={visible} onCancel={hideModal}>
        <span className={styles.title}>修改排班信息</span>
        <div className={styles.extraInfo}>{selectedUpdateInfo}</div>
        <div className={styles.content}>
          <span>选择值班人员</span>
          <Select
            value={selectValue}
            onChange={handleUpdateMs}
            showSearch
            className={styles.select}
            filterOption={(input, option) =>
              option.props.children
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            }
          >
            {staffList.map((staff) => (
              <Select.Option
                key={`${staff.staffMobile}_${staff.staffName}`}
                value={setSelectLabel(staff)}
              >
                {setSelectLabel(staff)}
              </Select.Option>
            ))}
          </Select>
        </div>

        <div className={styles.buttonArea}>
          <Space size={10}>
            <Button onClick={hideModal}>取消</Button>
            <Button
              type="primary"
              loading={updateWorkingScheduleListLoading}
              onClick={updateConfirm}
            >
              确定
            </Button>
          </Space>
        </div>
      </Modal>
    </>
  );
};
export default connect(({ DutyAdmin }) => DutyAdmin)(WorkingSchedule);
