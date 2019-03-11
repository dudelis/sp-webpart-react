import {IUserItem} from './IUserItem';
import {ITaskActions} from './ITaskActions';

export interface ITaskItem{
    serialNumber: string;
    status: string;
    taskStartDate: string;
    priority: number;
    formURL: string;
    viewFlowURL: string;
    workflowID: number;
    workflowName: string;
    workflowDisplayName: string;
    workflowCategory: string,
	workflowInstanceID: number,
	workflowInstanceFolio: string;
    activityInstanceID: number;
	activityInstanceDestinationID: number;
	activityName: string;
	eventName: string;
	eventDescription: string;
    originator: IUserItem[];
    actions: ITaskActions
}