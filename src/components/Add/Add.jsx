import React, { useState } from "react";
import { Button, Box, Drawer, Divider } from "@mui/material";
import DrawerHeader from "../Drawer Header/DrawerHeader";
import FormFields from "../Form Fields/FormFields";
import SubmitButton from "../Submit Btn/Submit";
import { postData } from "../../config/Api Services/apiServices";
import Swal from "sweetalert2";
import Tabs from "../Tabs/Tabs";
import UploadCSV from "../Upload CSV/uploadCSV";

const Add = ({
  btn,
  listName,
  inputFields,
  apiEndpoint,
  setLead,
  tabs,
  endpointCSV,
  showCustomerFeedback,
  isAdditional
}) => {
  const [state, setState] = useState({ right: false });
  const [formValues, setFormValues] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [followUpDetails, setFollowUpDetails] = useState("");
  const [otherDetails, setOtherDetails] = useState("");
  const [additionalFields, setAdditionalFields] = useState([]);
  const token = localStorage.getItem("token");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleFeedbackChange = (e) => {
    const value = e.target.value;
    setFeedback(value);
    if (value !== "followUp") {
      setFollowUpDetails("");
    }
    if (value !== "other") {
      setOtherDetails("");
    }
  };
  
  const handleFollowUpChange = (e) => {
    setFollowUpDetails(e.target.value);
  };
  
  const handleOtherChange = (e) => {
    setOtherDetails(e.target.value);
  };

  const handleFieldChange = (index, field, value) => {
    const updatedFields = [...additionalFields];
    updatedFields[index] = { ...updatedFields[index], [field]: value };
    setAdditionalFields(updatedFields);
  };

  const handleAddField = () => {
    setAdditionalFields(prevFields => [
      ...prevFields,
      { key: "", value: "" }
    ]);
  };

  const handleRemoveField = (index) => {
    const newFields = additionalFields.filter((_, i) => i !== index);
    setAdditionalFields(newFields);
  };

  const transformAdditionalFields = (fields) => {
    return fields.reduce((acc, field) => {
      acc[field.key] = field.value;
      return acc;
    }, {});
  };

  const handleSubmit = async () => {
    const additionalFieldsObject = transformAdditionalFields(additionalFields);

    const dataToSubmit = {
      ...formValues,
      CustomerFeedBack: feedback || "",
      ...(feedback === "followUp" && { followUpDetail: followUpDetails }),
      ...(feedback === "other" && { otherDetail: otherDetails }),
      ...additionalFieldsObject
    };

    try {
      console.log("Data to submit:", dataToSubmit); 
      await postData(apiEndpoint, dataToSubmit, token);

      setState({ ...state, right: false });
      setFormValues({});
      setFeedback("");
      setFollowUpDetails("");
      setOtherDetails("");
      setAdditionalFields([]);
      Swal.fire({
        icon: "success",
        title: "Updated",
        text: `${listName} created successfully.`,
      });
    } catch (error) {
      console.error("Error submitting data:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div>
      <Button onClick={toggleDrawer("right", true)}>{btn}</Button>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        <DrawerHeader listName={listName} />
        {tabs ? (
          <Tabs
            item1={
              <Box
                sx={{
                  padding: "20px",
                  width: {
                    xs: "100%",
                    sm: 400,
                    md: 450,
                    lg: 500,
                  },
                }}
                role="presentation"
              >
                <Divider />
                <FormFields
                  inputFields={inputFields}
                  formValues={formValues}
                  showPassword={showPassword}
                  handleInputChange={handleInputChange}
                  handleFeedbackChange={handleFeedbackChange}
                  handleFollowUpChange={handleFollowUpChange}
                  showCustomerFeedback={showCustomerFeedback}
                  followUpDetails={followUpDetails}
                  handleOtherChange={handleOtherChange}
                  otherDetails={otherDetails}
                  setShowPassword={setShowPassword}
                  feedback={feedback}
                  additionalFields={additionalFields}
                  handleAddField={handleAddField}
                  handleFieldChange={handleFieldChange}
                  isAdditional={isAdditional}
                  handleRemoveField={handleRemoveField}
                />

                <SubmitButton handleSubmit={handleSubmit} text={"Submit"}/>
              </Box>
            }
            item2={<UploadCSV endpointCSV={endpointCSV}/>}
          />
        ) : (
          <Box
            sx={{
              padding: "20px",
              width: {
                xs: "100%",
                sm: 400,
                md: 450,
                lg: 500,
              },
            }}
            role="presentation"
          >
            <Divider />
            <FormFields
              inputFields={inputFields}
              formValues={formValues}
              showPassword={showPassword}
              handleInputChange={handleInputChange}
              handleFeedbackChange={handleFeedbackChange}
              handleFollowUpChange={handleFollowUpChange}
              showCustomerFeedback={showCustomerFeedback}
              followUpDetails={followUpDetails}
              handleOtherChange={handleOtherChange}
              otherDetails={otherDetails}
              setShowPassword={setShowPassword}
              feedback={feedback}
              additionalFields={additionalFields}
              handleAddField={handleAddField}
              handleFieldChange={handleFieldChange}
              isAdditional={isAdditional}
            />

            <SubmitButton handleSubmit={handleSubmit} text={"Submit"}/>
          </Box>
        )}
      </Drawer>
    </div>
  );
};

export default Add;
