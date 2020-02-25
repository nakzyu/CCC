import { GET_LATEST_DATE } from "../actionType";
import { GET_CURRENT } from "../actionType";
import { GET_PREV } from "../actionType";

import axios from "axios";
import moment from "moment";

export function getLatest() {
  return dispatch => {
    return axios.get("https://api.exchangeratesapi.io/latest").then(res => {
      dispatch({ type: GET_LATEST_DATE, payload: res.data.date });
    });
  };
}

export function getCurrent(latestDate) {
  console.log(latestDate);
  return dispatch => {
    return axios
      .get(`https://api.exchangeratesapi.io/${latestDate}?base=USD`)
      .then(res => {
        dispatch({ type: GET_CURRENT, payload: res.data });
      });
  };
}

export function getPrev(latestDate) {
  // substract 1 day
  const substract1Day = moment(
    new Date(new Date(latestDate) - 86400000)
  ).format("YYYY-MM-DD");

  return dispatch => {
    return axios
      .get(`https://api.exchangeratesapi.io/${substract1Day}?base=USD`)
      .then(res => {
        dispatch({ type: GET_PREV, payload: res.data });
      });
  };
}
