"use client";

import { Button, Input, Space, Table, Tag } from "antd";
import Link from "next/link";
import React, { Suspense } from "react";
import HeaderTitle from "@/components/Dashboard/Global/HeaderTitle";
import EditTimePoint from "./action/edit";
import DeleteTimePoint from "./action/delete";

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
    title: "Interval",
    dataIndex: "Interval",
    key: "Interval",
    width: 150,
  },
  {
    title: "Desciption",
    dataIndex: "Desciption",
    key: "Desciption",
    width: 150,
  },
  {
    title: "Suspended",
    dataIndex: "Suspended",
    key: "Suspended",
    width: 120,
    render: (suspended) => (
      <Tag color={suspended ? "red" : "green"}>{suspended ? "Yes" : "No"}</Tag>
    ),
  },
  {
    title: "Action",
    fixed: "right",
    width: 100,
    render: (_, record) => (
      <Space>
        <EditTimePoint />
        <DeleteTimePoint />
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    Code: "001",
    Name: "Sudirman",
    Interval: "03/14/02:00",
    Desciption: "Test Data",
    Suspense: false,
  },
];

const Page = () => {
  return (
    <>
      <div className="flex justify-between items-center px-2 pb-4">
        <HeaderTitle
          title="TIME POINT"
          subtitle="All data time point"
        />
        <div>
          <Link href="/master/timepoint/form">
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
