import { GET_LATEST } from "../actionType";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_LATEST:
      return action.payload;
    default:
      return state;
  }
}
