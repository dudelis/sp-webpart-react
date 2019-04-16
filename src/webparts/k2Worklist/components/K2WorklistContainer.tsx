import * as React from "react";
import { connect } from "react-redux";

// Import the store function and state
import { IRootState } from "../store";
import { IPropertyState } from "../reducers/propertyReducer";
import { getTasks } from "../actions/TaskActions";

import { K2Worklist } from "./K2Worklist";

// Everything needed for redux connect method
export interface IConnectedState {
  properties: IPropertyState;
}
// Represents the connected dispatch
export interface IConnectedDispatch {
  getTasks: () => void;
}

const mapStateToProps = (state: IRootState): IConnectedState => ({
  properties: state.properties
});

const mapDispatchToProps = (dispatch): IConnectedDispatch => {
  return {
    getTasks: () => dispatch(getTasks())
  };
};

export type IConnectedProps = IConnectedState & IConnectedDispatch;

class K2WorklistContainer extends React.Component<IConnectedProps, any> {
  constructor(props: IConnectedProps){
    super(props);
  }

  public componentWillMount(){
    this.props.getTasks();
  }
  
  public render() {
    return <K2Worklist />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(K2WorklistContainer);
