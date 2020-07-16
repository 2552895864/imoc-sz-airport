import React, { useEffect, useState } from "react";
import { Select, Button, Space, Modal } from "antd";
import { connect } from "dva";

import styles from "./index.module.less";

let staffMobile = "";
let staffName = "";
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
}) => {
  const [selectValue, setSelectValue] = useState("");

  const handleUpdateMs = async (value, options) => {
    setSelectValue(value);
    const { key } = options;
    const [mobilePhone, name] = key.split("_");
    staffMobile = mobilePhone;
    staffName = name;
  };

  const handleConfirm = () => {
    if (confirmAction) {
      confirmAction({ staffMobile, staffName });
    }
  };

  useEffect(() => {
    if (visible) {
      dispatch({
        type: "DutyAdmin/getStaffInfoByCondition",
      });
    } else {
      setSelectValue("");
      staffMobile = "";
      staffName = "";
    }
  }, [dispatch, visible]);

  return (
    <Modal footer={null} visible={visible} onCancel={onCancel}>
      <span className={styles.title}>{title}</span>
      <div className={styles.extraInfo}>{updateInfo}</div>
      <div className={styles.content}>
        <span>选择人员</span>
        <Select
          value={selectValue}
          onChange={handleUpdateMs}
          showSearch
          className={styles.select}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
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
          <Button onClick={onCancel}>取消</Button>
          <Button
            type="primary"
            loading={confirmLoading}
            onClick={handleConfirm}
            disabled={!staffName}
          >
            确定
          </Button>
        </Space>
      </div>
    </Modal>
  );
};

export default connect(({ DutyAdmin }) => DutyAdmin)(StaffSelectModal);
