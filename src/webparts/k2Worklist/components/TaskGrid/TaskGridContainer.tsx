import * as React from "react";
import { connect } from "react-redux";
import Pagination from "office-ui-fabric-react-pagination";
import * as _ from "lodash";

import TaskGrid from "./TaskGrid";

// Import the store function and state
import { IRootState } from "../../store";
import { ITask } from "../../types";
import { IVisibilityState } from '../../actions/VisibilityActions';

export interface IProps {
  children?: React.ReactNode;
  filteredTasks: ITask[];
}
export interface IConnectedProps {
  tasks: ITask[];
  rows: number;
  visibility: IVisibilityState;
}
export interface IComponentState {
  tasks: ITask[];
  totalPages: number;
  currentPage: number;
}

const mapStateToProps = (state: IRootState) => {
  return {
    rows: state.properties.rows,
    tasks: state.tasks.tasks,
    visibility: state.visibility
  };
};

export type IComponentProps = IConnectedProps & IProps;

class TaskGridContainer extends React.Component<IComponentProps, IComponentState> {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      totalPages: 1,
      currentPage: 1
    };
  }

  public componentDidUpdate(){
    const rows = this.props.rows;
    const searchedTasks = this._filterTasks(this.props.tasks, this.props.visibility.searchString);
    let totalPages = rows > 0 ? Math.ceil(searchedTasks.length / rows) : 1;
    totalPages = totalPages === 0 ? 1 : totalPages;
    const startIndex = (this.state.currentPage - 1) * this.props.rows;
    const endIndex = startIndex + this.props.rows + 1;
    const tasks = _.slice(searchedTasks, startIndex, endIndex);
    //checking if the tasks array changed
    debugger;
    if (!_.isEqual(_.sortBy(this.state.tasks), _.sortBy(tasks))){
      this.setState({
        tasks,
        totalPages
      });
    }    
  }

  public render(): JSX.Element {
    return (
      <React.Fragment>
        <TaskGrid tasks={this.state.tasks} />
        <Pagination
          currentPage={this.state.currentPage}
          totalPages={this.state.totalPages}
          onChange={page => this._setPageNumber(page)}
        />
      </React.Fragment>
    );
  }

  private _setPageNumber(page: number){
    this.setState({currentPage: page});
  }

  private _filterTasks(tasks: ITask[], searchString?: string){
    let filteredTasks = [];
    if (searchString){
      filteredTasks = tasks.filter(item =>{
        return item.activityName.toLowerCase().indexOf(searchString.toLowerCase()) > -1 ||
        item.workflowInstanceFolio.toLowerCase().indexOf(searchString.toLowerCase()) > -1 ||
        item.workflowDisplayName.toLowerCase().indexOf(searchString.toLowerCase()) > -1;
      });
    } else {
      filteredTasks = tasks;
    }
    return filteredTasks;
  }
}

export default connect(
  mapStateToProps
)(TaskGridContainer);


