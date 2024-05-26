"use client";

import { Form, Input, Col, Row, Select, DatePicker } from "antd";
import ButtonSubmit from "@/components/Dashboard/Global/Button/ButtonSubmit";
import HeaderTitle from "@/components/Dashboard/Global/HeaderTitle";
import Checkbox from "antd/es/checkbox/Checkbox";

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

  const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  const equipementTypes = [
    { label: "(EQ-05) High Performance Liquid Chromatography", value: "EQ-05" },
    { label: "(EQ-06) Gas Chromatography", value: "EQ-06" },
    { label: "(EQ-07) UV-Vis Spectrophotometer", value: "EQ-07" },
    { label: "(EQ-08) FTIR Spectrophotometer", value: "EQ-08" },
  ];

  const vendors = [
    { label: "(VR-02) PT Kromtekindo Utama", value: "VR-02" },
    { label: "(VR-03) PT Kromtekindo Utama", value: "VR-03" },
    { label: "(VR-04) PT Kromtekindo Utama", value: "VR-04" },
  ];

  const manufactures = [
    { label: "(MFG-01) Waters", value: "MFG-01" },
    { label: "(MFG-02) Agilent", value: "MFG-02" },
    { label: "(MFG-03) Shimadzu", value: "MFG-03" },
  ];

  return (
    <>
      <div className="flex justify-between items-center px-2 pb-4">
        <HeaderTitle
          title="EQUIPMENT TYPE"
          subtitle="form data a equipment type"
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
                label="Branch"
                name="Branch"
                rules={[
                  {
                    required: true,
                    message: "Please input your Branch!",
                  },
                ]}
              >
                <Input maxLength={20} />
              </Form.Item>

              <Form.Item
                label="Version"
                name="Version"
                rules={[
                  {
                    required: true,
                    message: "Please input your Version!",
                  },
                ]}
              >
                <Input maxLength={20} />
              </Form.Item>

              <Form.Item
                label="Equipment Type"
                name="EquipmentType"
                rules={[
                  {
                    required: true,
                    message: "Please select Equipment Type!",
                  },
                ]}
              >
                <Select
                  showSearch
                  placeholder="Select Equipment Type"
                  optionFilterProp="children"
                  filterOption={filterOption}
                  options={equipementTypes}
                />
              </Form.Item>

              <Form.Item
                label="Vendor"
                name="Vendor"
                rules={[
                  {
                    required: true,
                    message: "Please select Vendor!",
                  },
                ]}
              >
                <Select
                  showSearch
                  placeholder="Select Vendor"
                  optionFilterProp="children"
                  filterOption={filterOption}
                  options={vendors}
                />
              </Form.Item>

              <Form.Item
                label="Manufacture"
                name="Manufacture"
                rules={[
                  {
                    required: true,
                    message: "Please select Manufacture!",
                  },
                ]}
              >
                <Select
                  showSearch
                  placeholder="Select Manufacture"
                  optionFilterProp="children"
                  filterOption={filterOption}
                  options={manufactures}
                />
              </Form.Item>

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
                label="Serial Number"
                name="SerialNumber"
              >
                <Input maxLength={20} />
              </Form.Item>

              <Form.Item
                label="Calibration Date"
                name="CalibrationDate"
              >
               <DatePicker style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item
                label="Calibration Due Date"
                name="CalibrationDueDate"
              >
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item
                label="Temperature"
                name="Temperature"
              >
                <Input maxLength={20} addonAfter="°C" />
              </Form.Item>

              <Form.Item label="Description" name="Description">
                <Input.TextArea rows={4} />
              </Form.Item>

              <Form.Item name="IsQcTool" valuePropName="checked" initialValue={false}>
                <Checkbox>QC Tool</Checkbox>
              </Form.Item>

              <Form.Item name="Suspended" valuePropName="checked" initialValue={false}>
                <Checkbox>Suspended</Checkbox>
              </Form.Item>
            </Col>
          </Row>
          <ButtonSubmit onReset={onReset} />
        </Form>
      </div>
    </>
  );
};

export default Page;
