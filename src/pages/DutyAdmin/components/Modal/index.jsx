import React, { useState, useImperativeHandle } from "react";
import { Button, Modal, Space, Form, Row, Col } from "antd";
import styles from "./index.module.less";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const HModal = ({
  title,
  buttonType,
  buttonText,
  buttonClassName,
  width = 416,
  formLayout = { layout },
  formItem,
  formSize = "",
  onChangeOfValue,
  extra,
  needGrid = false,
  formLabelWidth,
  formInitialValues = {},
  getValues,
  loading = false,
  mRef,
  buttonAction,
  hideModalCallback,
  hideDefaultButton,
}) => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setVisible(true);
    if (buttonAction) {
      buttonAction();
    }
  };
  const hideModal = () => {
    setVisible(false);
    if (form) {
      form.resetFields();
    }
    if (hideModalCallback) {
      hideModalCallback();
    }
  };
  const onFinish = (values) => {
    if (typeof getValues === "function") {
      getValues(values);
    }
  };
  const onValuesChange = (changedValues, allValues) => {
    if (onChangeOfValue) {
      onChangeOfValue(allValues);
    }
  };

  const renderFormItem = (item) => (
    <Form.Item
      name={item.name}
      label={
        <span
          style={{
            width: formLabelWidth,
            visibility: item.hidden ? "hidden" : "initial",
          }}
        >
          {`${item.label}：`}
        </span>
      }
      rules={item.rules}
      key={item.name}
    >
      {item.component}
    </Form.Item>
  );
  useImperativeHandle(mRef, () => ({
    // changeVal 就是暴露给父组件的方法
    hideModal,
    showModal,
  }));

  return (
    <>
      {hideDefaultButton ? null : (
        <Button
          type={buttonType}
          onClick={showModal}
          className={buttonClassName}
        >
          {buttonText}
        </Button>
      )}
      <Modal
        visible={visible}
        footer={null}
        onCancel={hideModal}
        className={styles.container}
        width={width}
      >
        <div className={styles.title}>{title || buttonText}</div>
        <Form
          {...formLayout}
          onFinish={onFinish}
          onValuesChange={onValuesChange}
          form={form}
          size={formSize}
          initialValues={formInitialValues}
        >
          {needGrid ? (
            <Row gutter={48}>
              {formItem.map((item) => (
                <Col span={item.span || 8} key={item.name}>
                  {renderFormItem(item)}
                </Col>
              ))}
            </Row>
          ) : (
            formItem.map((item) => renderFormItem(item))
          )}
          <Form.Item>
            <div className={styles.buttonArea}>
              <Space size={10}>
                <Button onClick={hideModal}>取消</Button>
                <Button type="primary" htmlType="submit" loading={loading}>
                  确定
                </Button>
              </Space>
            </div>
          </Form.Item>
          {extra}
        </Form>
      </Modal>
    </>
  );
};

export default HModal;
