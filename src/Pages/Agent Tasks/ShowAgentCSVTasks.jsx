import React from 'react'
import Form from "../../components/Forms/Form";

const ShowAgentCSVTasks = () => {
  return (
    <div>
       <Form
        listName="Agent Tasks"
        apiEndpointGet={"get-assign-task-taskNo"}
        customId={"leadId"}
        apiEndpointShowData={"get-assign-task"}
        apiEndpointDeleteData={"delete-assign-task"}
        apiEndpointUpdateData={"update-assign-task"}
        add={false}
        search={"Lead Id"}
        endpointCSV={"upload-task"}
        addTask={true}
        csvData={true}
        isDeleteTask={true}
        deleteAssignTask={"delete-assign-tasks"}
      />
    </div>
  )
}

export default ShowAgentCSVTasks
