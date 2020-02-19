import React from "react";

class IDSearch extends React.Component {
  readId(){
        event.preventDefault();
        var numb = document.querySelector('#id').value;
        var reportit = document.querySelector("#reportit");
        fetch("http://localhost:80/api/"+ numb).then((res) => {
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
        <input type="text" id="id" name="id"><br>
        <button type="submit">I Choose You!</button>
      </div>

    );
  }
}

export default IDSearch;
