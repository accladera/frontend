import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";

const middleware = [thunk];
const devTools = process.env.NODE_ENV !== "production" && window.__REDUX_DEVTOOLS_EXTENSION__
?window.__REDUX_DEVTOOLS_EXTENSION__&&
window.__REDUX_DEVTOOLS_EXTENSION__()
: (a) => a;
const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middleware), devTools)
    );

  export default store;