import React from "react";
import firstpic from './IMG_3397.jpg';
import secondpic from './IMG_3282.jpg';
import thirdpic from './IMG_3400.jpg';
import './index.css';

class ThreePics extends React.Component{
  render(){
    return(
      <div className="grid">
        <div className="grid-item one">
          <img src={firstpic} alt="orangeflower" />
        </div>
        <div className="grid-item two">
          <img src={secondpic} alt="coffee" />
        </div>
        <div className="grid-item three">
          <img src={thirdpic} alt="pinkflowers" />
        </div>
      </div>
    );
  }
}
export default ThreePics;
