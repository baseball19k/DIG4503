import Head from 'next/head';
import Link from 'next/link';
import styles from './component.module.css';

class NavBar extends React.Component {
  render(){
    return(
      <div className={styles.grid}>
        <Head>
          <title>Find That Pokemon!</title>
        </Head>
        <div>
          <Link href="/index">
            <a className={styles.home}><h1 className={styles.top}>How do you want to Search?</h1></a>
          </Link>
          <br></br><ul className={styles.nav}>
          <li className={styles.li}><Link href="/type">
            <a className={styles.type}>Type</a>
          </Link></li><br></br>
          <li className={styles.li}><Link href="/id">
            <a className={styles.id}>ID</a>
          </Link></li><br></br>
          <li className={styles.li}><Link href="/name">
            <a className={styles.name}>Name</a>
          </Link></li>
          </ul><br></br>
        </div>
      </div>
    );
  }
}
export default NavBar
