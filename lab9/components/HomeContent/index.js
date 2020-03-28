import styles from './component.module.css';
class HomeContent extends React.Component {
  render(){
    return(
      <div>
        <h3 className={styles.bet}>
          We know that you love Pokemon as much as I do so make sure to catch up on all of the Pokemon knowledge that you might be interested in finding out!
        </h3>
      </div>
    );
  }
}
export default HomeContent;
