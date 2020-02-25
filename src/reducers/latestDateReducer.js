import { GET_LATEST_DATE } from "../actionType";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_LATEST_DATE:
      return action.payload;
    default:
      return state;
  }
}
