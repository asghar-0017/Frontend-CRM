import React from 'react';
import { Drawer, Typography } from '@mui/material';
import { IoMdClose } from 'react-icons/io';
import UploadFile from '../Upload CSV/uploadCSV';

const AssignTaskCSV = ({ open, onClose, endpointCSV }) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: {
            xs: "100%",
            sm: 400,
            md: 450,
            lg: 500,
          },
        },
      }}
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
        <Typography
          variant="h5"
          gutterBottom
          fontWeight="bold"
          style={{ marginBottom: "40px" }}
        >
          Upload Tasks
        </Typography>
        <UploadFile endpointCSV={endpointCSV} close={onClose} />
      </div>
    </Drawer>
  );
};

export default AssignTaskCSV;
