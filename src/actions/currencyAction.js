import { GET_LATEST } from "../actionType";

import axios from "axios";

export function getLatest() {
  return dispatch => {
    return axios.get("https://api.exchangeratesapi.io/latest").then(res => {
      dispatch({ type: GET_LATEST, payload: res.data });
    });
  };
}
