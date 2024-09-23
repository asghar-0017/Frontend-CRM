import React from "react";
import Form from "../../components/Forms/Form";

const OtherDetails = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Form
        listName="Others"
        apiEndpointGet="get-all-other"
        customId={"leadId"}
        showTimestamps={true}
        apiEndpointShowData={"get-all-other"}
        apiEndpointDeleteData={"delete-other"}
        // apiEndpointUpdateData={"update-other"}
        apiEndpointUpdateData={"update-followUp-other"}
        isDelete={false}
      />
    </div>
  );
};

export default OtherDetails;
