import React, { useState } from "react";
import { Button, Input } from "antd";
import _ from "lodash";
import BirefPreview from "@/pages/Duty/components/Brief";
import HTable from "../../components/Table";
import HModal from "../../components/Modal";
import styles from "./index.module.less";

const dataSource = [
  {
    id: "1",
    date: "2020/7/1",
    content: "白班",
  },
  {
    id: "2",
    date: "2020/7/1",
    content: "fff",
  },
];

const Brief = () => {
  const [previewData, setPreviewData] = useState([]);
  const onChangeOfValue = (value) => {
    const newData = _.get(value, "content", "")
      .split(/[(\r\n)\r\n]+/)
      .filter((item) => item !== "");
    setPreviewData(newData);
  };
  const columns = [
    { title: "日期", dataIndex: "date", key: "date" },
    { title: "内容", dataIndex: "content", key: "content" },
    {
      title: "操作",
      key: "action",
      render: (text, record) => (
        <>
          <Button type="link">修改</Button>
          <Button type="link">删除</Button>
        </>
      ),
    },
  ];
  const formItem = [
    {
      name: "date",
      label: "日期",
      rules: [{ required: true, message: "Please input your username!" }],
      component: <Input />,
    },
    {
      name: "content",
      label: "内容",
      rules: [{ required: true, message: "Please input your username!" }],
      component: <Input.TextArea rows={4} />,
    },
  ];

  return (
    <>
      <HModal
        buttonType="primary"
        buttonText="新增工作简报"
        buttonClassName={styles.add}
        width={1300}
        formItem={formItem}
        onChangeOfValue={onChangeOfValue}
        extra={
          <div className={styles.preview}>
            <div className={styles.title}>预览</div>
            <div className={styles.content}>
              <BirefPreview data={previewData} />
            </div>
          </div>
        }
      />
      <HTable
        pagination={{
          hideOnSinglePage: true,
        }}
        dataSource={dataSource}
        columns={columns}
      />
    </>
  );
};

export default Brief;
