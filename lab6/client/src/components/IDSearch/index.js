import React from "react";

class IDSearch extends React.Component {
  clicker_for_id(event){
        event.preventDefault();
        var numb = document.querySelector('#id').value;
        var reportit = document.querySelector("#reportit");
        fetch("/api/"+ numb).then((res) => {
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
      <form onsubmit="clicker_for_id(event);" id="form_for_id">
        <input type="text" id="id" name="id"><br>
        <button type="submit">I Choose You!</button>
      </form>
  <form onsubmit="clicker_for_name(event);" id="form_for_name">
    <input type="text" id="name" name="name"><br>
    <button type="submit">I Choose You!</button>
  </form>
      </div>

    );
  }
}

export default IDSearch;
