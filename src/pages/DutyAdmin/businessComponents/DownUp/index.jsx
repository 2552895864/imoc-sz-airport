import React from "react";
import { connect } from "dva";
import { Button, Space, Menu, Dropdown, Upload, message } from "antd";
import template1 from "@/template/深圳机场统一运维项目排班表.xlsx";
import template2 from "@/template/数据中心值班表.xlsx";
import template3 from "@/template/通讯值班经理排班表.xlsx";
import styles from "./index.module.less";

const ExcelUpload = ({ buttonName, loading = false, uploadRequest }) => {
  const beforeUpload = (file) => {
    const { name } = file;
    const result = /.xlsx$/.test(name);
    if (!result) {
      message.error("只能上传xlsx文件");
    }
    return result;
  };

  const customRequest = (option) => {
    const formData = new FormData();
    formData.append("file", option.file);
    if (uploadRequest) {
      uploadRequest(formData);
    }
  };

  return (
    <Upload
      name="file"
      customRequest={customRequest}
      showUploadList={false}
      beforeUpload={beforeUpload}
    >
      <Button type="primary" loading={loading}>
        {buttonName}
      </Button>
    </Upload>
  );
};

const DownUp = ({
  dispatch,
  uploadMsLoading,
  uploadDataCenterLoading,
  uploadCmLoading,
}) => {
  const uploadMsData = (params) => {
    dispatch({
      type: "DutyAdmin/uploadMsData",
      payload: params,
    });
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
      buttonName: "上传统一运维排班",
      uploadRequest: uploadMsData,
      loading: uploadMsLoading,
    },
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
    { name: "统一运维", file: template1 },
    { name: "数据中心", file: template2 },
    { name: "通讯值班", file: template3 },
  ];
  return (
    <>
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
      <Dropdown
        className={styles.down}
        overlay={
          <Menu>
            {downloadFileList.map((item) => (
              <Menu.Item key={item.name}>
                <a
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.file}
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
    </>
  );
};
export default connect(({ DutyAdmin }) => DutyAdmin)(DownUp);
