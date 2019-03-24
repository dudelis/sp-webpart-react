import * as React from "react";
import { connect } from "react-redux";
import Pagination from "office-ui-fabric-react-pagination";

import TaskGrid from "./TaskGrid";

// Import the store function and state
import { IRootState } from "../../store";
import { ITask } from "../../types";
import { getTasks, setPage } from "../../actions/TaskActions";

export interface IConnectedState {
  tasks: ITask[];
  rows: number;
  totalPages: number;
  currentPage: number;
}
export interface IConnectedActions {
  getTasks: () => void;
  setPage: (n?: number) => void;
}

const mapStateToProps = (state: IRootState) => {
  return {
    tasks: state.tasks.currentPageTasks,
    rows: state.properties.rows,
    totalPages: state.tasks.totalPages,
    currentPage: state.tasks.currentPage
  };
};

const mapDispatchToProps = dispatch => ({
  refresh: () => {
    dispatch(getTasks());
    dispatch(setPage());
  },
  getTasks: () => dispatch(getTasks()),
  setPage: (pageNum?: number) => dispatch(setPage(pageNum))
});

const initialProps: IConnectedState & IConnectedActions = {
  tasks: [],
  rows: 0,
  totalPages: 1,
  currentPage: 1,
  setPage: null,
  getTasks: null
};

class TaskGridContainer extends React.Component<
  IConnectedState & IConnectedActions,
  any
> {
  constructor(props = initialProps) {
    super(props);
  }

  public componentWillMount() {
    this.props.getTasks();
  }

  public render(): JSX.Element {
    return (
      <React.Fragment>
        <TaskGrid tasks={this.props.tasks} rows={this.props.rows} />
        <Pagination
          currentPage={this.props.currentPage}
          totalPages={this.props.totalPages}
          onChange={page => {
            this.props.setPage(page as number);
          }}
        />
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskGridContainer);
