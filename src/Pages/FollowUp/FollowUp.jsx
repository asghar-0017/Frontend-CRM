import React from "react";
import Form from "../../components/Forms/Form";

const FollowUp = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Form
        listName="Follow Up"
        apiEndpointGet="get-followUp"
        customId={"leadId"}
        apiEndpointShowData={"get-followUp"}
        apiEndpointDeleteData={"delete-followUp"}
        apiEndpointUpdateData={"update-followUp-other"}
      />
    </div>
  );
};

export default FollowUp;
