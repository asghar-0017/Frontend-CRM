import React from "react";
import Form from "../../components/Forms/Form";

const AllTasks = () => {

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Form
        listName="Remaining Tasks"
        apiEndpointGet={"get-uploaded-Data"}
        customId={"leadId"}
        search={"Lead Id"}
        // apiEndpointShowData={"get-assign-task"}
        // apiEndpointDeleteData={"delete-assign-task"}
        // apiEndpointUpdateData={"update-assign-task"}
        isDeleteTask={true}
        deleteAssignTask={"delete-remaining-data"}
      />
    </div>
  );
};

export default AllTasks;
