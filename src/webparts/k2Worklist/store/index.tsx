/*  Imports from Redux:
 applyMiddleware: Applies middleware to the dispatch method of the Redux store
 combineReducers: Merges reducers into one
 createStore: Creates a Redux store that holds the state tree
 Store: The TS Type used for the store, or state tree
 */
import { applyMiddleware, combineReducers, createStore, Store, compose } from "redux";
/*  Thunk
Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.
*/
import thunk from "redux-thunk";
// Import reducers and state type
import { taskReducer} from "../reducers/tasksReducer";
import { visibilityReducer } from "../reducers/visibilityReducer";
import { ITaskState } from "../types";
import { propertyReducer, IPropertyState } from '../reducers/propertyReducer';
import { IVisibilityState } from '../actions/VisibilityActions';

// Create an interface for the application state
export interface IRootState {
  tasks: ITaskState;
  properties: IPropertyState;
  visibility: IVisibilityState;
}

// Create the root reducer
const rootReducer = combineReducers<IRootState>({
  tasks: taskReducer,
  properties: propertyReducer,
  visibility: visibilityReducer
});
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

// Create a configure store function of type `IRootState`
export default function configureStore(): Store<IRootState, any> {
  const store = createStore(rootReducer, undefined, composeEnhancers(applyMiddleware(thunk)));
  return store;
}
