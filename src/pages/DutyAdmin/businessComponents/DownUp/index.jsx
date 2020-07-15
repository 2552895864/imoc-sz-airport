import React, { useState } from "react";
import { Button, Space, Menu, Dropdown, Upload, message } from "antd";
import styles from "./index.module.less";

const ExcelUpload = ({ buttonName }) => {
  const [loading, setLoading] = useState(false);
  const beforeUpload = (file) => {
    const { name } = file;
    const result = /.xlsx$/.test(name);
    if (!result) {
      message.error("只能上传xlsx文件");
    }
    return result;
  };

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      setLoading(false);
      // Get this url from response in real world.
      // getBase64(info.file.originFileObj, imageUrl =>
      //   this.setState({
      //     imageUrl,
      //     loading: false,
      //   }),
      // );
    }
  };

  return (
    <Upload
      name="file"
      // listType="picture-card"
      // className="avatar-uploader"
      showUploadList={false}
      // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      <Button type="primary" loading={loading}>
        {buttonName}
      </Button>
    </Upload>
  );
};

const DownUp = () => {
  return (
    <>
      <Space>
        <ExcelUpload buttonName="上传统一运维排班" />
        <ExcelUpload buttonName="上传数据中心排班" />
        <ExcelUpload buttonName="上传通讯值班排班" />
        {/* <Button type="primary">上传统一运维排班</Button>
        <Button type="primary">上传数据中心排班</Button>
        <Button type="primary">上传通讯值班排班</Button> */}
      </Space>
      {/* <Button className={styles.down}>下载排班模板</Button> */}
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

export default DownUp;
