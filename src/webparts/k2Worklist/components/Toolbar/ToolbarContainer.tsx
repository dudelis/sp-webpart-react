import * as React from "react";
import { connect } from "react-redux";
import { SearchBox } from "office-ui-fabric-react/lib/SearchBox";

// Import the store function and state
import { IRootState } from "../../store";
import { IPropertyState } from "../../reducers/propertyReducer";
import { getTasks, setFilter } from "../../actions/TaskActions";

import Toolbar from "./Toolbar";

export type IConnectedState = {
  webpartProps: IPropertyState;
};
export type IConnectedActions = {
  getTasks: () => void;
  refresh: () => void;
  setFilter: (value?: string) => void;
  setPage: (page?: number, searchString?: string) => void;
};

export type Props = {
  children?: React.ReactNode;
  searchString?: string;
};

export type IConnectedProps = IConnectedState & IConnectedActions & Props;

const mapStateToProps = (state: IRootState) => ({
  webpartProps: state.properties
});
const mapDispatchToProps = dispatch => {
  return {
    refresh: () => {
      dispatch(getTasks());
    },
    getTasks: () => dispatch(getTasks()),
    setFilter: (value?: string) => dispatch(setFilter(value))
  };
};

class ToolbarGrid extends React.Component<IConnectedProps, any> {
  constructor(props: IConnectedProps) {
    super(props);
  }

  private _onSeachBoxChange = (value: string) =>{
    console.log('Searchbox called');
    this.props.setPage(1, value);
  }

  public render() {
    return (
      <React.Fragment>
        {this.props.webpartProps.showToolbar && <Toolbar {...this.props} />}
        <SearchBox
          onSearch={newValue => this._onSeachBoxChange(newValue)}
        />
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolbarGrid);
