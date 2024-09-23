import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { IoArrowBack } from "react-icons/io5";
import { MdOutlineRefresh } from "react-icons/md";
import Add from "../Add/Add";
import { useNavigate, useParams } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { deleteDataById, fetchDataByIds, updateDataById } from "../../config/Api Services/apiServices";
import { showSuccessToast } from "../Toast/Toast";
import { IoMdDoneAll } from "react-icons/io";
import Swal from "sweetalert2";

const FormHeader = ({
  listName,
  searchClientId,
  setSearchClientId,
  handleRefresh,
  handleBack,
  add,
  addName,
  inputFields,
  apiEndpoint,
  setLead,
  feedback,
  tabs,
  handleCloseDrawer,
  endpointCSV,
  search = "Lead Id",
  isAdditional,
  isDelete,
  isMarkAsDone
}) => {
  const navigate = useNavigate();
  const { agentId, taskId } = useParams();
  const token = localStorage.getItem("token");

  const [taskStatus, setTaskStatus] = useState("");

  const handleDelete = async () => {
    try {
      await deleteDataById(
        "delete-assign-tasks",
        token,
        agentId,
        taskId
      );
      showSuccessToast("Task deleted successfully.");
      navigate(-1);
    } catch (error) {
      console.error("Error Deleting data:", error);
    }
  };


const handleDone = async () => {
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, mark as done!'
  });

  if (result.isConfirmed) {
    try {
      await updateDataById(
        "update-task-status",
        token,
        agentId,
        { status: "complete" },
        taskId
      );
      showSuccessToast("Marked as done successfully.");
      setTaskStatus("complete");
    } catch (error) {
      console.error("Error Updating data:", error);
    }
  } else {
    console.log("Action cancelled.");
  }
};

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const res = await fetchDataByIds(
          "get-task-status",
          token,
          agentId,
          taskId
        );
        setTaskStatus(res);
      } catch (error) {
        console.error("Error Fetching data:", error);
      }
    };

    checkStatus();
  }, [agentId, taskId, token]); 

  return (
    <div className="form-top">
      <h4>
        <IoArrowBack
          size={20}
          onClick={handleBack}
          style={{ cursor: "pointer" }}
        />
        &nbsp; {listName} List
      </h4>
      <div className="form-top-right">
        <TextField
          id="outlined-basic"
          label={`Search by ${search}`}
          variant="outlined"
          className="form-search"
          size="small"
          value={searchClientId}
          onChange={(e) => setSearchClientId(e.target.value)}
        />
        <Button
          variant="outlined"
          className="form-btn"
          style={{ color: "#1640D6" }}
          onClick={handleRefresh}
        >
          <MdOutlineRefresh size={18} />
          Refresh
        </Button>
        {add && (
          <Add
            onClose={handleCloseDrawer}
            showCustomerFeedback={feedback}
            tabs={tabs}
            listName={addName}
            inputFields={inputFields}
            apiEndpoint={apiEndpoint}
            setLead={setLead}
            endpointCSV={endpointCSV}
            isAdditional={isAdditional}
            btn={
              <Button
                variant="contained"
                className="form-btn addNew"
                style={{ backgroundColor: "#1640D6" }}
              >
                Add new {listName}
              </Button>
            }
          />
        )}
        {isDelete && (
          <Button
            variant="contained"
            className="form-btn addNew"
            onClick={handleDelete}
            style={{ backgroundColor: "#1640D6" }}
          >
            Delete All <MdDelete size={20} color="white" />
          </Button>
        )}
        {isMarkAsDone && (
         <Button
         variant="contained"
         className="form-btn addNew"
         onClick={handleDone}
         style={{
           backgroundColor: taskStatus !== "complete" ? "#1640D6" : "#B0B0B0",
         }}
         disabled={taskStatus === "complete"} 
       >
         Mark as Done &nbsp;<IoMdDoneAll size={20} color="white" />
       </Button>
       
        )}
      </div>
    </div>
  );
};

export default FormHeader;
