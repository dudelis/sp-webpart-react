import { Reducer } from "redux";

import { ITaskState } from "../types";
import { TaskActions, TaskActionTypes } from "../actions/TaskActions";

const initialTaskState: ITaskState = {
  itemCount: 0,
  tasks: [],
  totalPages: 1,
  currentPage: 1,
  currentPageTasks: [],
  showSearchbox: false,
  searchString: null
};

export const taskReducer: Reducer<ITaskState, TaskActions> = (
  state = initialTaskState,
  action
) => {
  switch (action.type) {
    case TaskActionTypes.GET_TASKS:
      return {
        ...state,
        ...(action.payload)
      };
    case TaskActionTypes.SET_PAGE:
    return {
      ...state,
      ...(action.payload)
    };
    default:
      return state;
  }
};
