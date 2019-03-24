export interface IStoreState {
    selectedItems: any;
    tasks: any;
    controlsVisibility?: any;
}

export interface IUser{
    username: string;
    fqn: string;
    email: string;
    manager: string;
    displayName: string;
}

export interface IActions {
    nonBatchableActions: string[];
    batchableActions: string[];
    systemActions: string[];
}

export interface ITask {
    status: string;
    taskStartDate: string;
    priority: number;
    serialNumber: string;
    formURL: string;
    viewFlowURL: string;
    workflowID: number;
    workflowName: string;
    workflowDisplayName: string;
    workflowCategory: string;
    workflowInstanceID: number;
    workflowInstanceFolio: string;
    activityInstanceID: number;
    activityInstanceDestinationID: number;
    activityName: string;
    eventName: string;
    eventDescription: string;
    originator: IUser;
    actions: IActions;
    instruction: string;
}

export interface ITaskState{
    itemCount: number;
    tasks: ITask[];
}