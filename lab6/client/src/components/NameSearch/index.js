import React from "react";

class NameSearch extends React.Component {
  clicker_for_name(event){
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
        <form onsubmit="clicker_for_name(event);" id="form_for_name">
          <input type="text" id="name" name="name"><br>
          <button type="submit">I Choose You!</button>
        </form>
      </div>

    );
  }
}

export default NameSearch;
