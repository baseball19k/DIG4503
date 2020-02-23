import React from "react";

class NameSearch extends React.Component {

  readName(event){
        event.preventDefault();
        const pname = document.querySelector('#name').value;
        var reportit = document.querySelector("#reportit");
        fetch("http://localhost:80/name/"+ pname.value).then((res) => {
        return res.json();
        }).then((ProcessedResponse) => {
          console.log(ProcessedResponse);
          if(ProcessedResponse.error){
            reportit.innerHTML = ProcessedResponse.error;
          }else{
            reportit.innerHTML = ProcessedResponse.name;
          }
        });
      }
  render(){
    return(
      <div>
          <form onSubmit={this.readName}>
            <input type="text" id="name"/><br/>
            <button type="readName()">I Choose You!</button>
          </form>
      </div>

    );
  }
}

export default NameSearch;
