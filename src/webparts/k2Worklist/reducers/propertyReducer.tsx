import { Reducer } from "redux";

import { IK2WorklistWebPartProps } from "../IK2WorklistWebPartProps";
import { PropertyActions, PropertyActionTypes } from "../actions/PropertyActions";
import { AadHttpClientFactory } from '@microsoft/sp-http';

export interface IPropertyState extends IK2WorklistWebPartProps{
  context?: AadHttpClientFactory;
}

const initialPropertiesState: IPropertyState = {
  title: null,
  k2url: "",
  showToolbar: false,
  showFilter: false,
  showSearch: false,
  showOOF: false,
  rows: 0,
  context: null
};

export const propertyReducer: Reducer<IPropertyState, PropertyActions> = (
  state = initialPropertiesState,
  action
) => {
  switch (action.type) {
    case PropertyActionTypes.APPLY_PROPERTIES:
        const props = action.properties;
      return {...state, ...props};
    case PropertyActionTypes.UPDATE_PROPERTY:
        return {
            ...state,
            [action.propertyName] : action.value
        };
    case PropertyActionTypes.SET_CONTEXT:
        return {
          ...state,
          context: action.context
        };
    default:
      return state;
  }
};
