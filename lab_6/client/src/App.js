import React from 'react';
import logo from './logo.svg';
import './App.css';
import IDSearch from './components/IDSearch';
import NameSearch from './components/NameSearch';

class App extends React.Component {
  render(){
    return(
      <div>
        <IDSearch />
        <NameSearch />
        <h2>Reporting</h2>
        <div id="reportingArea"></div>
      </div>
    );
  }
}
export default App;
