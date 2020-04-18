import React from 'react';
import "./index.css";
import meandstorm from './IMG-0291.JPG';
import storm from './IMG-2630.JPG';

class PersonalSkills extends React.Component {
  render(){
    return(
      <div className="grid">
      <div className="grid-item pic">
      <img src={storm} alt="my_car" />
      <h1>Professional Skills</h1>
      <p>HTML</p>
      <p>CSS</p>
      <p>Javascript</p>
      <p>PHP</p>
      <p>React.js/ Node.js</p>
      <p>Scenery Photography</p>
      </div>
        <div className="grid-item explanation">
          <img src={meandstorm} alt="me_and_my_car"/>
          <h1>Personal Skills</h1>
          <p>Leading by Example</p>
          <p>Public Speaking</p>
          <p>Task Driven</p>
          <p>Good Communicator</p>
        </div>

      </div>
    );
  }
}
export default PersonalSkills;
