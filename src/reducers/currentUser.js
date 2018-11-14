import {
  GET_CURRENT_USER,
  SET_CURRENT_USER
} from '../actions/currentUser';

function currentUser (state = '', action) {
  const {currentUser} = action;

  switch (action.type) {
    case SET_CURRENT_USER:
      return currentUser;
    case GET_CURRENT_USER:
    default:
      return state;
  }
}

export default currentUser;
