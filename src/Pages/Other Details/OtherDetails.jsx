import React from "react";
import Form from "../../components/Forms/Form";

const OtherDetails = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Form
        listName="Others"
        apiEndpointGet="get-other"
        customId={"leadId"}
        apiEndpointShowData={"get-other"}
        apiEndpointDeleteData={"delete-other"}
        apiEndpointUpdateData={"update-followUp-other"}
      />
    </div>
  );
};

export default OtherDetails;
