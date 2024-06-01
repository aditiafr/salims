"use client";

import { Form, Input, Col, Row, Table, Tag } from "antd";
import ButtonSubmit from "@/components/Dashboard/Global/Button/ButtonSubmit";
import HeaderTitle from "@/components/Dashboard/Global/HeaderTitle";

const Page = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onReset = () => {
    form.resetFields();
  };

  const columns = [
    {
      title: "key",
      dataIndex: "key",
      key: "key",
      width: 150,
    },
    {
      title: "User",
      dataIndex: "User",
      key: "User",
      width: 150,
    },
    {
      title: "Name",
      dataIndex: "Name",
      key: "Name",
      width: 150,
    },
    {
      title: "Phone",
      dataIndex: "Phone",
      key: "Phone",
      width: 150,
    },
    {
      title: "Password",
      dataIndex: "Password",
      key: "Password",
      width: 150,
    },
    {
      title: "Description",
      dataIndex: "Description",
      key: "Description",
      width: 150,
    },
    {
      title: "Suspended",
      dataIndex: "Suspended",
      key: "Suspended",
      width: 120,
      render: (suspended) => (
        <Tag color={suspended ? "red" : "green"}>
          {suspended ? "Yes" : "No"}
        </Tag>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      User: "Ahmad001",
      Name: "Ahmad",
      Phone: "0812398142",
      Password: "*******",
      Description: "Data 1",
      Suspended: false,
    },
    {
      key: "2",
      User: "Ahmad002",
      Name: "Ahmad",
      Phone: "0812398142",
      Password: "*******",
      Description: "Data 2",
      Suspended: true,
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center px-2 pb-4">
        <HeaderTitle
          title="CUSTOMER"
          subtitle="form data a customer"
        />
      </div>
      <div className="w-full bg-white rounded-lg">
        <Form
          name="basic"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          form={form}
        >
          <Row gutter={30} style={{ padding: "28px" }}>
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
              <Form.Item
                label="Address"
                name="Address"
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
              <Form.Item
                label="ZIPCode"
                name="ZIPCode"
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
              <Form.Item
                label="City"
                name="City"
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
              <Form.Item
                label="Country"
                name="Country"
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
              <Form.Item
                label="Phone"
                name="Phone"
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
              <Form.Item
                label="Contact"
                name="Contact"
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
              <Form.Item
                label="Email"
                name="Email"
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
              <Form.Item label="Description" name="Desciption">
                <Input.TextArea />
              </Form.Item>
            </Col>
          </Row>

          <Row style={{ padding: "28px" }}>
            <Table
              // loading={true}
            //   rowSelection
              columns={columns}
              dataSource={data}
            //   pagination={{
            //     showSizeChanger: true,
            //     defaultPageSize: 10,
            //   }}
            //   scroll={{
            //     x: 1000,
            //   }}
            />
          </Row>

          <ButtonSubmit onReset={onReset} />
        </Form>
      </div>
    </>
  );
};

export default Page;
