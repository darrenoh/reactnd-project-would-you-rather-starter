import {RECEIVE_USERS} from '../actions/users';

function users (state = [], action) {
  const {users} = action;

  switch (action.type) {
    case RECEIVE_USERS:
      return users;
    default:
      return state;
  }
}

export default users;
