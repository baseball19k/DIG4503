import NavBar from '../components/NavBar';
import NameSearch from '../components/NameSearch';
import ReportingArea from '../components/ReportingArea';

class Namepage extends React.Component {
  render(){
    return (
      <div>
          <NavBar />
          <NameSearch />
          <ReportingArea />
      </div>
    );
  }
}
export default Namepage;
