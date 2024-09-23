import React from "react";
import Form from "../../components/Forms/Form";

const FollowUp = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Form
        listName="Follow Up"
        apiEndpointGet="get-all-followUp"
        customId={"leadId"}
        showTimestamps={false}
        apiEndpointShowData={"get-followUp"}
        apiEndpointDeleteData={"delete-followUp"}
        // apiEndpointUpdateData={"update-followUp"}
        apiEndpointUpdateData={"update-followUp-other"}
        isDelete={false}
      />
    </div>
  );
};

export default FollowUp;
