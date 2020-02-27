import {
  GET_LATEST_DATE,
  GET_CURRENT,
  GET_PREV,
  GET_BASE
} from "../actionType";

import axios from "axios";
import moment from "moment";

export function getLatest() {
  return dispatch => {
    return axios.get("https://api.exchangeratesapi.io/latest").then(res => {
      dispatch({ type: GET_LATEST_DATE, payload: res.data });
    });
  };
}

export function getCurrent(latestDate, bc) {
  return dispatch => {
    return axios
      .get(`https://api.exchangeratesapi.io/${latestDate}?base=${bc}`)
      .then(res => {
        dispatch({ type: GET_CURRENT, payload: res.data });
      });
  };
}

export function getPrev(latestDate, bc) {
  // substract 1 day
  const substract1Day = moment(
    new Date(new Date(latestDate) - 86400000)
  ).format("YYYY-MM-DD");

  return dispatch => {
    return axios
      .get(`https://api.exchangeratesapi.io/${substract1Day}?base=${bc}`)
      .then(res => {
        dispatch({ type: GET_PREV, payload: res.data });
      });
  };
}

export function getBase(base) {
  return {
    type: GET_BASE,
    payload: base
  };
}
