import React from "react";
import { Link } from "react-router-dom";
import { demoLogin } from "../../actions/session_actions";

export const Home = () => {
  // debugger
  return(
    <div className="home">
      <header className="home-header">
        <div className="home-header-items">
          <a className="home-stride-title">STRIDE</a>
          <a href="/#/login" className="home-login-button">Log In</a>
        </div>
      </header>
      <div className="home-body">
        <div className="home-catch-phrase">
          {`Cloning the #1 app for runners and cyclists`}
        </div>
        <div className="home-demo-login">
          <button className="demo-login-button" onClick={() => dispatch(demoLogin())}>Try as Guest</button>
        </div>
      </div>
      <footer className="home-footer">
          <a className="footer-stride-title">STRIDE</a>
          <div className="get-started">
            <div className="get-started-title">
              {`Get Started`}
            </div>
            <ul className="get-started-list">
              <li className="footer-li">
                <a href="/#/signup" className="footer-sign-up-element">Sign Up</a>
              </li>
              <li className="footer-li">
                <a href="/#/login" className="footer-log-in-element">Log In</a>
              </li>
            </ul>
          </div>
      </footer>
    </div>
  )
}
