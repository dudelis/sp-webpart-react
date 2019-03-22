import * as React from 'react';
import { connect } from "react-redux";

// Import the store function and state
import { IRootState } from "../../reducers/Store";
import { IPropertyState } from "../../reducers/propertyReducer";
import { getTasks } from '../../actions/TaskActions';

import Toolbar from "./Toolbar";

export type IConnectedState = {
    webpartProps: IPropertyState;
};
export type IConnectedActions = {
  getTasks: () => void
};

export type IConnectedProps = IConnectedState & IConnectedActions;

const mapStateToProps = (state: IRootState) => ({
  webpartProps: state.properties
});

const ToolbarGrid = (props: IConnectedProps) => {
  return (
    props.webpartProps.showToolbar && <Toolbar {...props}/>
  );
};

export default connect(mapStateToProps, {getTasks})(ToolbarGrid);
