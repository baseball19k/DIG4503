import React from 'react';
import AboutMe from './components/AboutMe';
import Banner from './components/Banner';
import PersonalSkills from './components/PersonalSkills';
import SocialBanner from './components/SocialBanner';
import ThreePics from './components/ThreePics';

class App extends React.Component {
  render(){
    return(
      <div className="body">
        <Banner />
        <ThreePics />
        <AboutMe />
        <PersonalSkills />
        <SocialBanner />
      </div>
    );
  }
}
export default App;
