import React from "react";
import Form from "../../components/Forms/Form";

const AllTasks = () => {

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Form
        listName="All Tasks"
        apiEndpointGet={"get-assign-task"}
        customId={"leadId"}
        search={"Task Id"}
        apiEndpointShowData={"get-assign-task"}
        apiEndpointDeleteData={"delete-assign-task"}
        apiEndpointUpdateData={"update-assign-task"}
      />
    </div>
  );
};

export default AllTasks;
