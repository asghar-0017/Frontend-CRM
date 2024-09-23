import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../css/ChatApp.css";
import Swal from "sweetalert2";
import {
  fetchDataByIds,
  postDataByIds,
} from "../../config/Api Services/apiServices";
import agnetInfo from "../../Zunstand/agentInfo";
import { io } from "socket.io-client";
import SendButton from "../../components/Buttons/Send";
import { FaArrowLeft } from "react-icons/fa";
import API_CONFIG from '../../config/API/api'; 
import toast from "react-hot-toast";

const ChatAppAgent = () => {
  const { id } = useParams();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const token = localStorage.getItem("token");
  const { userData } = agnetInfo();
  const socketRef = useRef(null);
  const chatWindowRef = useRef(null); 
  const agentId = localStorage.getItem("agentId");
  const navigate = useNavigate()
  const { apiKey } = API_CONFIG;

  useEffect(() => {
    
    if (!socketRef.current) {
      socketRef.current = io(apiKey);

      socketRef.current.on("receive_message", (payload) => {

        // console.log("Received message:", payload);
        
        if (payload && payload.message && payload.data.message && payload.data.agentId == agentId) {
          setMessages((prevMessages) => {
            const newMessage = {
              ...payload.message,
              ...payload.data,
            };

            if (prevMessages.some((msg) => msg.id === newMessage.id)) {
              return prevMessages;
            }

            const updatedMessages = [...prevMessages, newMessage].sort(
              (a, b) => new Date(a.created_at) - new Date(b.created_at)
            );

            return updatedMessages;
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
  }, [messages, socketRef]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const data = await fetchDataByIds(
          "get-all-messages",
          token,
          "786",
          id || userData.agentId
        );
        if (data && data.adminMessages && data.agentMessages) {
          const combinedMessages = [
            ...data.adminMessages.map((msg) => ({
              ...msg,
              created_at: msg.created_at || new Date().toISOString(),
            })),
            ...data.agentMessages.map((msg) => ({
              ...msg,
              created_at: msg.created_at || new Date().toISOString(),
            })),
          ].sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

          setMessages(combinedMessages);
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to load messages. Please try again.",
        });
      }
    };

    fetchMessages();
  }, [id, token, userData.agentId]);

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (inputValue.trim() !== "") {
      const dataToSubmit = {
        message: inputValue,
        // created_at: new Date().toISOString()
      };
      try {
        await postDataByIds(
          "send-message-to-admin",
          dataToSubmit,
          token,
          userData.agentId
        );
        if (socketRef.current) {
          socketRef.current.emit("send_message", dataToSubmit);
        }
        setInputValue("");
      } catch (error) {
        console.error("Error submitting data:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong. Please try again.",
        });
      }
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <FaArrowLeft onClick={() => navigate("/agent/agentLeads")} style={{cursor: "pointer"}}/>
      </div>

      <div className="chat-window" ref={chatWindowRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-bubble ${
              message.role === "agent" ? "bot-bubble" : "user-bubble"
            }`}
          >
            <div>{message.message}</div>
            <div
              style={{ fontSize: "10px", textAlign: "right", color: "#c5c5ca" }}
            >
              {new Date(message.created_at).toLocaleTimeString()}
            </div>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          className="chat-input"
          placeholder="Type a message."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
        />
        <div onClick={handleSend}>
          <SendButton />
        </div>
      </div>
    </div>
  );
};

export default ChatAppAgent;
