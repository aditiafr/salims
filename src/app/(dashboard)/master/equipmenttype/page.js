"use client";

import { Button, Input, Space, Table } from "antd";
import Link from "next/link";
import React from "react";
import HeaderTitle from "@/components/Dashboard/Global/HeaderTitle";
import EditEquipmentType from "./action/edit";
import DeleteEquipmentType from "./action/delete";
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const columns = [
  {
    title: "Code",
    dataIndex: "Code",
    key: "Code",
    width: 80,
  },
  {
    title: "Name",
    dataIndex: "Name",
    key: "Name",
    width: 100,
  },
  {
    title: "Desciption",
    dataIndex: "Desciption",
    key: "Desciption",
    width: 200,
    render: (text) => {
      return text ? text : "N/A";
    },
  },
  {
    title: "Suspended",
    dataIndex: "Suspended",
    key: "Suspended",
    width: 100,
    render: (text) => {
      return text ? (
        <span className="bg-red-500 text-white rounded-full px-3 py-1">Yes</span>
      ) : (
        <span className="bg-green-500 text-white rounded-full px-3 py-1">No</span>
      );
    },
  },
  {
    title: "Action",
    fixed: "right",
    width: 100,
    render: (_, record) => (
      <Space>
        <EditEquipmentType />
        <DeleteEquipmentType name={record.Name} />
      </Space>
    ),
  },
];
const data = [
  {
    key: 1,
    Code: "EQP001",
    Name: "Equipment Type 1",
    Desciption: "Description Equipment Type 1",
    Suspended: false,
  },
  {
    key: 2,
    Code: "EQP002",
    Name: "Equipment Type 2",
    Desciption: "Description Equipment Type 2",
    Suspended: true,
  },
  {
    key: 3,
    Code: "EQP003",
    Name: "Equipment Type 3",
    Desciption: null,
    Suspended: false,
  },
];

const Page = () => {
  return (
    <>
      <div className="flex justify-between items-center px-2 pb-4">
        <HeaderTitle
          title="Equipment Type"
          subtitle="All data equipment type"
        />
        <div>
          <Link href="/master/equipmenttype/form">
            <Button type="primary">+ Add New</Button>
          </Link>
        </div>
      </div>
      <div className="w-full bg-white p-4 rounded-lg">
        <div className="w-full flex justify-end pb-4">
          <Search
            placeholder="Search..."
            onSearch={onSearch}
            style={{
              width: 200,
            }}
          />
        </div>
        <Table
          // loading={true}
          rowSelection
          columns={columns}
          dataSource={data}
          pagination={{
            showSizeChanger: true,
            defaultPageSize: 10,
          }}
          scroll={{
            x: 1000,
          }}
        />
      </div>
    </>
  );
};

export default Page;
