import NavBar from '../components/NavBar';
import TypeSearch from '../components/TypeSearch';
import ReportingArea from '../components/ReportingArea';

class Typepage extends React.Component {
  render(){
    return (
      <div>
          <NavBar />
          <TypeSearch />
          <ReportingArea />
      </div>
    );
  }
}
export default Typepage;
