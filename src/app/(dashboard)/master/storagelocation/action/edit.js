import ButtonEdit from "@/components/Dashboard/Global/Button/ButtonEdit";
import HeaderTitle from "@/components/Dashboard/Global/HeaderTitle";
import { EditFilled } from "@ant-design/icons";
import { Button, Col, Form, Input, Modal, Row, Tooltip } from "antd";
import React, { useState } from "react";

const EditStorageLocation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onReset = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  return (
    <>
      <Tooltip title="Edit">
        <Button icon={<EditFilled />} type="text" onClick={showModal} />
      </Tooltip>

      <Modal
        title={
          <HeaderTitle
            title="STORAGE LOCATION"
            subtitle="Edit data a storage location"
          />
        }
        centered
        open={isModalOpen}
        closable={false}
        width={1000}
        styles={{
          body: {
            maxHeight: "70vh",
            overflow: "auto",
          },
        }}
        footer={false}
      >
        <Form
          name="basic"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          form={form}
        >
          <Row gutter={30} style={{ margin: "0px", paddingTop:"14px" }}>
            <Col xs={24} sm={12}>
              <Form.Item
                label="Warehouse"
                name="Warehouse"
                rules={[
                  {
                    required: true,
                    message: "Please input your Warehouse!",
                  },
                ]}
              >
                <Input maxLength={20} />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12}>
              <Form.Item
                label="Code"
                name="Code"
                rules={[
                  {
                    required: true,
                    message: "Please input your Code!",
                  },
                ]}
              >
                <Input maxLength={20} />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12}>
              <Form.Item
                label="Name"
                name="Name"
                rules={[
                  {
                    required: true,
                    message: "Please input your Name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12}>
              <Form.Item label="Description" name="Description">
                <Input.TextArea />
              </Form.Item>
            </Col>
          </Row>
          <ButtonEdit onReset={onReset} />
        </Form>
      </Modal>
    </>
  );
};

export default EditStorageLocation;
