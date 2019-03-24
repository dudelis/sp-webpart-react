import * as React from 'react';
import { connect } from "react-redux";

// Import the store function and state
import { IRootState } from "../../store";
import { IPropertyState } from "../../reducers/propertyReducer";
import { getTasks, setPage } from '../../actions/TaskActions';

import Toolbar from "./Toolbar";

export type IConnectedState = {
    webpartProps: IPropertyState;
};
export type IConnectedActions = {
  getTasks: () => void,
  refresh: () => void
};

export type IConnectedProps = IConnectedState & IConnectedActions;

const mapStateToProps = (state: IRootState) => ({
  webpartProps: state.properties
});
const mapDispatchToProps = (dispatch) => {
  return {
    refresh: () => {
      dispatch(getTasks());
      dispatch(setPage());
    },
    getTasks: () => dispatch(getTasks()),
    setPage: () => dispatch(setPage())
  };
};

const ToolbarGrid = (props: IConnectedProps) => {
  return (
    props.webpartProps.showToolbar && <Toolbar {...props}/>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ToolbarGrid);
