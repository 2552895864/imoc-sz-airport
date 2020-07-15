import React from "react";
import { connect } from "dva";
import { Button, Space, Menu, Dropdown, Upload, message } from "antd";
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

const DownUp = ({ dispatch, uploadMsLoading }) => {
  const uploadMsData = (params) => {
    dispatch({
      type: "DutyAdmin/uploadMsData",
      payload: params,
    });
  };
  return (
    <>
      <Space>
        <ExcelUpload
          buttonName="上传统一运维排班"
          uploadRequest={uploadMsData}
          loading={uploadMsLoading}
        />
        <ExcelUpload buttonName="上传数据中心排班" />
        <ExcelUpload buttonName="上传通讯值班排班" />
      </Space>
      <Dropdown
        className={styles.down}
        overlay={
          <Menu>
            <Menu.Item>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.alipay.com/"
              >
                统一运维
              </a>
            </Menu.Item>
            <Menu.Item>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.taobao.com/"
              >
                数据中心
              </a>
            </Menu.Item>
            <Menu.Item>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.tmall.com/"
              >
                通讯值班
              </a>
            </Menu.Item>
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
