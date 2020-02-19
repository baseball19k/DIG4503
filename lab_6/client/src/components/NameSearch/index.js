import React from "react";

class NameSearch extends React.Component {
  readName(){
        event.preventDefault();
        var pname = document.querySelector('#name').value;
        var reportit = document.querySelector("#reportit");
        fetch("/name/"+ pname).then((res) => {
        return res.json();
        }).then((ProcessedResponse) => {
          console.log(ProcessedResponse);
          if(ProcessedResponse.error){
            reportit.innerHTML = ProcessedResponse.error;
          }else{
            reportit.innerHTML = ProcessedResponse.name + " is ID: " + ProcessedResponse.id;
          }
        });
      }
  render(){
    return(
      <div>
          <input type="text" id="name" name="name"><br>
          <button type="readName()">I Choose You!</button>
      </div>

    );
  }
}

export default NameSearch;
