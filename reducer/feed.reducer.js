import { FEED } from "../actions/feed.action"
import { FULFILLED, REJECTED, PENDING } from '../actions/promise.action'

const initialState = {
  error: null,
  fetched: false,
  data: []
};

export default function FeedReducer(state = initialState, action) {
  switch (action.type) {
    case `${FEED}${FULFILLED}`:
      return { ...state, ...{ data: action.payload, fetched: true } }

    case `${FEED}${REJECTED}`:
      return { ...state, ...{ error: action.payload, fetched: true } }

    case `${FEED}${PENDING}`:
      return { ...state, ...{ fetched: false } }

    default:
      return state;
  }
}
