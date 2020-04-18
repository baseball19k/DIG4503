import React from 'react';
import storm from './IMG-2630.JPG';
import './index.css';

class ProfessionalSkills extends React.Component {
  render(){
    return(
      <div className="grid">

        <div className="grid-item explanation">
          <img src={storm} alt="my_car" />
          <h1>Professional Skills</h1>
          <p>HTML</p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>PHP</p>
          <p>React.js/ Node.js</p>
          <p>Scenery Photography</p>
        </div>
        <div className="grid-item pic">
          <img src={storm} alt="my_car" />
        </div>
      </div>
    );
  }
}
export default ProfessionalSkills;
