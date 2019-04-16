import { Reducer } from "redux";

import { ITaskState } from "../types";
import { TaskActions, TaskActionTypes } from "../actions/TaskActions";

const initialTaskState: ITaskState = {
  itemCount: 0,
  tasks: []
};

export const taskReducer: Reducer<ITaskState, TaskActions> = (
  state = initialTaskState,
  action
) => {
  switch (action.type) {
    case TaskActionTypes.GET_TASKS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
