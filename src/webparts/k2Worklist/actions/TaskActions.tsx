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
    payload: ITaskState;
  }

//Combine all Actions together
export type TaskActions = ITaskGetTasksAction;

//GET_TASKS
export const getTasks: ActionCreator<ThunkAction<Promise<any>, ITaskState, null, ITaskGetTasksAction>> = () =>{
    return async (dispatch: Dispatch, getState) => {
        //do something here
        const state = getState();
        console.log(state);
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