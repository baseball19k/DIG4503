import NavBar from '../components/NavBar';
import HomeContent from '../components/HomeContent';

class Home extends React.Component {
  render(){
    return (
      <div>
        <NavBar />
        <HomeContent />
      </div>
    );
  }
}

export default Home;
