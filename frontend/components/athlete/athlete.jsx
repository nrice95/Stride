import React from "react"

class Athlete extends React.Component {
  render(){
    const { currentAthlete, logout} = this.props;
    return(
      <div className="athlete">
        <header className="athlete-header">
          <div className="athlete-header-items">
            <a href="#/dashboard" className="athlete-stride-title">STRIDE</a>
          </div>
          <button className="header-button" onClick={logout}>Log Out</button>
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
