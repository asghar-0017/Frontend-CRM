import React from "react";
import Form from "../../components/Forms/Form";

const Leads = () => {
  const inputFields = [
    { id: "leadName", label: "Lead Name" },
    { id: "address", label: "Address" },
    { id: "email", label: "Email" },
    { id: "phone", label: "Phone" },
    { id: "website", label: "Website" },
  ];
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Form
        listName="Lead"
        addName="Lead"
        endpointCSV={"upload-csv"}
        inputFields={inputFields}
        apiEndpoint="create-lead"
        apiEndpointGet="get-all-lead"
        setLead={true}
        add={true}
        customId={"leadId"}
        tabs={true}
        feedback={true}
        isDelete={false}
        apiEndpointShowData={"get-lead"}
        apiEndpointDeleteData={"delete-lead"}
        apiEndpointUpdateData={"update-lead"}
        isAdditional={true}
      />
    </div>
  );
};

export default Leads;
