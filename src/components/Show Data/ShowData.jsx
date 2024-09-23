import React from "react";
import { Drawer, Button, Typography, Divider } from "@mui/material";
import Loader from "../Loader/Loader";
import { IoMdClose } from "react-icons/io";
import keyMapping from "../Mapping/keyMapping";


const ShowData = ({ open, onClose, data, loading }) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { width: {
        xs: "100%",
        sm: 400,
        md: 450,
        lg: 500,
      }, } }}
    >
      <div style={{ padding: "20px", width: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "100%",
            paddingBottom: "20px",
            cursor: "pointer",
          }}
        >
          <IoMdClose size={30} color="#1640D6" onClick={onClose} />
        </div>
        <Typography variant="h5" gutterBottom fontWeight="bold">
          Details
        </Typography>
        {loading ? (
          <div style={{ textAlign: 'center' }}>
            <Loader />
            <Typography><Loader /></Typography>
          </div>
        ) : (
          <div>
            {data ? (
              Object.entries(data).map(([key, value]) => (
                <div key={key} style={{ marginBottom: "10px" }}>
                  <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                  <Typography variant="subtitle1" component="div" fontWeight="bold">
                  {keyMapping[key] || key}: &nbsp;
                  </Typography>
                  <Typography variant="body1" component="div">
                    {value}
                  </Typography>
                  </div>
                  <Divider style={{ margin: "10px 0" }} />
                </div>
              ))
            ) : (
              <Typography>No record available.</Typography>
            )}
          </div>
        )}
      </div>
    </Drawer>
  );
};

export default ShowData;
