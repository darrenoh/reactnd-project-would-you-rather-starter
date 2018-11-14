import {_getUsers} from '../utils/_DATA';

export const RECEIVE_USERS = 'RECEIVE_USERS';

export const receiveUsers = () => dispatch => _getUsers()
  .then(users => dispatch({
    type: RECEIVE_USERS,
    users: Object.values(users)
  }));
