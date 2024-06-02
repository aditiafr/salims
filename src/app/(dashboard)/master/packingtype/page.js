"use client";

import { Button, Input, Space, Table, Tag } from "antd";
import Link from "next/link";
import React from "react";
import HeaderTitle from "@/components/Dashboard/Global/HeaderTitle";
import EditPackingType from "./action/edit";
import DeletePackingType from "./action/delete";
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
    render: (text) => (text ?? "N/A"),
  },
  {
    title: "Suspended",
    dataIndex: "Suspended",
    key: "Suspended",
    width: 100,
    render: (suspended) => (
      <Tag color={suspended ? 'red' : 'green' }> {suspended ? 'Yes' : 'No'} </Tag>
    ),
  },
  {
    title: "Action",
    fixed: "right",
    width: 100,
    render: (_, record) => (
      <Space>
        <EditPackingType />
        <DeletePackingType name={record.Name} />
      </Space>
    ),
  },
];
const data = [
  {
    key: 1,
    Code: "P4",
    Name: "Ampoule",
    Desciption: "Ampoule",
    Suspended: false,
  },
  {
    key: 2,
    Code: "P5",
    Name: "Bottle",
    Desciption: "Bottle",
    Suspended: true,
  },
  {
    key: 3,
    Code: "P6",
    Name: "Can",
    Desciption: null,
    Suspended: false,
  },
];

const Page = () => {
  return (
    <>
      <div className="flex justify-between items-center px-2 pb-4">
        <HeaderTitle
          title="Packing Type"
          subtitle="All data packing type"
        />
        <div>
          <Link href="/master/packingtype/form">
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
