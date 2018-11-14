import React from "react";
import { Link } from "react-router-dom";

class Greeting extends React.Component {
  render(){
    const { currentAthlete } = this.props;
    if (!currentAthlete){
      // debugger
      return(
        <div>
        
        </div>
      );
    }else{
      return(
        <div>
          <h3>{`${currentAthlete.username} signed in!`}</h3>
        </div>
      );
    }
  }
}

export default Greeting;
