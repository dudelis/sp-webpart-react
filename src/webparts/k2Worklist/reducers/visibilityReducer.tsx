import { Reducer } from "redux";

import { IVisibilityState } from "../types";
import { VisibilityActions, VisibilityActionTypes } from "../actions/VisibilityActions";

const initialVisibilityState: IVisibilityState = {
  searchString: null,
  showSearchToolbar: false
};

export const visibilityReducer: Reducer<IVisibilityState, VisibilityActions> = (
  state = initialVisibilityState,
  action
) => {
  switch (action.type) {
    case VisibilityActionTypes.SET_SEARCH_STRING:
      return {
        ...state,
        searchString: action.searchString
      };
    default:
      return state;
  }
};
