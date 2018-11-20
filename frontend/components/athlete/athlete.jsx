import React from "react"
import Header from "../header/header_container";

class Athlete extends React.Component {
  render(){
    const { currentAthlete, logout} = this.props;
    return(
      <div className="athlete">
        <header className="athlete-header">
          <Header />
        </header>
        <div  className="athlete-body">
          <div className="athlete-summary-row">
            <div className="athlete-profile-summary">
              <div className="athlete-summary-avatar">
                <div className="athlete-summary-avatar-char">
                  {currentAthlete.username.charAt(0).toUpperCase()}
                </div>
              </div>
              <a className="athlete-username">
                {currentAthlete.username}
              </a>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Athlete;
