import styles from "./component.module.css";
class IDSearch extends React.Component {

  readId(event){
        event.preventDefault();
        const numb = document.querySelector('#id');
        var reportingArea = document.querySelector("#reportingArea");
        fetch("http://localhost:3000/api/pokemon/id/"+ numb.value).then((res) => {
        return res.json();
        }).then((ProcessedResponse) => {
          console.log(ProcessedResponse);
          if(ProcessedResponse.error){
            reportingArea.innerHTML = ProcessedResponse.error;
          }else{
            reportingArea.innerHTML = ProcessedResponse.name;
            ;
          }
        });
      };
  render(){
    return(
      <div>
          <form onSubmit={this.readId}>
            <input className={styles.input} type="text" id="id" placeholder="Search an ID"/><br/>
            <button className={styles.button} type="submit">I Choose You!</button>
          </form>
      </div>

    );
  }
}

export default IDSearch;
