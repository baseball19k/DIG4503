import React from 'react';
import YearSearch from './components/YearSearch';
import TitleSearch from './components/TitleSearch';
//if you need me to add the part to search for a title I can
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      "table": []
    };

  }

  // Update the internal state.table
  // (This is called from YearSearch.)
  setResultsTable = (processed) => {
    this.setState({"table": processed});
  }

  // Render the results table
  createResultsTable() {

    return (
      <table>
        <tbody>
        {
          this.state.table.map((entry, index) => {
             return(
              <tr key={index}>
                //<td>{entry.title}</td>
                <td>{entry.year}</td>
              </tr>
             );
          })
        }
        </tbody>
      </table>
    );

  }
  //I was going to use TitleSearch to look for the titles also but the code kept breaking so I am just going to go with the year only.
  render() {
    return (
      <div>
        <YearSearch callback={this.setResultsTable} />
        {this.createResultsTable()}
      </div>
    );
  }

}

export default App;
