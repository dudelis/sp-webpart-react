export interface IStoreState {
    selectedItems: any;
    tasks: any;
    controlsVisibility?: any;
}


export interface ITask {
    serialNumber: string;
    status: string;
    priority: number;
    formURL: string;
}

export interface ITaskResponse{
    itemCount: number;
    tasks: ITask[];
}


// {
//     "itemCount": 0,
//     "tasks": [
//       {
//         "serialNumber": "string",
//         "status": "Completed",
//         "taskStartDate": "2019-03-20T15:46:41.633Z",
//         "sleepUntil": "2019-03-20T15:46:41.633Z",
//         "priority": 0,
//         "formURL": "string",
//         "viewFlowURL": "string",
//         "workflowID": 0,
//         "workflowName": "string",
//         "workflowDisplayName": "string",
//         "workflowCategory": "string",
//         "workflowInstanceID": 0,
//         "workflowInstanceFolio": "string",
//         "activityInstanceID": 0,
//         "activityInstanceDestinationID": 0,
//         "activityName": "string",
//         "eventName": "string",
//         "eventDescription": "string",
//         "originator": {
//           "username": "string",
//           "fqn": "string",
//           "email": "string",
//           "manager": "string",
//           "displayName": "string"
//         },
//         "actions": {
//           "nonBatchableActions": [
//             "string"
//           ],
//           "batchableActions": [
//             "string"
//           ],
//           "systemActions": [
//             "string"
//           ]
//         },
//         "instruction": "string"
//       }
//     ]
//   }