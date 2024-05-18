"use client";

import { Button, Input, Space, Table } from "antd";
import Link from "next/link";
import React from "react";
// import EditBuilding from "./action/edit";
// import DeleteBuilding from "./action/delete";
import HeaderTitle from "@/components/Dashboard/Global/HeaderTitle";
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const columns = [
  {
    title: "key",
    dataIndex: "key",
    key: "key",
    width: 80,
  },
  {
    title: "Warehouse",
    dataIndex: "Warehouse",
    key: "Warehouse",
    width: 150,
  },
  {
    title: "Code",
    dataIndex: "Code",
    key: "Code",
    width: 150,
  },
  {
    title: "Name",
    dataIndex: "Name",
    key: "Name",
    width: 150,
  },
  {
    title: "Desciption",
    dataIndex: "Desciption",
    key: "Desciption",
    width: 150,
  },
  {
    title: "Action",
    fixed: "right",
    width: 100,
    render: (_, record) => (
      <Space>
        {/* <EditBuilding />
        <DeleteBuilding /> */}
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    Warehouse: "WH01",
    Code: "001",
    Name: "Sudirman",
    Desciption: "Test Data",
  },
];

const Page = () => {
  return (
    <>
      <div className="flex justify-between items-center px-2 pb-4">
        <HeaderTitle title="STORAGE LOCATION" subtitle="All data storage location" />
        <div>
          <Link href="/master/storagelocation/form">
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
