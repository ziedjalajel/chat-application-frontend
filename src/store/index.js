import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { checkForToken, fetchUserProfile } from "./actions/authActions";
import { fetchMessages } from "./actions/messageActions";
import { fetchChats } from "./actions/chatActions";
import rootReducer from "./reducer/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
//run once at the begining

store.dispatch(fetchMessages());
store.dispatch(fetchChats());
store.dispatch(fetchUserProfile());
store.dispatch(checkForToken());

export default store;
