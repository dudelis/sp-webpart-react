import { WebPartContext } from "@microsoft/sp-webpart-base";
//Reducer types to read the state types
import { IPropertyState } from "../reducers/propertyReducer";

//Action types - constants
export enum PropertyActionTypes {
  APPLY_PROPERTIES = "APPLY_PROPERTIES",
  UPDATE_PROPERTY = "UPDATE_PROPERTY",
  SET_CONTEXT = "SET_CONTEXT"
}

//Types of every action to be returned
export interface IPropertyApplyAction {
  type: PropertyActionTypes.APPLY_PROPERTIES;
  properties: any;
}
//Types of every action to be returned
export interface IPropertyUpdateAction {
  type: PropertyActionTypes.UPDATE_PROPERTY;
  propertyName: string;
  value: any;
}
export interface IPropertySetContextAction {
  type: PropertyActionTypes.SET_CONTEXT;
  context: WebPartContext;
}

//Combine all Actions together
export type PropertyActions =
  | IPropertyApplyAction
  | IPropertyUpdateAction
  | IPropertySetContextAction;

//APPLY_PROPERTIES
export const applyProperties = (properties: IPropertyState) => {
  return {
    type: PropertyActionTypes.APPLY_PROPERTIES,
    properties
  };
};
//UPDATE_PROPERTY
export const updateProperty = (propertyName: string, value: any) => {
  return {
    type: PropertyActionTypes.UPDATE_PROPERTY,
    propertyName,
    value
  };
};
//SET_CONTEXT
export const setContext = (context: WebPartContext) => {
  return {
    type: PropertyActionTypes.SET_CONTEXT,
    context
  };
};
