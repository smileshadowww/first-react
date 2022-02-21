import styles from './NavBar.module.scss';
import Container from './../Container/Container';
// import Button from './../Button/Button';
import { NavLink } from 'react-router-dom';
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
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}to="/">Home</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}to="/favorite">Favorite</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}to="/about">About</NavLink></li>
        </ul>
    </nav>
  );
}

export default NavBar;
