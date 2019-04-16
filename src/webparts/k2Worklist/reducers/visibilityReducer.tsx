import { Reducer } from "redux";

import { VisibilityActions, VisibilityActionTypes, IVisibilityState } from "../actions/VisibilityActions";

const initialVisibilityState: IVisibilityState = {
  searchString: null,
  showSearchBox: false
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
    case VisibilityActionTypes.TOGGLE_SEARCH_TOOLBAR:
      const showSearchBox = !state.showSearchBox;
      return {
        ...state,
        searchString: null,
        showSearchBox
      }
    default:
      return state;
  }
};
