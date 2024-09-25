import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormHeader from "../Form Header/formHeader";
import TableComponent from "../Table/Table";
import ShowData from "../Show Data/ShowData";
import EditData from "../Edit Data/EditData";
import {
  fetchDataById,
  deleteDataById,
  updateDataById,
  postDataById,
} from "../../config/Api Services/apiServices";
import DataLoader from "../Get Data/getData";
import { showErrorToast, showSuccessToast } from "../Toast/Toast";
import AssignTask from "../Assign Task/AssignTask";
import { emitEvent } from "../../Socket/Socket";

const Form = ({
  listName,
  addName,
  inputFields,
  apiEndpointGet,
  apiEndpoint,
  setLead,
  customId,
  add,
  showTimestamps,
  tabs,
  task,
  feedback,
  search,
  addTask,
  endpointCSV,
  isDelete,
  CRUD,
  staus,
  apiEndpointShowData,
  apiEndpointDeleteData,
  apiEndpointUpdateData,
  apiEndpointassignTask,
  chat,
  csvData,
  isAdditional,
  isDeleteTask,
  isMarkAsDone,
  isTask,
  deleteAssignTask
}) => {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchClientId, setSearchClientId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [showDrawerOpen, setShowDrawerOpen] = useState(false);
  const [editDrawerOpen, setEditDrawerOpen] = useState(false);
  const [assignTaskDrawerOpen, setAssignTaskDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const { loading: dataLoading, setRefresh } = DataLoader({
    apiEndpointGet,
    showTimestamps,
    setData,
    setFilteredData,
    setTotal,
    setColumns,
    csvData
  });

  

  useEffect(() => {
    if (searchClientId.trim() === "") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) =>
        item[customId]?.toString().includes(searchClientId.trim())
      );
      setFilteredData(filtered);
    }
  }, [searchClientId, data, customId]);

  const handleBack = () => navigate(-1);

  const handleRefresh = () => setRefresh((prev) => !prev);

  const handleTableChange = (pagination) => {
    setCurrentPage(pagination.current);
    setPageSize(pagination.pageSize);
  };

  const handleShow = async (record) => {
    setLoading(true);
    setSelectedRecord(record);
    try {
      const data = await fetchDataById(
        apiEndpointShowData,
        token,
        record.taskId || record.leadId || record.agentId
      );
      const created = new Date(data.created_at).toLocaleDateString();
      const updated = new Date(data.updated_at).toLocaleDateString();
      setSelectedRecord({
        ...record,
        created_at: created,
        updated_at: updated,
      });
      setShowDrawerOpen(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (record) => {
    setLoading(true);
    setSelectedRecord(record);
    try {
      await deleteDataById(
        apiEndpointDeleteData,
        token,
        record.taskId || record.leadId || record.agentId
      );
      const updatedData = data.filter(
        (item) =>
          item.taskId !== record.taskId ||
          item.leadId !== record.leadId ||
          item.agentId !== record.agentId
      );
      setData(updatedData);
      setFilteredData(updatedData);
      setTotal(updatedData.length);
      showSuccessToast("Record deleted successfully.");
    } catch (error) {
      console.error("Error Deleting data:", error);
      showErrorToast("Failed to delete record.");
    } finally {
      setLoading(false);
    }
  };

  const handleAssigntask = (record) => {
    setSelectedRecord(record);
    setAssignTaskDrawerOpen(true);
  };

  const handleAssignTask = async (taskDescription) => {
    setLoading(true);
    console.log(selectedRecord.agentId);

    try {
      await postDataById(
        apiEndpointassignTask,
        taskDescription ,
        token,
        selectedRecord.agentId
      );
      showSuccessToast("Task assigned successfully.");
      setAssignTaskDrawerOpen(false);
    } catch (error) {
      console.error("Error assigning task:", error);
      showErrorToast("Failed to assign task.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = async (updatedRecord) => {
    setLoading(true);
    try {
      await updateDataById(
        apiEndpointUpdateData,
        token,
        updatedRecord.leadId || updatedRecord.agentId,
        updatedRecord
      );
      // console.log(updatedRecord);

      const updatedData = data.map((item) =>
        item.taskId == updatedRecord.taskId &&
        item.agentId == updatedRecord.agentId &&
        item.leadId == updatedRecord.leadId
          ? updatedRecord
          : item
      );
      // console.log(updatedData);

      setData(updatedData);
      setFilteredData(updatedData);
      showSuccessToast("Record updated successfully.");
    } catch (error) {
      console.error("Error updating data:", error);
      showErrorToast("Failed to update record.");
    } finally {
      setLoading(false);
      setEditDrawerOpen(false);
    }
  };

  const handleCloseShowDrawer = () => {
    setShowDrawerOpen(false);
    setSelectedRecord(null);
  };

  const handleCloseEditDrawer = () => {
    setEditDrawerOpen(false);
    setSelectedRecord(null);
  };

  const handleCloseAssignTaskDrawer = () => {
    setAssignTaskDrawerOpen(false);
    setSelectedRecord(null);
  };

  const handleShowtask = (e) => {
    handleRefresh();
    navigate(`/agentTasks/${e.agentId}`);
  };

  const handleShowChat = (e) => {
    handleRefresh();
    navigate(`/agentChat/${e.agentId}`);
  };

  const statusChange = async (agentId, status) => {
    setLoading(true);
    try {
      const response = await updateDataById("update-status", token, agentId, {
        status,
      });
      emitEvent('send_message', response);
      const updatedData = data.map((item) =>
        item.agentId === agentId ? { ...item, status } : item
      );
      setData(updatedData);
      setFilteredData(updatedData);
      showSuccessToast(`Agent has been ${status ? "UnBlock" : "Block"}.`);
    } catch (error) {
      console.error("Error updating agent status:", error);
      showErrorToast("Failed to update agent status.");
    } finally {
      setLoading(false);
    }
  };

  

  return (
    <div className="Form">
      <FormHeader
        endpointCSV={endpointCSV}
        listName={listName}
        searchClientId={searchClientId}
        setSearchClientId={setSearchClientId}
        handleRefresh={handleRefresh}
        handleBack={handleBack}
        add={add}
        addName={addName}
        inputFields={inputFields}
        apiEndpoint={apiEndpoint}
        setLead={setLead}
        tabs={tabs}
        feedback={feedback}
        search={search}
        addTask={addTask}
        isAdditional={isAdditional}
        isDelete={isDeleteTask}
        isMarkAsDone={isMarkAsDone}
        isTask={isTask}
        deleteAssignTask={deleteAssignTask}
      />
      <TableComponent
        data={filteredData}
        setData={setData}
        columns={columns}
        loading={dataLoading}
        currentPage={currentPage}
        pageSize={pageSize}
        total={total}
        handleTableChange={handleTableChange}
        onShow={handleShow}
        staus={staus}
        onDelete={handleDelete}
        onEdit={(record) => {
          setSelectedRecord(record);
          setEditDrawerOpen(true);
        }}
        task={task}
        onTask={handleAssigntask}
        onShowTask={handleShowtask}
        isDelete={isDelete}
        CRUD={CRUD}
        handleStatusChange={statusChange}
        chat={chat}
        onChat={handleShowChat}
      />
      <ShowData
        open={showDrawerOpen}
        onClose={handleCloseShowDrawer}
        data={selectedRecord}
        loading={loading}
      />
      <EditData
        open={editDrawerOpen}
        onClose={handleCloseEditDrawer}
        data={selectedRecord}
        loading={loading}
        onSave={handleEdit}
      />
      <AssignTask
        open={assignTaskDrawerOpen}
        onClose={handleCloseAssignTaskDrawer}
        onSave={handleAssignTask}
        tabs={tabs}
      />
    </div>
  );
};

export default Form;
