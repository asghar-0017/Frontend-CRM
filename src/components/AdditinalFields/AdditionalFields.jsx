import React from 'react';
import { TextField, Grid, Button } from '@mui/material';
import SubmitButton from '../Submit Btn/Submit';

const AdditionalFields = ({ additionalFields, handleFieldChange, handleAddField, handleRemoveField }) => {
  return (
    <div>
      {additionalFields.map((field, index) => (
        <Grid container spacing={2} key={index} style={{ marginBottom: "10px" }}>
          <Grid item xs={4}>
            <TextField
              label="Key"
              variant="outlined"
              value={field.key}
              onChange={(e) => handleFieldChange(index, 'key', e.target.value)}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              label="Value"
              variant="outlined"
              value={field.value}
              onChange={(e) => handleFieldChange(index, 'value', e.target.value)}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={3} style={{ display: 'flex', alignItems: 'center' }}>
            <Button 
              variant="outlined" 
              color="error" 
              onClick={() => handleRemoveField(index)}
            >
              Remove
            </Button>
          </Grid>
        </Grid>
      ))}
      <SubmitButton handleSubmit={handleAddField} text={"Add Field"} />
    </div>
  );
};

export default AdditionalFields;
