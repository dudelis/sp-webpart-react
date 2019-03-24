import * as React from "react";
import { connect } from "react-redux";

// Import the store function and state
import { IRootState } from "../store";
import { IPropertyState } from "../reducers/propertyReducer";
import { getTasks } from "../actions/TaskActions";

import { K2Worklist } from "./K2Worklist";

// Everything needed for redux connect method
interface IConnectedState {
  properties: IPropertyState;
}
// Represents the connected dispatch
interface IConnectedDispatch {
  getTasks: () => void;
}

const mapStateToProps = (state: IRootState) => ({
  properties: state.properties
});

const K2WorklistContainer = () : JSX.Element =>{
  return (
    <K2Worklist />
  );
};


export default connect(
  mapStateToProps
)(K2WorklistContainer);
