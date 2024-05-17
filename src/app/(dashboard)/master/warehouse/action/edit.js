import ButtonEdit from "@/components/Dashboard/Global/Button/ButtonEdit";
import HeaderTitle from "@/components/Dashboard/Global/HeaderTitle";
import { EditFilled } from "@ant-design/icons";
import { Button, Form, Input, Modal, Tooltip } from "antd";
import React, { useState } from "react";

const EditWarehouse = () => {
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
        title={<HeaderTitle title="Warehouse" subtitle="Edit data a Warehouse" />}
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              columnGap: "30px",
              padding: "28px",
            }}
          >
            <Form.Item
              label="Code"
              name="Code"
              rules={[
                {
                  required: true,
                  message: "Please input your Code!",
                },
              ]}
              style={{ gridColumn: "span 2" }}
            >
              <Input maxLength={20} />
            </Form.Item>

            <Form.Item
              label="Name"
              name="Name"
              rules={[
                {
                  required: true,
                  message: "Please input your Name!",
                },
              ]}
              style={{ gridColumn: "span 2" }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Address"
              name="Address"
              rules={[
                {
                  required: true,
                  message: "Please input your Address!",
                },
              ]}
              style={{ gridColumn: "span 2" }}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item
              label="ZipCode"
              name="ZipCode"
              rules={[
                {
                  required: true,
                  message: "Please input your ZipCode!",
                },
              ]}
              style={{ gridColumn: "span 2" }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="City"
              name="City"
              rules={[
                {
                  required: true,
                  message: "Please input your City!",
                },
              ]}
              style={{ gridColumn: "span 2" }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Country"
              name="Country"
              rules={[
                {
                  required: true,
                  message: "Please input your Country!",
                },
              ]}
              style={{ gridColumn: "span 2" }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Phone"
              name="Phone"
              rules={[
                {
                  required: true,
                  message: "Please input your Phone!",
                },
              ]}
              style={{ gridColumn: "span 2" }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Contact"
              name="Contact"
              rules={[
                {
                  required: true,
                  message: "Please input your Contact!",
                },
              ]}
              style={{ gridColumn: "span 2" }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Fax"
              name="Fax"
              rules={[
                {
                  required: true,
                  message: "Please input your Fax!",
                },
              ]}
              style={{ gridColumn: "span 2" }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Desctiption"
              name="Desctiption"
              style={{ gridColumn: "span 2" }}
            >
              <Input.TextArea />
            </Form.Item>
          </div>
          <ButtonEdit onReset={onReset} />
        </Form>
      </Modal>
    </>
  );
};

export default EditWarehouse;
