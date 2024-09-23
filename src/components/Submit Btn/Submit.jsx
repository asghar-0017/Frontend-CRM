import React from "react";
import Button from "@mui/material/Button";

const SubmitButton = ({ handleSubmit, text }) => {
  return (
    <div style={{ padding: "10px", fontSize: "1rem", width: "100%", textAlign: "left" }}>
      <Button
        variant="contained"
        style={{ backgroundColor: "#1640D6" }}
        className="form-btn addNew"
        onClick={handleSubmit}
      >
        {text}
      </Button>
    </div>
  );
};

export default SubmitButton;
