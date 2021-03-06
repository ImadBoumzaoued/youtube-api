import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { search } from "./actions";

import reducer from "./reducers";

const middleware = [thunk];

const store = createStore(reducer, applyMiddleware(...middleware));

store.dispatch(search("thor"));

export default store;
