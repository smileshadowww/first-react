import styles from './NavBar.module.scss';
import Container from './../Container/Container';
// import Button from './../Button/Button';
import clsx from 'clsx';

const NavBar = () => {

  return (
    <nav className={styles.navbar}>
        <ul className={styles.inside}>
          <li>
          <a href="/"><span className={clsx("fa fa-home", styles.icon)}></span></a>
          </li>
        </ul>
        <ul className={styles.inside}>
          <li>
          <a href="/">Home</a>
          </li>
          <li>
          <a href="/favorite">Favorite</a>
          </li>
          <li>
          <a href="/about">About</a>
          </li>
        </ul>
    </nav>
  );
}

export default NavBar;
