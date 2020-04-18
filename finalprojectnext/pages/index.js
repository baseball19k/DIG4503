import NavBar from '../components/NavBar';
import HomeContent from '../components/HomeContent';
import SocialMediaBar from '../components/SocialMediaBar';

class Home extends React.Component {
  render(){
    return(
      <div>
        <NavBar />
        <HomeContent />
        <SocialMediaBar />
      </div>
    );
  }
}

export default Home;
