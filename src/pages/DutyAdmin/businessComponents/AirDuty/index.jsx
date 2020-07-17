import React, { useState, useEffect } from "react";
import { Button, Divider, Typography, Space, Menu, Dropdown } from "antd";
import { connect } from "dva";
import _ from "lodash";
import HTable from "../../components/Table";
import ExcelUpload from "../DownUp";
import StaffSelectModal from "../StaffSelectModal";

import template2 from "@/template/数据中心值班表.xlsx";
import template3 from "@/template/通讯值班经理排班表.xlsx";
import styles from "./index.module.less";

const { Text } = Typography;

let selectedUpdateId = "";
const AirDuty = ({
  dispatch,
  workingScheduleListForManager,
  workingScheduleListLoading,
  updateWorkingScheduleListLoading,
  currentDutyMonth,
  uploadDataCenterLoading,
  uploadCmLoading,
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
  const uploadDataCenterData = (params) => {
    dispatch({
      type: "DutyAdmin/uploadDataCenterData",
      payload: params,
    });
  };
  const uploadCmData = (params) => {
    dispatch({
      type: "DutyAdmin/uploadCmData",
      payload: params,
    });
  };
  const uploadConfigGroup = [
    {
      buttonName: "上传数据中心排班",
      uploadRequest: uploadDataCenterData,
      loading: uploadDataCenterLoading,
    },
    {
      buttonName: "上传通讯值班排班",
      uploadRequest: uploadCmData,
      loading: uploadCmLoading,
    },
  ];
  const downloadFileList = [
    { name: "数据中心", file: template2, fileName: "数据中心值班表.xlsx" },
    { name: "通讯值班", file: template3, fileName: "通讯值班经理排班表.xlsx" },
  ];
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
              {/* {_.get(staff, "staffName", "-")} */}
              <span className={styles.staffNameLabel}>
                {_.get(staff, "staffName", "")}
              </span>
              <Text className={styles.staffMobile} type="secondary">
                {_.get(staff, "staffMobile", "")}
              </Text>
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
    if (currentDutyMonth !== "" && currentDutyMonth !== undefined) {
      dispatch({
        type: "DutyAdmin/getWorkingScheduleList",
        payload: { month: currentDutyMonth },
      });
    }
  }, [currentDutyMonth, dispatch]);

  return (
    <>
      <div className={styles.extraInfo} style={{ marginBottom: "15px" }}>
        <div>
          <span>点击人员名称进行更改</span>
          <div style={{ float: "right" }}>
            <Space>
              <Dropdown
                className={styles.down}
                overlay={
                  <Menu>
                    {downloadFileList.map((item) => (
                      <Menu.Item key={item.name}>
                        <a
                          download={item.fileName}
                          target="_blank"
                          rel="noopener noreferrer"
                          href={item.file}
                          // href="../../../../template/深圳机场统一运维项目排班表.xlsx"
                        >
                          {item.name}
                        </a>
                      </Menu.Item>
                    ))}
                  </Menu>
                }
                placement="bottomRight"
                arrow
              >
                <Button>下载排班模板</Button>
              </Dropdown>
              <Space>
                {uploadConfigGroup.map((config) => (
                  <ExcelUpload
                    key={config.buttonName}
                    buttonName={config.buttonName}
                    uploadRequest={config.uploadRequest}
                    loading={config.loading}
                  />
                ))}
              </Space>
            </Space>
          </div>
        </div>
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
