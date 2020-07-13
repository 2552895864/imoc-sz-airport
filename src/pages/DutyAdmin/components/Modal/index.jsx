import React, { useState } from "react";
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
}) => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const showModal = () => {
    setVisible(true);
  };
  const hideModal = () => {
    setVisible(false);
    if (form) {
      form.resetFields();
    }
  };
  const onFinish = (values) => {
    console.log(values);
  };
  const onValuesChange = (changedValues, allValues) => {
    if (onChangeOfValue) {
      onChangeOfValue(allValues);
    }
  };

  return (
    <>
      <Button type={buttonType} onClick={showModal} className={buttonClassName}>
        {buttonText}
      </Button>
      <Modal
        visible={visible}
        footer={null}
        onCancel={hideModal}
        className={styles.container}
        width={width}
      >
        <div className={styles.title}>{title || buttonText}</div>
        {/* {children} */}
        <Form
          {...formLayout}
          onFinish={onFinish}
          onValuesChange={onValuesChange}
          form={form}
          size={formSize}
        >
          {needGrid ? (
            <Row gutter={48}>
              {formItem.map((item) => (
                <Col span={item.span || 8} key={item.name}>
                  <Form.Item
                    name={item.name}
                    label={item.label}
                    rules={item.rules}
                    key={item.name}
                  >
                    {item.component}
                  </Form.Item>
                </Col>
              ))}
            </Row>
          ) : (
            formItem.map((item) => (
              <Form.Item
                name={item.name}
                label={item.label}
                rules={item.rules}
                key={item.name}
              >
                {item.component}
              </Form.Item>
            ))
          )}
          <Form.Item>
            <div className={styles.buttonArea}>
              <Space size={10}>
                <Button onClick={hideModal}>取消</Button>
                <Button type="primary">确定</Button>
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
