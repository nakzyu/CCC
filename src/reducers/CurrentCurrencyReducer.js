import { GET_CURRENT } from "../actionType";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_CURRENT:
      return action.payload;
    default:
      return state;
  }
}
