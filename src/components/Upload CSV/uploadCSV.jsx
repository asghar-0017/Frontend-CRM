import React, { useState } from "react";
import { Button, Box, Typography, FormControl, FormHelperText } from "@mui/material";
import { Dropzone, FileMosaic } from "@files-ui/react";
import { uploadFile } from "../../config/Api Services/apiServices";
import Swal from "sweetalert2";
import { useTask } from "../../Context/context";
import { useParams } from "react-router-dom";
import { emitEvent, initializeSocket } from "../../Socket/Socket";

const UploadFile = ({endpointCSV, close}) => {
  initializeSocket();

  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");
  const {setTaskEndPoint } = useTask(); 
  const {id} = useParams();

  const updateFiles = (incomingFiles) => {
    const validExtensions = [".csv", ".xls", ".xlsx", ".exe"];
    const filteredFiles = incomingFiles.filter((file) => {
      const fileExtension = file.name.split(".").pop();
      return validExtensions.includes(`.${fileExtension}`);
    });

    setFiles(filteredFiles);

    if (incomingFiles.length !== filteredFiles.length) {
      setError("Some files are invalid. Only CSV, Excel, and EXE files are allowed.");
    } else {
      setError("");
    }
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "No file selected",
        text: "Please select a file to upload.",
      });
      return;
    }
    try {        
        const response = await uploadFile(endpointCSV, files[0].file, token, id);
        emitEvent('send_message', response.data);        

      Swal.fire({
        icon: "success",
        title: "Uploaded",
        text: "Files uploaded successfully.",
      });
      setFiles([]);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
    finally{
      setTaskEndPoint(false)
      close()
    }
  };

  return (
    <Box sx={{ padding: "20px", width: "100%", maxWidth: "600px", mx: "auto" }}>
      <Typography variant="h6" gutterBottom>
        Upload File
      </Typography>
      <FormControl fullWidth error={!!error} sx={{ mb: 2 }}>
        <Dropzone
          onChange={updateFiles}
          value={files}
          accept=".csv, .xls, .xlsx, .exe"
        >
          {files.map((file, index) => (
            <FileMosaic key={index} {...file} />
          ))}
        </Dropzone>
        {error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={handleUpload}
        disabled={files.length === 0}
        fullWidth
      >
        Upload File
      </Button>
    </Box>
  );
};

export default UploadFile;
