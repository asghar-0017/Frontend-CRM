import React, { useState, useEffect } from "react";
import {
  Drawer,
  Button,
  Typography,
  TextField,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Divider,
} from "@mui/material";
import Loader from "../Loader/Loader";
import { IoMdClose } from "react-icons/io";
import keyMapping from "../Mapping/keyMapping";
import { formatCountdown } from "antd/es/statistic/utils";

const predefinedFeedbackOptions = [
  { value: "onGoing", label: "Ongoing" },
  { value: "hangUp", label: "Hang Up" },
  { value: "voiceMail", label: "Voice Mail" },
  { value: "followUp", label: "Follow Up" },
  { value: "other", label: "Other" },
];

// Utility function to check if feedback is predefined
const isPredefinedFeedback = (value) => {
  return ["onGoing", "hangUp", "voiceMail"].includes(value);
};

const EditData = ({ open, onClose, data, loading, onSave }) => {
  const [formData, setFormData] = useState(data || {});
  const [feedbackOption, setFeedbackOption] = useState(formData.CustomerFeedBack || "");

  useEffect(() => {
    if (data) {
      setFormData(data);
      setFeedbackOption(data.CustomerFeedBack || "");
    }
  }, [data]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      if (name === "CustomerFeedBack") {
        handleFeedbackChange(value, updatedData);
      }
      return updatedData;
    });
  };

  const handleFeedbackChange = (value, updatedData) => {
    // if (value === "followUp" || value === "other") {
    //   updatedData.followUpDetail = "";
    //   updatedData.otherDetail = "";
    // }
    setFeedbackOption(value);
    setFormData(updatedData);
  };

  const handleSave = () => {
    onSave(formData);
  };
  

  

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
        <Typography variant="h5" gutterBottom fontWeight="bold">
          Edit Record
        </Typography>
        {loading ? (
          <div style={{ textAlign: "center" }}>
            <Loader />
          </div>
        ) : (
          <div>
            {data ? (
              <Grid container spacing={2}>
                {Object.entries(data).map(([key, value]) =>
                  key !== "created_at" &&
                  key !== "updated_at" &&
                  key !== "role" &&
                  key !== "agentId" &&
                  key !== "taskId" &&
                  key !== "fullName" &&
                  key !== "id" ? (
                    key === "CustomerFeedBack" ? (
                      <Grid item xs={12} key={key}>
                        <FormControl fullWidth margin="normal">
                          <InputLabel>{keyMapping[key]}</InputLabel>
                          <Select
                            name={key}
                            value={feedbackOption}
                            onChange={(e) => handleChange(e)}
                            label={keyMapping[key]}
                          >
                            {predefinedFeedbackOptions.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                    ) : (
                      // (feedbackOption !== "followUp" && feedbackOption !== "other") && (
                        <Grid item xs={12} key={key}>
                        <TextField
                          label={keyMapping[key] || key}
                          name={key}
                          value={formData[key] || ""}
                          onChange={handleChange}
                          fullWidth
                          margin="normal"
                          // Disable if the key is 'followUpDetail' or 'otherDetail' and feedbackOption is not 'followUp' or 'other'
                          disabled={key === "FollowUpDetail" && feedbackOption !== "followUp" || key === "OtherDetail" && feedbackOption !== "other" || key == "taskNo" || key == "status" || key == "leadId"}
                        />
                      </Grid>
                      
                      // )
                    )
                  ) : null
                )}
                
                {console.log(formData.CustomerFeedBack)
                }


{/* {formData.CustomerFeedBack !== "followUp" &&
                 <>
                    {(formData.CustomerFeedBack === feedbackOption) && (feedbackOption === "followUp" || formData.CustomerFeedBack != feedbackOption) && (
                      <Grid item xs={12}>
                        <TextField
                          label="Follow Up Details"
                          name="FollowUpDetail"
                          value={formData.FollowUpDetail || ""}
                          onChange={handleChange}
                          fullWidth
                          margin="normal"
                        />
                      </Grid>
                    )}
                    </>
                  }
                  { formData.CustomerFeedBack !== "other" && 
                  <>
                    {(formData.CustomerFeedBack === feedbackOption) && (feedbackOption === "other" || formData.CustomerFeedBack != feedbackOption) && (
                      <Grid item xs={12}>
                        <TextField
                          label="Other Details"
                          name="OtherDetail"
                          value={formData.OtherDetail || ""}
                          onChange={handleChange}
                          fullWidth
                          margin="normal"
                        />
                      </Grid>
                    )}</>
                  } */}

                 {/* {formData.CustomerFeedBack !== "followUp" && formData.CustomerFeedBack !== "other" && */}
                  <>
                    {(formData.CustomerFeedBack === feedbackOption) && (feedbackOption === "followUp" || formData.CustomerFeedBack != feedbackOption) && (
                      <Grid item xs={12}>
                        <TextField
                          label="Follow Up Details"
                          name="FollowUpDetail"
                          value={formData.FollowUpDetail || ""}
                          onChange={handleChange}
                          fullWidth
                          margin="normal"
                        />
                      </Grid>
                    )}
                    {(formData.CustomerFeedBack === feedbackOption) && (feedbackOption === "other" || formData.CustomerFeedBack != feedbackOption) && (
                      <Grid item xs={12}>
                        <TextField
                          label="Other Details"
                          name="OtherDetail"
                          value={formData.OtherDetail || ""}
                          onChange={handleChange}
                          fullWidth
                          margin="normal"
                        />
                      </Grid>
                    )}
                  </>
              </Grid>
            ) : (
              <Typography>No record available.</Typography>
            )}
            <Divider style={{ margin: "20px 0" }} />
            <Button
              onClick={handleSave}
              variant="contained"
              color="primary"
              style={{ marginTop: "20px", marginRight: "10px" }}
            >
              Save
            </Button>
          </div>
        )}
      </div>
    </Drawer>
  );
};

export default EditData;
