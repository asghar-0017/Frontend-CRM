import React, { useState, useEffect, useRef } from "react";
import {
  fetchDataById,
  fetchData,
  fetchDataByIds,
} from "../../config/Api Services/apiServices";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import agnetInfo from "../../Zunstand/agentInfo";
import toast from "react-hot-toast";
import API_CONFIG from '../../config/API/api'; 

const GetData = ({
  apiEndpointGet,
  showTimestamps,
  setData,
  setFilteredData,
  setTotal,
  setColumns,
  csvData = false,
}) => {
  const { id, agentId, taskId } = useParams();
  const { apiKey } = API_CONFIG;
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const agentIdLocal = localStorage.getItem("agentId");
  const { userData } = agnetInfo();
  const socketRef = useRef(null);
  const initialDataRef = useRef([]);
  const location = useLocation();
  const navigate = useNavigate()

  useEffect(() => {
    if (!socketRef.current) {
      socketRef.current = io(apiKey);

      const handleSocketData = (payload) => {
        
        if (!payload) return;
        
        if (payload.agent || (payload.data && payload.data.task) || (payload.data && payload.data.lead)) {
          setData(prevData => {
            const newData = Array.isArray(payload.agent || payload.data || payload.data.lead)
              ? [...prevData, ...(payload.agent || payload.data || payload.data.lead)]
              : [...prevData, payload.agent || payload.data || payload.data.lead];
            setFilteredData(newData);
            setTotal(newData.length);
            return newData;
          });

        } else {
          console.log("Received updated data via WebSocket:", payload.isActivated);
        }        
        
        if(payload.isActivated === false && userData.role === "agent"){
          localStorage.setItem("status", false)
          localStorage.removeItem("token");
          localStorage.removeItem("agentId");
          localStorage.removeItem("agentInfo");
          localStorage.removeItem("onlineAgents");
          navigate("/agent/agentLeads/")
        }
      };

      socketRef.current.on("receive_message", handleSocketData);
    }

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, [apiKey, setData, setFilteredData, setTotal, userData.role]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("No token found");

        let data;
        if (agentId && taskId) {
          data = await fetchDataByIds(apiEndpointGet, token, agentId, taskId);
        } else if (agentIdLocal) {
          data = await fetchDataById(apiEndpointGet, token, agentIdLocal);  
        } else if (id) {
          data = await fetchDataById(apiEndpointGet, token, id);
        } else {
          data = await fetchData(apiEndpointGet, token);
        }            
        

        if (Array.isArray(data) && data.length > 0) {
          const fieldSet = new Set();
          data.forEach(item => Object.keys(item).forEach(key => fieldSet.add(key)));
          
          const excludedFields = ['id', 'isActivated', 'updated_at'];
          const availableFields = Array.from(fieldSet).filter(field => !excludedFields.includes(field));
        
          const dynamicColumns = availableFields.map(field => ({
            title: field.charAt(0).toUpperCase() + field.slice(1).replace(/_/g, ' '),
            dataIndex: field,
            key: field,
            render: (text) => {
              if (field === 'created_at' && text) {
                return new Date(text).toLocaleDateString();
              }
              return text === null || text === undefined ? '-' : text;
            }
          }));
        
          initialDataRef.current = data;
          setData(data);
          setFilteredData(data);
          setTotal(data.length);
          setColumns(dynamicColumns);
        } else {
          setData([]);
          setFilteredData([]);
          setTotal(0);
          setColumns([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setFilteredData([]);
        setTotal(0);
        setColumns([]);
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromApi();
  }, [
    apiEndpointGet,
    refresh,
    showTimestamps,
    id,
    setData,
    setFilteredData,
    setTotal,
    setColumns,
    csvData,
  ]);

  return { loading, setRefresh };
};

export default GetData;
