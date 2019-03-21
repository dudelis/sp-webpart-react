import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AadHttpClient, HttpClientResponse } from '@microsoft/sp-http';

//Reducer types to read the state types
import { ITaskState } from '../reducers/tasksReducer';
import { IRootState } from '../reducers/Store';

//Action types - constants
export enum TaskActionTypes {
    GET_TASKS = 'GET_TASKS'
}



//Types of every action to be returned
export interface ITaskGetTasksAction {
    type: TaskActionTypes.GET_TASKS;
    payload: ITaskState;
  }

//Combine all Actions together
export type TaskActions = ITaskGetTasksAction;

//GET_TASKS
export const getTasks: ActionCreator<ThunkAction<Promise<any>, IRootState, null, ITaskGetTasksAction>> = () =>{
    return async (dispatch: Dispatch, getState) => {
        //do something here
        const state = getState();
        if (state.properties.context){
            // const client = await state.properties.context.getClient('https://api.k2.com/');
            // const tasks = await client.get(`${state.properties.k2url}/api/workflow/preview/tasks`, AadHttpClient.configurations.v1);
            // console.log(tasks);
        }

        //dispatch the results of what was done
        dispatch({
            type: TaskActionTypes.GET_TASKS,
            payload: {
                itemCount: 5,
                tasks: []
            }
        });
    };
};