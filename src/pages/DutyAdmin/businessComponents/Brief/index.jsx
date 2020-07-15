import React, { useState, useEffect, useRef } from "react";
import { Button, Input, message } from "antd";
import { connect } from "dva";
import _ from "lodash";
import BriefPreview from "@/pages/Duty/components/Brief";
import { getNowFormatDate, getTimeFormatFromTTime } from "@/utils/getDateTime";
import HTable from "../../components/Table";
import HModal from "../../components/Modal";
import styles from "./index.module.less";


const Brief = ({ dispatch, briefList, briefLoading }) => {
  const [previewData, setPreviewData] = useState([]);
  const modalRef = useRef();
  const onChangeOfValue = (value) => {
    const newData = _.get(value, "content", "")
      .split(/[(\r\n)\r\n]+/)
      .filter((item) => item !== "");
    setPreviewData(newData);
  };
  const getValues = async (values) => {
    const params = {
      title: values.date,
      content: values.content,
    };
    const result = await dispatch({
      type: "DutyAdmin/addBrief",
      payload: params,
    });
    if (result) {
      message.success("添加成功");
      modalRef.current.hideModal();
    } else {
      message.success("添加失败");
    }
  };
  const columns = [
    {
      title: "日期",
      dataIndex: "createTime",
      key: "createTime",
      render: (value) => getTimeFormatFromTTime(value), // value.split("T")[0],
    },
    { title: "内容", dataIndex: "content", key: "content", ellipsis: true },
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
      component: <Input disabled />,
    },
    {
      name: "content",
      label: "内容",
      rules: [{ required: true, message: "Please input your username!" }],
      component: <Input.TextArea rows={4} />,
    },
  ];

  useEffect(() => {
    dispatch({
      type: "DutyAdmin/getBrief",
    });
  }, [dispatch]);

  return (
    <>
      <HModal
        buttonType="primary"
        buttonText="新增工作简报"
        buttonClassName={styles.add}
        width={1300}
        formItem={formItem}
        onChangeOfValue={onChangeOfValue}
        formInitialValues={{
          date: getNowFormatDate(),
        }}
        getValues={getValues}
        extra={
          <div className={styles.preview}>
            <div className={styles.title}>预览</div>
            <div className={styles.content}>
              <BriefPreview previewData={previewData} />
            </div>
          </div>
        }
        mRef={modalRef}
        loading={briefLoading}
      />
      <HTable
        pagination={{
          hideOnSinglePage: true,
        }}
        dataSource={briefList}
        columns={columns}
      />
    </>
  );
};

export default connect(({ DutyAdmin }) => DutyAdmin)(Brief);
// export default Brief;
