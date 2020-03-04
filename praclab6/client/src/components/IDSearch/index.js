import React from "react";

class IDSearch extends React.Component {

  readId(event){
        event.preventDefault();
        const numb = document.querySelector('#id');
        var reportingArea = document.querySelector("#reportingArea");
        fetch("http://localhost:80/id/"+ numb.value).then((res) => {
        return res.json();
        }).then((ProcessedResponse) => {
          console.log(ProcessedResponse);
          if(ProcessedResponse.error){
            reportingArea.innerHTML = ProcessedResponse.error;
          }else{
            reportingArea.innerHTML = ProcessedResponse.name;
          }
        });
      };
  render(){
    return(
      <div>
          <form onSubmit={this.readId}>
            <input type="text" id="id"/><br/>
            <button type="submit">I Choose You!</button>
          </form>
      </div>

    );
  }
}

export default IDSearch;
