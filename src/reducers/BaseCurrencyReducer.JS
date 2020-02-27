import { GET_BASE } from "../actionType";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_BASE:
      return action.payload;
    default:
      return state;
  }
}
