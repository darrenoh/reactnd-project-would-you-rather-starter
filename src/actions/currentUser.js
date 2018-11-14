export const GET_CURRENT_USER = 'GET_USER';
export const SET_CURRENT_USER = 'SET_USER';

export const getCurrentUser = () => dispatch => dispatch({
  type: GET_CURRENT_USER
});

export const setCurrentUser = currentUser => dispatch => dispatch({
  type: SET_CURRENT_USER,
  currentUser
});
