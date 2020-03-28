import styles from './component.module.css';
class ReportingArea extends React.Component {
  render(){
    return(
      <div>
        <h2 className={styles.heading}>Reporting</h2>
        <div className={styles.reported} id="reportingArea"></div>
      </div>
    );
  }
}
export default ReportingArea;
