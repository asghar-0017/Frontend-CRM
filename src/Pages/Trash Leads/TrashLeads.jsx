import React from "react";
import Form from "../../components/Forms/Form";

const TrashLeads = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Form
        listName="Trash Leads"
        apiEndpointGet={"get-lead-trash"}
        customId={"leadId"}
        // showTimestamps={true} 
        apiEndpointShowData={"get-lead-trash"}
        // apiEndpointDeleteData={"delete-assign-task"}
        // apiEndpointUpdateData={"update-assign-task"}
        add={false}
        // endpointCSV={"upload-task"}
        CRUD={false}
      />
    </div>
  );
};

export default TrashLeads;
