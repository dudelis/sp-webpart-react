import * as React from "react";
import { connect } from "react-redux";
import { SearchBox } from "office-ui-fabric-react/lib/SearchBox";

// Import the store function and state
import { IRootState } from "../../store";
import { IPropertyState } from "../../reducers/propertyReducer";

import { setSearchString, toggleSearchToolbar } from "../../actions/VisibilityActions";
import { getTasks } from '../../actions/TaskActions';

import Toolbar from "./Toolbar";

export type IConnectedReduxState = {
  webpartProps: IPropertyState;
  searchString: string;
  showSearchBox: boolean;
};
export type IConnectedReduxActions = {
  setSearchString: (searchString: string) => void;
  getTasks: () => void;
  toggleSearchToolbar: () => void;
};

export type Props = {
  children?: React.ReactNode;
};

export type IComponentProps = IConnectedReduxState & IConnectedReduxActions & Props;

const mapStateToProps = (state: IRootState) => ({
  webpartProps: state.properties,
  searchString: state.visibility.searchString,
  showSearchBox: state.visibility.showSearchBox
});
const mapDispatchToProps = dispatch => {
  return {
    setSearchString: (searchString: string) => dispatch(setSearchString(searchString)),
    getTasks: () => dispatch(getTasks()),
    toggleSearchToolbar: () => dispatch(toggleSearchToolbar())
  };
};

class ToolbarGrid extends React.Component<IComponentProps, any> {
  constructor(props: IComponentProps) {
    super(props);
  }

  private _onSeachBoxChange = (value: string) =>{
    console.log('Searchbox called');
    this.props.setSearchString(value);
  }

  public render() {
    return (
      <React.Fragment>
        {this.props.webpartProps.showToolbar && <Toolbar webpartProps={this.props.webpartProps} refresh={this._refresh} toggleSearchToolbar={this.props.toggleSearchToolbar} />}
        {this.props.showSearchBox &&
          <SearchBox
            onChange={newValue => this._onSeachBoxChange(newValue)}
            value= {this.props.searchString}
          />
        }
      </React.Fragment>
    );
  }

  private _refresh = () => {
    this.props.setSearchString('');
    this.props.getTasks();
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolbarGrid);
