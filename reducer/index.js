import {combineReducers} from "redux";
// local files
import FeedReducer from "./feed.reducer";

export const reducer = combineReducers({
  feed: FeedReducer,
});
