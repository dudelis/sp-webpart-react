import { connect } from "react-redux";

// Import the store function and state
import { IRootState } from "../../reducers/Store";
import { IPropertyState } from "../../reducers/propertyReducer";

import Toolbar from "./Toolbar";

export interface IConnectedProps {
    webpartProps: IPropertyState;
}

const mapStateToProps = (state: IRootState) => ({
  webpartProps: state.properties
});

export default connect(mapStateToProps)(Toolbar);
