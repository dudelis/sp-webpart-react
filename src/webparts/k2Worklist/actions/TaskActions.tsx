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
  SET_PAGE = "SET_PAGE"
}

//DEBUG
import { testTasks } from "./TestJson";

//Types of every action to be returned
export interface ITaskGetTasksAction {
  type: TaskActionTypes.GET_TASKS;
  payload: any;
}
export interface ITaskSetPageAction {
  type: TaskActionTypes.SET_PAGE;
  payload: any;
}

//Combine all Actions together
export type TaskActions = ITaskGetTasksAction | ITaskSetPageAction;

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
    const rows = state.properties.rows;
    console.log("getTasks was called");
    //Commented for development purposes
    // if (state.properties.context){
    //     const client = await state.properties.context.getClient('https://api.k2.com/');
    //     const tasksResponse = await client.get(`${state.properties.k2url}/api/workflow/preview/tasks`, AadHttpClient.configurations.v1);
    //     tasks = await tasksResponse.json();
    // }
    //Calculate pages etc if rows > 0
    let totalPages = 1;
    let currentPageTasks = state.tasks.tasks;

    if (rows > 0) {
      console.log(rows);
      totalPages = Math.ceil(testTasks.tasks.length / rows);
      currentPageTasks = testTasks.tasks.slice(0, rows + 1);
    }

    //return dispatch the results of what was done
    return dispatch({
      type: TaskActionTypes.GET_TASKS,
      payload: {
        itemCount: testTasks.itemCount,
        tasks: testTasks.tasks,
        currentPageTasks,
        totalPages: totalPages > 1 ? totalPages : 1
      }
    });
  };
};

export const setPage: ActionCreator<
  ThunkAction<Promise<ITaskSetPageAction>, IRootState, null, ITaskSetPageAction>
> = (pageNumber: number) => {
  return async (
    dispatch: Dispatch<ITaskSetPageAction>,
    getState
  ): Promise<ITaskSetPageAction> => {
    const state = getState();
    let currentPage = pageNumber ? pageNumber : state.tasks.currentPage;
    const startIndex = (currentPage - 1) * state.properties.rows;
    const endIndex = startIndex + state.properties.rows + 1;
    let currentPageTasks = _.slice(state.tasks.tasks, startIndex, endIndex);
    debugger;
    return dispatch({
      type: TaskActionTypes.SET_PAGE,
      payload: {
        currentPage,
        currentPageTasks
      }
    });
  };
};
