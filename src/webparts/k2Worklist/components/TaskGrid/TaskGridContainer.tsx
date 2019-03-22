import * as React from "react";
import { connect } from "react-redux";

import TaskGrid from "./TaskGrid";

// Import the store function and state
import { IRootState } from "../../reducers/Store";
import { IPropertyState } from "../../reducers/propertyReducer";
import { ITaskState } from "../../reducers/tasksReducer";
import { ITask } from '../../types';
import { getTasks } from "../../actions/TaskActions";

export interface IConnectedState {
  tasks: ITask[];
  rows: number;
}
export interface IConnectedActions {
  getTasks: () => void;
}

const mapStateToProps = (state: IRootState) => {
  return {
    tasks: state.tasks.tasks,
    rows: state.properties.rows
  };
};

const initialProps : IConnectedState & IConnectedActions  = {
  tasks: [],
  rows: 0,
  getTasks: null
};

class TaskGridContainer extends React.Component<IConnectedState & IConnectedActions, any> {
  constructor(props = initialProps){
    super(props);
  }

  public componentWillMount() {
    this.props.getTasks();
  }

  public render(): JSX.Element {
    return (
    
    <TaskGrid tasks={this.props.tasks} rows={this.props.rows} />);
  }
}

export default connect(
  mapStateToProps,
  { getTasks }
)(TaskGridContainer);
