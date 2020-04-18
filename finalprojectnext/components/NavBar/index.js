import Head from 'next/head';
import Link from 'next/link';
import styles from './component.module.css';

class NavBar extends React.Component {
  render(){
    return(
      <div className={styles.grid}>
        <Head>
          <title>James Clement</title>
        </Head>
        <Link href="/index">
          <a className={styles.home}><h1 className={styles.top}>Home</h1></a>
        </Link>
        <Link href="/aboutme">
          <a className={styles.about}><h1 className={styles.top}>About Me</h1></a>
        </Link>
        <Link href="/contact">
          <a className={styles.contact}><h1 className={styles.top}>Contact</h1></a>
        </Link>
      </div>
    );
  }
}
export default NavBar;
