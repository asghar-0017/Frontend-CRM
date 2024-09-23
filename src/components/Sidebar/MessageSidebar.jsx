import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../css/Sidebar.css";
import { fetchData } from "../../config/Api Services/apiServices";
import { Avatar, Badge } from '@mui/material';
import useIsMobile from "../../Hooks/useIsMobile";
import Swal from "sweetalert2";
import useOnlineAgentsStore from "../../Zunstand/onlineAgentsStore"; 
import { styled } from '@mui/material/styles';

const MessageSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState([]);
  const { onlineAgents } = useOnlineAgentsStore(state => ({
    onlineAgents: state.onlineAgents
  }));

  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      Swal.fire({
        title: 'Under Construction',
        text: 'Mobile view of messages is under construction',
        icon: 'info',
        confirmButtonText: 'Okay'
      }).then(() => {
        navigate('/'); 
      });
    }
  }, [isMobile, navigate]);

  const getEndpoint = "get-agent";
  const id = location.pathname.split("/");
  const lastSegment = id.pop();

  useEffect(() => {
    if (!isMobile) {
      const token = localStorage.getItem("token");

      const fetchAgent = async () => {
        try {
          const response = await fetchData(getEndpoint, token);
          setData(response);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchAgent();
    }
  }, [isMobile]);

  if (isMobile) {
    return null; 
  }

  const StyledBadge = styled(Badge)(({ theme, online }) => ({
    '& .MuiBadge-dot': {
      backgroundColor: online ? '#44B700' : 'gray',
    },
    '& .MuiBadge-badge': {
      backgroundColor: online ? '#44B700' : 'gray',
      color: online ? '#44B700' : 'gray',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        border: '1px solid currentColor',
        content: '""',
        ...(online ? {
          animation: 'ripple 1.2s infinite ease-in-out',
        } : {}),
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

  return (
    <div className="sidebar">
      <div className="sidebar-main">
        {data.map((a, index) => {
          const isOnline = onlineAgents.includes(String(a.agentId));

          return (
            <div
              key={index}
              className={`sidebar-content ${
                lastSegment == a.agentId ? "active" : ""
              }`}
              onClick={() => navigate(`/messages/agentChat/${a.agentId}`)}
            >
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
                online={isOnline}
              >
                <Avatar alt={`${a.firstName} ${a.lastName}`} src="/static/images/avatar/1.jpg" />
              </StyledBadge>
              <span className="sidebar-span">{`${a.firstName} ${a.lastName}`}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MessageSidebar;
