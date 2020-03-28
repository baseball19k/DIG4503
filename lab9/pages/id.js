import NavBar from '../components/NavBar';
import IDSearch from '../components/IDSearch';
import ReportingArea from '../components/ReportingArea';

class IDpage extends React.Component{
  render(){
    return (
      <div>
          <NavBar />
          <IDSearch />
          <ReportingArea />
      </div>
    );
  }
}
export default IDpage
