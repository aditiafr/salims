"use client";

import { createContext, useContext, useMemo } from "react";
import { Button, Form, Input } from "antd";
const MyFormItemContext = createContext([]);

const Page = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="flex justify-between items-center px-2 pb-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-bold text-indigo-800">Building</h3>
          <p className="text-sm">Form data a building</p>
        </div>
      </div>
      <div className="w-full bg-white rounded-lg">
        <Form
          name="basic"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          // size="large"
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              columnGap: "30px",
              padding: "28px",
              ".ant-form-item": { backgroundColor: "#000" },
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
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "10px",
              position: "sticky",
              top: 0,
              bottom: 0,
              zIndex: 1000,
              width: "100%",
              padding: "20px",
              boxShadow: "0px -5px 10px #00000016",
              backgroundColor: "#FFFFFF",
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Page;
