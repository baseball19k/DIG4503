import React from 'react';
import logo from './logo.svg';
import './App.css';
import IDSearch from './components/PokemonSearch';

class App extends React.Component {
  render(){
    return(
      <div>
        <IDSearch />
        <NameSearch />
      </div>
    );
  }
}
export default App;
