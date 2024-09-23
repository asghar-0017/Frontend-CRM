import React, { useState } from 'react';
import { Drawer, Button, TextField, Typography } from '@mui/material';
import { IoMdClose } from 'react-icons/io';
import AdditionalFields from '../AdditinalFields/AdditionalFields'; 
import SubmitButton from '../Submit Btn/Submit';

const AssignTask = ({ open, onClose, onSave }) => {
  const [additionalFields, setAdditionalFields] = useState([]);
  const [staticFieldValues, setStaticFieldValues] = useState({
    name: '',
    address: '',
    email: '',
    phone: ''
  });

  const staticFields = [
    { id: 'name', label: 'Name' },
    { id: 'address', label: 'Address' },
    { id: 'email', label: 'Email' },
    { id: 'phone', label: 'Phone' }
  ];

  const handleAddField = () => {
    setAdditionalFields(prevFields => [
      ...prevFields,
      { key: '', value: '' }
    ]);
  };
  
  const handleRemoveField = (index) => {
    const newFields = additionalFields.filter((_, i) => i !== index);
    setAdditionalFields(newFields);
  };

  const handleFieldChange = (index, field, value) => {
    const updatedFields = [...additionalFields];
    updatedFields[index] = { ...updatedFields[index], [field]: value };
    setAdditionalFields(updatedFields);
  };

  const handleStaticFieldChange = (e) => {
    const { id, value } = e.target;
    setStaticFieldValues(prevValues => ({
      ...prevValues,
      [id]: value
    }));
  };

  const transformAdditionalFields = (fields) => {
    return fields.reduce((acc, field) => {
      acc[field.key] = field.value;
      return acc;
    }, {});
  };

  const getFormData = () => {
    return {
      ...staticFieldValues,
      ...transformAdditionalFields(additionalFields)
    };
  };

  const handleSave = () => {
      const formData = getFormData();
      onSave(formData);
      setAdditionalFields([]);
      setStaticFieldValues({
        name: '',
        address: '',
        email: '',
        phone: ''
      });
  };

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
        <Typography variant="h5" gutterBottom fontWeight="bold" style={{ marginBottom: "40px" }}>
          Assign Task
        </Typography>
        
        {staticFields.map(field => (
          <TextField
            key={field.id}
            id={field.id}
            label={field.label}
            rows={4}
            value={staticFieldValues[field.id] || ''}
            onChange={handleStaticFieldChange}
            fullWidth
            style={{ marginBottom: '10px' }}
          />
        ))}
        
        <div style={{ marginTop: 16 }}>
          <AdditionalFields
            additionalFields={additionalFields}
            handleFieldChange={handleFieldChange}
            handleAddField={handleAddField}
            handleRemoveField={handleRemoveField}
          />
        </div>
      
        <SubmitButton handleSubmit={handleSave} text={"Submit"}/>

      </div>
    </Drawer>
  );
};

export default AssignTask;
