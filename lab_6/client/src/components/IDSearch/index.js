import React from "react";

class IDSearch extends React.Component {
  readId(){
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
      <form onsubmit="readId();" id="form_for_id">
        <input type="text" id="id" name="id"><br>
        <button type="submit">I Choose You!</button>
      </form>
      </div>

    );
  }
}

export default IDSearch;
