//Action types - constants
export enum VisibilityActionTypes {
  SET_SEARCH_STRING = "SET_SEARCH_STRING",
  TOGGLE_SEARCH_TOOLBAR = "TOGGLE_SEARCH_TOOLBAR"
}

export interface IVisibilityState {
  searchString: string;
  showSearchBox: boolean;
}

//Types of every action to be returned
export interface IVisibilitySetSearchStringAction {
  type: VisibilityActionTypes.SET_SEARCH_STRING;
  searchString: string;
}
export interface IVisibilityshowSearchBoxAction {
  type: VisibilityActionTypes.TOGGLE_SEARCH_TOOLBAR;
}
//Combine all Actions together
export type VisibilityActions =
  | IVisibilitySetSearchStringAction
  | IVisibilityshowSearchBoxAction;

//APPLY_PROPERTIES
export const setSearchString = (searchString?: string) => {
  return {
    type: VisibilityActionTypes.SET_SEARCH_STRING,
    searchString
  };
};

export const toggleSearchToolbar = () => {
  return { type: VisibilityActionTypes.TOGGLE_SEARCH_TOOLBAR };
};
