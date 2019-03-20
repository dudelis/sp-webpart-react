import { Reducer } from "redux";

import { ITaskResponse } from "../types";
import { TaskActionTypes } from "../actions/TaskActions";

export interface ITaskState extends ITaskResponse {}

const initialTaskState: ITaskState = {
  itemCount: 0,
  tasks: []
};

export const taskReducer: Reducer<ITaskState, any> = (
  state = initialTaskState,
  action
) => {
  switch (action.type) {
    case TaskActionTypes.GET_TASKS:
      return {
        ...state,
        ...action
      };
    default:
      return state;
  }
};
