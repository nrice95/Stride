import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import * as APIUtil from './util/session_api_util'; //TEST
import { login, logout, signup } from "./actions/session_actions";


document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TESTING END
  ReactDOM.render(<Root store={store}/>, document.getElementById("root"));
  // ReactDOM.render(<h1>Welcome!</h1>, document.getElementById("root"));
});

window.login = login;
window.signup = signup;
window.logout = logout;
