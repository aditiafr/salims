"use client";

import ButtonDelete from "@/components/Dashboard/Global/Button/ButtonDelete";
import { DeleteFilled, ExclamationCircleFilled } from "@ant-design/icons";
import { Button, Modal, Tooltip } from "antd";
import React from "react";

const { confirm } = Modal;

const DeleteOtherExpense = ({ name }) => {
  const handleDelete = () => {
    Modal.destroyAll();
    console.log("Delete Data!");
  };

  const showConfirm = () => {
    confirm({
      title: "Do you want to delete these items?",
      icon: <ExclamationCircleFilled />,
      content: `Other Expense ${name}`,
      centered: true,
      footer: <ButtonDelete onDelete={handleDelete} />,
    });
  };

  return (
    <>
      <Tooltip title="Delete">
        <Button icon={<DeleteFilled />} onClick={showConfirm} type="text" />
      </Tooltip>
    </>
  );
};

export default DeleteOtherExpense;
