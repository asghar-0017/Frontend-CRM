import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import handleLogout from "../Logout.jsx/Logout";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdSupportAgent } from "react-icons/md";
import { GrTableAdd } from "react-icons/gr";
import { TbListDetails } from "react-icons/tb";
import { RiChatFollowUpLine } from "react-icons/ri";
import { FaTasks, FaRegTrashAlt} from "react-icons/fa";

const LeftDrawer = () => {
  const location = useLocation();

  const [state, setState] = useState({
    left: false,
  });

  const navigate = useNavigate();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleNavigation = (text) => {
    switch (text) {
      case "Agents":
        navigate("/");
        break;
      case "Leads":
        navigate("/leads");
        break;
      case "Follow Up Details":
        navigate("/followUp");
        break;
      case "Other Details":
        navigate("/other");
        break;
      case "All Tasks":
        navigate("/allTasks");
        break;
      case "Trash":
        navigate("/trash");
        break;
      default:
        break;
    }
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          { text: "Agents", icon: <MdSupportAgent color="#1640D6" /> },
          { text: "Leads", icon: <GrTableAdd color="#1640D6" /> },
          {
            text: "Follow Up Details",
            icon: <RiChatFollowUpLine color="#1640D6" />,
          },
          {
            text: "Other Details",
            icon: <TbListDetails color="#1640D6" />,
          },
          {
            text: "All Tasks",
            icon: <FaTasks color="#1640D6" />,
          },
          {
            text: "Trash",
            icon: <FaRegTrashAlt color="#1640D6" />,
          },
        ].map(({ text, icon }) => (
          <>
            <ListItem key={text} disablePadding>
              <ListItemButton
                onClick={() => handleNavigation(text)}
                sx={{ paddingLeft: "20px" }}
              >
                <ListItemIcon sx={{ minWidth: "35px", color: "#1640D6" }}>
                  {icon}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
      <Divider />
    </Box>
  );

  useEffect(() => {
    setState({ ...state, left: false });
  }, [location.pathname]);

  return (
    <div>
      <Button onClick={toggleDrawer("left", true)}>
        <GiHamburgerMenu color="#1640D6" size={20} />
      </Button>
      <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
        <div
          onClick={() => handleLogout()}
          style={{
            fontSize: "1rem",
            width: "100%",
            textAlign: "center",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              backgroundColor: "#1640D6",
              color: "white",
              fontWeight: "bold",
              padding: "10px",
              width: "80%",
              borderRadius: "20px",
            }}
          >
            Logout
          </span>
        </div>
      </Drawer>
    </div>
  );
};

export default LeftDrawer;
