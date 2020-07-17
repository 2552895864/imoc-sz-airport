import React from "react";
import { Button, Upload, message } from "antd";


const ExcelUpload = ({
  buttonName,
  loading = false,
  uploadRequest,
}) => {
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


// export default connect(({ DutyAdmin }) => DutyAdmin)(DownUp);

export default ExcelUpload;
