"use client";

import HeaderTitle from "@/components/Dashboard/Global/HeaderTitle";
import { Button, Input, Space, Table } from "antd";
import Link from "next/link";
import React from "react";
import EditWarehouse from "./action/edit";
import DeleteWarehouse from "./action/delete";
// import EditBuilding from "./action/edit";
// import DeleteBuilding from "./action/delete";
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
    title: "Address",
    dataIndex: "Address",
    key: "Address",
    width: 150,
  },
  {
    title: "ZIP Code",
    dataIndex: "ZIPCode",
    key: "ZIPCode",
    width: 150,
  },
  {
    title: "City",
    dataIndex: "City",
    key: "City",
    width: 150,
  },
  {
    title: "Country",
    dataIndex: "Country",
    key: "Country",
    width: 150,
  },
  {
    title: "Phone",
    dataIndex: "Phone",
    key: "Phone",
    width: 150,
  },
  {
    title: "Contact",
    dataIndex: "Contact",
    key: "Contact",
    width: 150,
  },
  {
    title: "Fax",
    dataIndex: "Fax",
    key: "Fax",
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
        <EditWarehouse />
        <DeleteWarehouse />
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
        <HeaderTitle title="WAREHOUSE" subtitle="All data warehouse" />
        <div>
          <Link href="/master/warehouse/form">
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
