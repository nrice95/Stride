import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import * as APIUtil from './util/session_api_util'; //TEST
import { login, logout, signup, demoLogin } from "./actions/session_actions";
import { createRoute } from "./actions/route_actions";


document.addEventListener("DOMContentLoaded", () => {
  // debugger
  let store;
  if (window.currentAthlete) {
    const preloadedState = {
      entities: {
        athletes: { [window.currentAthlete.id]: window.currentAthlete }
      },
      session: { id: window.currentAthlete.id }
    };
    store = configureStore(preloadedState);
    delete window.currentAthlete;
  }
  else{
    store = configureStore();
  }
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
window.demoLogin = demoLogin;
window.createRoute = createRoute;
