import styles from './componenet.module.css';
class SocialMediaBar extends React.Component {
  render(){
    return(
      <div className={styles.grid}>
        <div className={styles.socialtitle}>
            <h2>Social Medias</h2>
        </div>
        <div className={styles.end}>
          <a className={styles.sociallinks} href="https://www.facebook.com/james.clement.104"><p>Facebook: James Clement</p></a>
          <a className={styles.sociallinks} href="https://www.linkedin.com/in/james-clement-7ab66b194/"><p>LinkedIn: James Clement</p></a>
          <a className={styles.sociallinks} href="https://twitter.com/Baseball19k"><p>Twitter: Baseball19k</p></a>
          <a className={styles.sociallinks} href="https://www.instagram.com/baseball19k/"><p>Instagram: Baseball19k</p></a>
          <a className={styles.sociallinks} href="https://github.com/baseball19k"><p>GitHub: Baseball19k</p></a>
        </div>
      </div>
    );
  }
}
export default SocialMediaBar;
