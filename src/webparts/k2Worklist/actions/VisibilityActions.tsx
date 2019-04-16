//Action types - constants
export enum VisibilityActionTypes {
  SET_SEARCH_STRING = "SET_SEARCH_STRING"
}

//Types of every action to be returned
export interface IVisibilitySetSearchStringAction {
  type: VisibilityActionTypes.SET_SEARCH_STRING;
  searchString: string;
}
//Combine all Actions together
export type VisibilityActions = IVisibilitySetSearchStringAction;


//APPLY_PROPERTIES
export const setSearchString = (searchString?: string) => {
  return {
    type: VisibilityActionTypes.SET_SEARCH_STRING,
    searchString
  };
};