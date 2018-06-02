export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
import * as APIUtil from '../util/session_api_util';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const login = (user) => (dispatch) => {
  APIUtil.requestLogin(user).then((dbUser) => dispatch(receiveCurrentUser(dbUser)));
};

export const logout = () => (dispatch) => {
  APIUtil.requestLogout().then(dispatch(logoutCurrentUser()));
};

export const signup = (user) => (dispatch) => {
  APIUtil.requestSignup(user).then((dbUser) => dispatch(receiveCurrentUser(dbUser)));
};
