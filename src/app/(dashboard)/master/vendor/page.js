"use client";

import HeaderTitle from "@/components/Dashboard/Global/HeaderTitle";
import { Button, Input, Space, Table } from "antd";
import Link from "next/link";
import React from "react";
import EditVendor from "./action/edit";
import DeleteVendor from "./action/delete";
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
    title: "Action",
    fixed: "right",
    width: 100,
    render: (_, record) => (
      <Space>
        <EditVendor />
        <DeleteVendor />
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    Code: "BLD01",
    Address: "Jl. Jendral Sudirman",
    ZIPCode: "ZIP01",
    City: "Jakarta Pusat",
    Country: "Indonesia",
    Phone: "0812345678",
    Contact: "Slamet",
    Fax: "17829",
    Desciption: "Test Data",
  },
  {
    key: "2",
    Code: "BLD02",
    Address: "Jl. Jendral Sudirman",
    ZIPCode: "ZIP01",
    City: "Jakarta Pusat",
    Country: "Indonesia",
    Phone: "0812345678",
    Contact: "Slamet",
    Fax: "17829",
    Desciption: "Test Data",
  },
  {
    key: "3",
    Code: "BLD03",
    Address: "Jl. Jendral Sudirman",
    ZIPCode: "ZIP01",
    City: "Jakarta Pusat",
    Country: "Indonesia",
    Phone: "0812345678",
    Contact: "Slamet",
    Fax: "17829",
    Desciption: "Test Data",
  },
  {
    key: "4",
    Code: "BLD04",
    Address: "Jl. Jendral Sudirman",
    ZIPCode: "ZIP01",
    City: "Jakarta Pusat",
    Country: "Indonesia",
    Phone: "0812345678",
    Contact: "Slamet",
    Fax: "17829",
    Desciption: "Test Data",
  },
  {
    key: "5",
    Code: "BLD05",
    Address: "Jl. Jendral Sudirman",
    ZIPCode: "ZIP01",
    City: "Jakarta Pusat",
    Country: "Indonesia",
    Phone: "0812345678",
    Contact: "Slamet",
    Fax: "17829",
    Desciption: "Test Data",
  },
];

const Page = () => {
  return (
    <>
      <div className="flex justify-between items-center px-2 pb-4">
        <HeaderTitle title="VENDOR" subtitle="All data vendor" />
        <div>
          <Link href="/master/vendor/form">
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
