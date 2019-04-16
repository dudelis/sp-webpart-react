import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import * as _ from "lodash";
import { AadHttpClient, HttpClientResponse } from "@microsoft/sp-http";

//Reducer types to read the state types
import { IRootState } from "../store";
import { ITaskState } from "../types";

//Action types - constants
export enum TaskActionTypes {
  GET_TASKS = "GET_TASKS",
  SET_PAGE = "SET_PAGE",
  SET_FILTER = "SET_FILTER"
}

//DEBUG
import { testTasks } from "./TestJson";

//Types of every action to be returned
export interface ITaskGetTasksAction {
  type: TaskActionTypes.GET_TASKS;
  payload: any;
}

//Combine all Actions together
export type TaskActions =
  | ITaskGetTasksAction;

//: ActionCreator<ThunkAction<Promise<any>, ITaskState, null, ITaskGetTasksAction>>
export const getTasks: ActionCreator<
  ThunkAction<
    Promise<ITaskGetTasksAction>,
    IRootState,
    null,
    ITaskGetTasksAction
  >
> = () => {
  return async (
    dispatch: Dispatch<ITaskGetTasksAction>,
    getState
  ): Promise<ITaskGetTasksAction> => {
    //do something here
    const state = getState();
    console.log("getTasks was called");
    //Commented for development purposes
    // if (state.properties.context){
    //     const client = await state.properties.context.getClient('https://api.k2.com/');
    //     const tasksResponse = await client.get(`${state.properties.k2url}/api/workflow/preview/tasks`, AadHttpClient.configurations.v1);
    //     tasks = await tasksResponse.json();
    // }
    //Calculate pages etc if rows > 0

    //return dispatch the results of what was done
    return dispatch({
      type: TaskActionTypes.GET_TASKS,
      payload: {
        itemCount: testTasks.itemCount,
        tasks: testTasks.tasks
      }
    });
  };
};
