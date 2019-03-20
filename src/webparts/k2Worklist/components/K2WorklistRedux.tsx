import * as React from "react";
import * as ReactDOM from "react-dom";

/* Make the store available to all container 
components in the application without passing it explicitly */
import { Provider } from "react-redux";

// Store type from Redux
import { Store } from "redux";

// Import the store function and state
import configureStore, { IRootState } from "../reducers/Store";
import { getTasks } from "../actions/TaskActions";

import K2Worklist from "./K2Worklist";

export interface IProps {
  store?: Store<IRootState>;
  title: string;
  k2url: string;
  showToolbar: boolean;
  showFilter: boolean;
  showSearch: boolean;
  showOOF: boolean;
  rows: number;
}

/* 
Create a root component that receives the store via props
and wraps the App component with Provider, giving props to containers
*/
export const K2WorklistRedux: React.SFC<IProps> = (props) => {
  const store = configureStore();
  store.dispatch(getTasks());
  return (
    <Provider store={props.store}>
      <K2Worklist {...props} />
    </Provider>
  );
};


