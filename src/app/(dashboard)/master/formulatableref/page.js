"use client";

import { Button, Input, Space, Table, Tag } from "antd";
import Link from "next/link";
import React from "react";
import HeaderTitle from "@/components/Dashboard/Global/HeaderTitle";
import EditFormulaTableRef from "./action/edit";
import DeleteFormulaTableRef from "./action/delete";
import DetailFormulaTableRef from "./action/detail";
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const columns = [
  {
    title: "Branch",
    dataIndex: "Branch",
    key: "Branch",
    width: 80,
  },
  {
    title: "Version",
    dataIndex: "Version",
    key: "Version",
    width: 80,
  },
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
    title: "FormulaCode",
    dataIndex: "FormulaCode",
    key: "FormulaCode",
    width: 100,
  },
  {
    title: "ColumnCount",
    dataIndex: "ColumnCount",
    key: "ColumnCount",
    width: 100,
  },
  {
    title: "Action",
    fixed: "right",
    width: 100,
    render: (_, record) => (
      <Space>
        <DetailFormulaTableRef />
        <EditFormulaTableRef />
        <DeleteFormulaTableRef name={record.Name} />
      </Space>
    ),
  },
];

const data = [
  {
    key: 1,
    Branch: "0001",
    Version: "1",
    Code: "TBLLC",
    Name: "Luff Schrool",
    FormulaCode: "[TBLLC]",
    ColumnCount: "9",
  },
  {
    key: 2,
    Branch: "0001",
    Version: "1",
    Code: "TBLLO",
    Name: "Luff Office",
    FormulaCode: "[TBLLO]",
    ColumnCount: "9",
  },
  {
    key: 3,
    Branch: "0001",
    Version: "1",
    Code: "TBLFA",
    Name: "Luff Factory",
    FormulaCode: "[TBLFA]",
    ColumnCount: "9",
  },
  {
    key: 4,
    Branch: "0001",
    Version: "1",
    Code: "TBLWH",
    Name: "Luff Warehouse",
    FormulaCode: "[TBLWH]",
    ColumnCount: "9",
  },
]

const Page = () => {
  return (
    <>
      <div className="flex justify-between items-center px-2 pb-4">
        <HeaderTitle
          title="Formula Table Reference"
          subtitle="All data formula table reference"
        />
        <div>
          <Link href="/master/formulatableref/form">
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
