import { applyMiddleware, createStore, compose } from "redux";
import ReduxThunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise-middleware'
// local files
import { reducer } from '../reducer';

const middleware = composeWithDevTools(applyMiddleware(createLogger(), ReduxThunk, promise))
const store = createStore(reducer, middleware);

export default store;
