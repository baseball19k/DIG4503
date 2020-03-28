import styles from "./component.module.css";

class NameSearch extends React.Component {

  readName(event){
        event.preventDefault();
        const name = document.querySelector('#name');
        var reportingArea = document.querySelector("#reportingArea");
        fetch("http://localhost:3000/api/pokemon/name/"+ name.value).then((res) => {
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
          <form onSubmit={this.readName}>
            <input className={styles.input} type="text" id="name" placeholder="Search a Name"/><br/>
            <button className={styles.button} type="readName()">I Choose You!</button>
          </form>
      </div>

    );
  }
}

export default NameSearch;
