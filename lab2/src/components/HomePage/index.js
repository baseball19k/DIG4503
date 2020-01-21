import React from "react";
import "./index.css";

class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state ={

      firstName : "James Clement"
    };
  };
    render(){
    return(
      <div className="homepage">
        <h1>
        {this.state.firstName} was here!
        </h1>
        <h2>
        Make sure to go follow me on Instagram, Snapchat, Twitter and Twitch at Baseball19k!
        </h2>
      </div>
      );
  }
}
export default HomePage;
