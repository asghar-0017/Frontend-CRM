import React, { useState } from 'react';
import {
  TextField,
  IconButton,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AdditionalFields from '../AdditinalFields/AdditionalFields';

const numberPattern = /^[0-9]+$/; 
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
const websitePattern = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,6}(\/[a-z0-9-]*)*\/?$/i; 

const FormFields = ({
  inputFields,
  formValues,
  showPassword,
  handleInputChange,
  handleFeedbackChange,
  handleFollowUpChange,
  followUpDetails,
  setShowPassword,
  showCustomerFeedback,
  feedback,
  handleOtherChange,
  otherDetails,
  additionalFields,
  handleAddField,
  handleFieldChange,
  isAdditional,
  handleRemoveField
}) => {
  const [validationErrors, setValidationErrors] = useState({});

  const validateField = (id, value) => {
    let error = '';

    if (id === 'phone' && !numberPattern.test(value)) {
      error = 'Please enter a valid phone number.';
    } else if (id === 'email' && !emailPattern.test(value)) {
      error = 'Please enter a valid email address.';
    } else if (id === 'website' && !websitePattern.test(value)) {
      error = 'Please enter a valid URL.';
    }

    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [id]: error
    }));
  };

  const handleInputChangeWithValidation = (e) => {
    const { id, value } = e.target;
    handleInputChange(e);
    validateField(id, value);
  };

  return (
    <form>
      {inputFields.map((field) => (
        <div style={{ marginBottom: "10px", paddingTop: "10px" }} key={field.id}>
          <TextField
            id={field.id}
            label={field.label}
            type={field.type === "password" && !showPassword ? "password" : "text"}
            variant="outlined"
            value={formValues[field.id] || ""}
            onChange={handleInputChangeWithValidation}
            fullWidth
            size="small"
            InputProps={field.type === "password" ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={(e) => e.preventDefault()}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            } : null}
            error={!!validationErrors[field.id]}
            helperText={validationErrors[field.id]}
          />
        </div>
      ))}
      {showCustomerFeedback && (
        <FormControl fullWidth size="small" sx={{ marginBottom: 2 }}>
          <InputLabel id="feedback-label">Customer Feedback</InputLabel>
          <Select
            labelId="feedback-label"
            id="CustomerFeedBack"
            value={feedback}
            onChange={handleFeedbackChange}
            label="Customer Feedback"
          >
            <MenuItem value="onGoing">Ongoing</MenuItem>
            <MenuItem value="hangUp">Hangup</MenuItem>
            <MenuItem value="voiceMail">Voicemail</MenuItem>
            <MenuItem value="followUp">Follow Up</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>
      )}
      {feedback === "followUp" && (
        <TextField
          id="followUpDetail"
          label="Follow Up Details"
          variant="outlined"
          value={followUpDetails}
          onChange={handleFollowUpChange}
          fullWidth
          size="small"
          sx={{ marginBottom: 2 }}
        />
      )}
      {feedback === "other" && (
        <TextField
          id="otherDetail"
          label="Other Details"
          variant="outlined"
          value={otherDetails}
          onChange={handleOtherChange}
          fullWidth
          size="small"
          sx={{ marginBottom: 2 }}
        />
      )}
      {
        isAdditional && (
          <AdditionalFields
            additionalFields={additionalFields}
            handleFieldChange={handleFieldChange}
            handleAddField={handleAddField}
            handleRemoveField={handleRemoveField}
          />
        )
      }
    </form>
  );
};

export default FormFields;
