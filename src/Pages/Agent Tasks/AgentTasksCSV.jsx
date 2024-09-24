import React from "react";
import Form from "../../components/Forms/Form";

const ShowAgentTasks = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Form
        listName="Tasks"
        apiEndpointGet={"get-assign-task-taskNo"}
        customId={"leadId"}
        apiEndpointShowData={"get-assign-task"}
        apiEndpointDeleteData={"delete-assign-task"}
        apiEndpointUpdateData={"update-assign-task"}
        add={false}
        endpointCSV={"upload-task"}
        isMarkAsDone={true}
        // CRUD={false}
        isDelete={false}
        search={"Task Id"}
        csvData={true}
      />
    </div>
  );
};

export default ShowAgentTasks;


