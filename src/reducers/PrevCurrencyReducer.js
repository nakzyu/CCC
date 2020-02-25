import { GET_PREV } from "../actionType";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_PREV:
      return action.payload;
    default:
      return state;
  }
}
