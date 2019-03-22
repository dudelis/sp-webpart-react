import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AadHttpClient, HttpClientResponse } from '@microsoft/sp-http';


//Reducer types to read the state types
import { ITaskState } from '../reducers/tasksReducer';
import { IRootState } from '../reducers/Store';
import { ITaskResponse } from '../types';

//Action types - constants
export enum TaskActionTypes {
    GET_TASKS = 'GET_TASKS'
}

//DEBUG 
import {testTasks}  from './TestJson';


//Types of every action to be returned
export interface ITaskGetTasksAction {
    type: TaskActionTypes.GET_TASKS;
    payload: ITaskState;
  }

//Combine all Actions together
export type TaskActions = ITaskGetTasksAction;


//: ActionCreator<ThunkAction<Promise<any>, ITaskState, null, ITaskGetTasksAction>>
export const getTasks : ActionCreator<ThunkAction<Promise<ITaskGetTasksAction>, IRootState, null, ITaskGetTasksAction>> = () => {
    return async (dispatch: Dispatch<ITaskGetTasksAction>, getState):Promise<ITaskGetTasksAction> => {
        //do something here
        const state = getState();
        let tasks : ITaskState = {
            itemCount: 0,
            tasks: []
        };
        tasks = testTasks;
        console.log('getTasks was called');
        //Commented for development purposes
        // if (state.properties.context){
        //     const client = await state.properties.context.getClient('https://api.k2.com/');
        //     const tasksResponse = await client.get(`${state.properties.k2url}/api/workflow/preview/tasks`, AadHttpClient.configurations.v1);
        //     tasks = await tasksResponse.json();
        // }

        //return dispatch the results of what was done
        return dispatch({
            type: TaskActionTypes.GET_TASKS,
            payload: tasks
        });
    };
};