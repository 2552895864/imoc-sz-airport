import React, { useEffect, useState } from "react";
import { Select, Button, Space, Modal, Input, message, Typography } from "antd";
import { connect } from "dva";

import styles from "./index.module.less";

const { Text } = Typography;

const setSelectLabel = (staff) =>
  `(${staff.staffGroup === "manager" ? "通讯" : staff.staffGroup})${
    staff.staffName
  }`;
const StaffSelectModal = ({
  dispatch,
  staffList,
  visible,
  onCancel,
  title,
  updateInfo,
  confirmLoading,
  confirmAction,
  initialValue,
  mode = "select", // 选框模式 和 输入框模式
}) => {
  const [selectValue, setSelectValue] = useState(initialValue.staffMobile);
  const [inputValue, setInputValue] = useState(initialValue);
  const [staffInfo, setStaffInfo] = useState(initialValue);
  const handleUpdateMs = (value, options) => {
    setSelectValue(value);
    const { key } = options;
    const [mobilePhone, name] = key.split("_");
    setStaffInfo({ staffMobile: mobilePhone, staffName: name });
  };
  const handleInputStaffInfo = (e) => {
    const { id, value } = e.target;
    staffInfo[id] = value;
    setInputValue({ ...inputValue, ...{ [id]: value } });
    setStaffInfo({ ...inputValue, ...{ [id]: value } });
  };

  const handleConfirm = () => {
    const currentMode = mode === "select";
    if (!staffInfo.staffName) {
      message.error(currentMode ? "请选择运维人员" : "请填写值班人员姓名");
      return;
    }
    if (!currentMode && !staffInfo.staffMobile) {
      message.error("请填写值班人员电话");
      return;
    }
    confirmAction(staffInfo);
  };

  useEffect(() => {
    if (initialValue && mode === "select") {
      setSelectValue(initialValue.staffMobile);
    }
    if (mode === "input") {
      setInputValue(initialValue);
    }
    setStaffInfo(initialValue);
  }, [initialValue, visible, mode]);

  useEffect(() => {
    if (visible && !staffList.length) {
      dispatch({
        type: "DutyAdmin/getStaffInfoByCondition",
      });
    }
    if (!visible) {
      setSelectValue("");
      setStaffInfo({});
    }
  }, [dispatch, visible, staffList.length]);

  return (
    <Modal footer={null} visible={visible} onCancel={onCancel}>
      <span className={styles.title}>{title}</span>
      <div className={styles.extraInfo}>{updateInfo}</div>
      <div className={styles.content}>
        {mode === "select" ? (
          <Space>
            <Text strong>选择人员：</Text>
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
                  // value={setSelectLabel(staff)}
                  value={staff.staffMobile}
                >
                  {setSelectLabel(staff)}
                </Select.Option>
              ))}
            </Select>
          </Space>
        ) : (
          <Space>
            <Text strong>姓名：</Text>
            <Input
              id="staffName"
              placeholder="姓名"
              value={inputValue.staffName}
              onChange={handleInputStaffInfo}
            />
            <Text strong>电话：</Text>
            <Input
              id="staffMobile"
              placeholder="电话"
              value={inputValue.staffMobile}
              onChange={handleInputStaffInfo}
            />
          </Space>
        )}
      </div>

      <div className={styles.buttonArea}>
        <Space size={10}>
          <Button onClick={onCancel}>取消</Button>
          <Button
            type="primary"
            loading={confirmLoading}
            onClick={handleConfirm}
            // disabled={!staffName}
          >
            确定
          </Button>
        </Space>
      </div>
    </Modal>
  );
};

export default connect(({ DutyAdmin }) => DutyAdmin)(StaffSelectModal);
