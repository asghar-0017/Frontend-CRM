// ShowAgentTasks.js
import React, { useEffect, useMemo, useRef, useState } from "react";
import { fetchDataById } from "../../config/Api Services/apiServices";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import StatusIndicator from "../../components/StatusIndicator/StatusIndicator";
import "../../css/TaskList.css";
import { VscPreview } from "react-icons/vsc";
import { Tooltip } from "@mui/material";
import { GetReviewModal } from "../../components/Modals/ReviewModal";
import { io } from "socket.io-client";
import API_CONFIG from "../../config/API/api";

const ShowAgentTasks = () => {
  const [data, setData] = useState([]);
  const id = localStorage.getItem("agentId");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [taskNo, setTaskNo] = useState("");
  const socketRef = useRef(null);
  const { apiKey } = API_CONFIG;

  useEffect(() => {
    if (!socketRef.current) {
      socketRef.current = io(apiKey);

      socketRef.current.on("receive_message", (payload) => {
        if (!payload.message) {
          setData((prevData) => {
            const updatedData = [...prevData];

            payload.forEach((newTask) => {
              const index = updatedData.findIndex(
                (task) => task.id === newTask.id
              );
              if (index === -1) {
                updatedData.push(newTask);
              } else {
                updatedData[index] = newTask;
              }
            });

            return updatedData;
          });
        }
      });

      socketRef.current.on("connect_error", (error) => {
        console.error("WebSocket connection error:", error);
      });
    }

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, [apiKey]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchDataById("get-assign-tasks", token, id);
        setData(res);
      } catch (err) {
        console.log("Error fetching tasks:", err);
      }
    };
    fetchData();
  }, [id, token]);

  const groupedTasks = useMemo(() => {
    return data.reduce((acc, task) => {
      if (!acc[task.taskNo]) {
        acc[task.taskNo] = {
          tasks: [],
          status: new Set(),
        };
      }

      acc[task.taskNo].tasks.push(task);
      acc[task.taskNo].status.add(task.status);

      return acc;
    }, {});
  }, [data]);

  const handleTaskClick = (taskNo) => {
    navigate(`/agent/tasksCSV/${id}/${taskNo}`);
  };

  const statusColorMap = {
    progress: "#FFC107",
    complete: "#03C04A",
  };

  const getBackgroundColor = (statuses) => {
    const status = Array.from(statuses)[0];
    return statusColorMap[status];
  };

  const handleOpenModal = (taskNo) => {
    setTaskNo(taskNo);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div style={{ width: "100%", height: "100%", padding: "30px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <IoArrowBack
            size={20}
            onClick={() => navigate(-1)}
            style={{ cursor: "pointer", marginRight: "10px" }}
          />
          <span
            style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1640D6" }}
          >
            All Tasks:
          </span>
        </div>
        <StatusIndicator />
      </div>
      <br />
      <br />
      <div className="task-list">
        {Object.keys(groupedTasks).map((taskNo) => (
          <div
            key={taskNo}
            className="task-item"
            style={{
              backgroundColor: getBackgroundColor(groupedTasks[taskNo].status),
            }}
          >
            <span
              className="task-number"
              onClick={() => handleTaskClick(taskNo)}
            >
              {`Task No: ${taskNo}`}
            </span>
            {Array.from(groupedTasks[taskNo].status)[0] === "complete" && (
              <Tooltip
                title="Review"
                PopperProps={{
                  sx: {
                    [`& .MuiTooltip-tooltip`]: {
                      marginTop: "25px",
                    },
                  },
                }}
              >
                <span
                  onClick={() => handleOpenModal(taskNo)}
                  className="review-icon"
                >
                  <VscPreview
                    color="white"
                    size={25}
                    style={{ cursor: "pointer" }}
                  />
                </span>
              </Tooltip>
            )}
          </div>
        ))}
      </div>
      <GetReviewModal
        open={modalOpen}
        onClose={handleCloseModal}
        taskNo={taskNo}
      />
    </div>
  );
};

export default ShowAgentTasks;
