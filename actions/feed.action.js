import axiosInstance from "../axios";
// import axios from 'axios';

export const FEED = 'FEED';
// https://jsonplaceholder.typicode.com/todos

//planets
export function initFeed() {
  return dispatch => {
    dispatch({
      type: FEED,
      payload: axiosInstance.get('todos').then(res => res.data)
    });
  }
}
