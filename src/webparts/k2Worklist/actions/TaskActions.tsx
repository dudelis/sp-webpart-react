import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

//Reducer types to read the state types
import { ITaskState } from '../reducers/tasksReducer';

//Action types - constants
export enum TaskActionTypes {
    GET_TASKS = 'GET_TASKS'
}



//Types of every action to be returned
export interface ITaskGetTasksAction {
    type: TaskActionTypes.GET_TASKS;
    characters: ITaskState;
  }

//Combine all Actions together
export type TaskActions = ITaskGetTasksAction;

//GET_TASKS
export const getTasks: ActionCreator<ThunkAction<Promise<any>, ITaskState, null, ITaskGetTasksAction>> = () =>{
    return async (dispatch: Dispatch) => {
        //do something here


        //dispatch the results of what was done
        dispatch({
            type: TaskActionTypes.GET_TASKS,
            payload: {} //the object of tasks to be returned
        });
    };
};