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
export interface ITaskSetPageAction {
  type: TaskActionTypes.SET_PAGE;
  payload: any;
}
export interface ITaskSetFilterAction {
  type: TaskActionTypes.SET_FILTER;
  payload: any;
}

//Combine all Actions together
export type TaskActions =
  | ITaskGetTasksAction
  | ITaskSetPageAction
  | ITaskSetFilterAction;

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
    //1. Getting the tasks
    //2. Calculating paging
    //3. Showing filter

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
//1. 
export const setFilter: ActionCreator<
ThunkAction<Promise<TaskActions>, IRootState, null, TaskActions>> = (searchString: string) => {
  return async (
    dispatch: Dispatch<TaskActions>,
    getState
  ): Promise<TaskActions> => {
    const state = getState();
    const searchedItems = state.tasks.tasks.filter(item =>{
      return item.activityName.toLowerCase().indexOf(searchString.toLowerCase()) >=-1 ||
      item.workflowInstanceFolio.toLowerCase().indexOf(searchString.toLowerCase()) >=-1 ||
      item.workflowDisplayName.toLowerCase().indexOf(searchString.toLowerCase()) >= -1;
    })
    

    return dispatch({
      type: TaskActionTypes.SET_FILTER,
      payload: {
        searchString,
        currentPageTasks: searchedItems
      }
    });
  };
};
