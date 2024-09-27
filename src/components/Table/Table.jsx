import React from "react";
import { Table, Dropdown, Menu, Button, Space, Switch } from "antd";
import Loader from "../Loader/Loader";
import "../../css/Form.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaEye, FaEdit, FaTrash, FaListUl } from "react-icons/fa";
import { MdAssignment } from "react-icons/md";
import { IoChatboxEllipses } from "react-icons/io5";

const { Column } = Table;

const TableComponent = ({
  data,
  setData,
  columns,
  loading,
  currentPage,
  pageSize,
  total,
  handleTableChange,
  onShow,
  onEdit,
  onDelete,
  onTask,
  onShowTask,
  task,
  chat = false,
  isDelete = true,
  CRUD = true,
  handleStatusChange,
  staus,
  onChat,
}) => {

  const toggleStatus = async (agentId, currentStatus) => {
    const newStatus = !currentStatus;
    setData((prevData) =>
      prevData.map((item) =>
        item.agentId === agentId ? { ...item, isActivated: newStatus } : item
      )
    );
    try {
      const response =  await handleStatusChange(agentId, newStatus);
      
      setData((prevData) =>
        prevData.map((item) =>
          item.agentId === agentId
            ? { ...item, isActivated: !currentStatus }
            : item
        )
      );
    } catch (error) {
      console.error("Failed to update status:", error);
      setData((prevData) =>
        prevData.map((item) =>
          item.agentId === agentId
            ? { ...item, isActivated: currentStatus }
            : item
        )
      );
    }
  };

  const menu = (record) => (
    <Menu>
      {task && (
        <>
          <Menu.Item key="task">
            <Button
              type="link"
              onClick={() => onTask(record)}
              icon={<MdAssignment />}
              style={{ display: "flex", alignItems: "center" }}
            >
              Assign Task
            </Button>
          </Menu.Item>
          <Menu.Item key="showTask">
            <Button
              type="link"
              onClick={() => onShowTask(record)}
              icon={<FaListUl />}
              style={{ display: "flex", alignItems: "center" }}
            >
              Show Tasks
            </Button>
          </Menu.Item>
        </>
      )}
      <Menu.Item key="show">
        <Button
          type="link"
          onClick={() => onShow(record)}
          icon={<FaEye />}
          style={{ display: "flex", alignItems: "center" }}
        >
          Show
        </Button>
      </Menu.Item>
      {CRUD && (
        <>
          <Menu.Item key="edit">
            <Button
              type="link"
              onClick={() => onEdit(record)}
              icon={<FaEdit />}
              style={{ display: "flex", alignItems: "center" }}
            >
              Edit
            </Button>
          </Menu.Item>
          {isDelete && (
            <Menu.Item key="delete">
              <Button
                type="link"
                onClick={() => onDelete(record)}
                icon={<FaTrash />}
                style={{ display: "flex", alignItems: "center" }}
              >
                Delete
              </Button>
            </Menu.Item>
          )}
        </>
      )}
    </Menu>
  );
  

  return (
    <div className="form-table">
      {loading ? (
        <Loader />
      ) : (
        <Table sx={{ backgroundColor: 'black' }}
          dataSource={data}
          scroll={{ x: "max-content" }}
          rowKey="id"
          className="table"
          pagination={{
            current: currentPage,
            pageSize: pageSize,
            total: total,
            showSizeChanger: true,
          }}
          onChange={handleTableChange}
        >
          {columns.map((column) => (
            <Column
              width={column.width || "auto"}
              key={column.key}
              title={column.title}
              dataIndex={column.dataIndex}
              render={column.render}
            />
          ))}
          {staus && (
            <Column
              width={150}
              title="Status"
              key="isActivated"
              render={(text, record) => (
                <Space direction="vertical">
                  <Switch
                    checkedChildren="UnBlock"
                    unCheckedChildren="Block"
                    checked={record.isActivated}
                    onChange={() =>
                      toggleStatus(record.agentId, record.isActivated)
                    }
                  />
                </Space>
              )}
            />
          )}
          <Column
            title="Actions"
            key="actions"
            render={(text, record) => (
              <Dropdown overlay={menu(record)} trigger={["click"]}>
                <Button type="link" className="more-options-button">
                  <BsThreeDotsVertical size={18} color="#1640D6" />
                </Button>
              </Dropdown>
            )}
            width={120}
            align="right"
          />
        </Table>
      )}
    </div>
  );
};

export default TableComponent;
