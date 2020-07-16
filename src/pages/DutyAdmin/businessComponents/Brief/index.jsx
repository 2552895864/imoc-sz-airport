import React, { useState, useEffect, useRef } from "react";
import { Button, Input, message, Popconfirm } from "antd";
import { connect } from "dva";
import _ from "lodash";
import BriefPreview from "@/pages/Duty/components/Brief";
import { getNowFormatDate, getTimeFormatFromTTime } from "@/utils/getDateTime";
import HTable from "../../components/Table";
import HModal from "../../components/Modal";
import styles from "./index.module.less";

let currentId = "";
const convertPreviewData = (value) =>
  value.split(/[(\r\n)\r\n]+/).filter((item) => item !== "");

const Brief = ({ dispatch, briefList, briefLoading, updateBriefLoading }) => {
  const [previewData, setPreviewData] = useState([]);
  const modalRef = useRef();
  const updateModalRef = useRef();

  const onChangeOfValue = (value) => {
    const str = _.get(value, "content", "");
    setPreviewData(convertPreviewData(str));
  };
  const getValues = async (values) => {
    const request = currentId ? "updateBrief" : "addBrief";
    const msg = (result) => `${currentId ? "修改" : "添加"}${result}`;
    const params = Object.assign(
      {},
      {
        title: values.createTime,
        content: values.content,
      },
      currentId ? { id: currentId } : {}
    );
    const result = await dispatch({
      type: `DutyAdmin/${request}`,
      payload: params,
    });
    if (result) {
      message.success(msg("成功"));
      currentId
        ? updateModalRef.current.hideModal()
        : modalRef.current.hideModal();
    } else {
      message.error(msg("失败"));
    }
  };
  const deleteBrief = async (id) => {
    const result = await dispatch({
      type: "DutyAdmin/deleteBrief",
      payload: { id },
    });
    message.success(result ? "成功" : "失败");
  };
  const handleOpenUpdateModal = ({ id, createTime, content }) => {
    currentId = id;
    const newRecord = {
      createTime: getTimeFormatFromTTime(createTime),
      content,
    };
    // console.log("asdasdasdasda:::::::::", convertPreviewData(content));
    setPreviewData(convertPreviewData(content));
    updateModalRef.current.form.setFieldsValue(newRecord);
    updateModalRef.current.showModal();
  };
  const hideModalCallback = () => {
    currentId = "";
    setPreviewData("");
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
          <Button type="link" onClick={() => handleOpenUpdateModal(record)}>
            修改
          </Button>
          <Popconfirm
            title="确认删除?"
            okText="是"
            cancelText="否"
            onConfirm={() => deleteBrief(record.id)}
          >
            <Button type="link"> 删除 </Button>
          </Popconfirm>
        </>
      ),
    },
  ];
  const formItem = [
    {
      name: "createTime",
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
          createTime: getNowFormatDate(),
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
        hideModalCallback={hideModalCallback}
      />
      <HModal
        title="修改工作简报"
        hideDefaultButton
        width={1300}
        formItem={formItem}
        onChangeOfValue={onChangeOfValue}
        getValues={getValues}
        extra={
          <div className={styles.preview}>
            <div className={styles.title}>预览</div>
            <div className={styles.content}>
              <BriefPreview previewData={previewData} />
            </div>
          </div>
        }
        mRef={updateModalRef}
        loading={updateBriefLoading}
        hideModalCallback={hideModalCallback}
      />
      <HTable
        pagination={{
          hideOnSinglePage: true,
        }}
        dataSource={briefList}
        columns={columns}
        loading={briefLoading}
      />
    </>
  );
};

export default connect(({ DutyAdmin }) => DutyAdmin)(Brief);
// export default Brief;
