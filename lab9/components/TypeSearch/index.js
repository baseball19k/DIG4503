import styles from "./component.module.css";

class TypeSearch extends React.Component {

  readType(event){
        event.preventDefault();
        const type = document.querySelector('#type');
        var reportingArea = document.querySelector("#reportingArea");
        fetch("http://localhost:3000/api/pokemon/typeList/"+ type.value).then((res) => {
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
          <form onSubmit={this.readType}>
            <input className={styles.input} type="text" id="type" placeholder="Search a Type"/><br/>
            <button className={styles.button} type="readType()">I Choose You!</button>
          </form>
      </div>

    );
  }
}

export default TypeSearch;
