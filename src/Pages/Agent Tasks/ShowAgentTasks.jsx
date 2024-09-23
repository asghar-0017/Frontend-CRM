import React, { useEffect, useState, useMemo, useRef } from "react";
import { fetchDataById } from "../../config/Api Services/apiServices";
import { useParams, useNavigate } from "react-router-dom";
import AssignTaskCSV from "../../components/Assign Task/AssignTaskByCSV";
import { Button, Tooltip } from "@mui/material";
import { IoArrowBack } from "react-icons/io5";
import { MdOutlineRateReview } from "react-icons/md";
import ReviewModal from "../../components/Modals/ReviewModal";
import StatusIndicator from "../../components/StatusIndicator/StatusIndicator";
import "../../css/TaskList.css";
import { io } from "socket.io-client";
import API_CONFIG from "../../config/API/api";

const ShowAgentTasks = () => {
  const [data, setData] = useState([]);
  const [taskNo, setTaskNo] = useState("");
  const { id } = useParams();
  const token = window.localStorage.getItem("token");
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const socketRef = useRef(null);
  const { apiKey } = API_CONFIG;

  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  };

  const handleCloseDrawers = () => {
    setDrawerOpen(false);
  };

  const handleOpenModal = (taskNo) => {
    setTaskNo(taskNo);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

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
        console.error("Error fetching data:", err);
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
    navigate(`/tasksCSV/${id}/${taskNo}`);
  };

  const statusColorMap = {
    progress: "#FFC107",
    complete: "#03C04A",
  };

  const getBackgroundColor = (statuses) => {
    const status = Array.from(statuses)[0];
    return statusColorMap[status] || "#FFC107" || "#03C04A";
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <StatusIndicator />
          <Button
            variant="contained"
            className="form-btn addNew"
            onClick={handleOpenDrawer}
            style={{ backgroundColor: "#1640D6" }}
          >
            Upload CSV
          </Button>
          <AssignTaskCSV
            open={drawerOpen}
            onClose={handleCloseDrawers}
            endpointCSV={"upload-task"}
            key={drawerOpen.toString()}
          />
        </div>
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
                title="Assign Review"
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
                  <MdOutlineRateReview
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
      <ReviewModal
        open={modalOpen}
        onClose={handleCloseModal}
        taskNo={taskNo}
      />
    </div>
  );
};

export default ShowAgentTasks;
