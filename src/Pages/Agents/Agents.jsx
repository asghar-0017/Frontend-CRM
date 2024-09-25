import React from "react";
import Form from "../../components/Forms/Form";

const Agents = () => {
  const inputFields = [
    { id: "firstName", label: "First Name" },
    { id: "lastName", label: "Last Name" },
    { id: "email", label: "Email" },
    { id: "phone", label: "Phone" },
    { id: "password", label: "Password", type: "password" },
  ];   
    
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Form 
        listName="Agents"
        addName="Agent"
        chat={true}
        inputFields={inputFields}
        endpointCSV={"create-agent-csv"}
        add={true}
        tabs={true}
        search={"Agent Id"}
        task={true}
        apiEndpoint="create-agent"
        apiEndpointGet="get-agent"
        customId={"agentId"}
        apiEndpointShowData={"get-agent"}
        apiEndpointDeleteData={"delete-agent"}
        apiEndpointUpdateData={"update-agent"}
        apiEndpointassignTask={"assign-task"}
        staus={true}
      />
    </div>
  );
};

export default Agents;
