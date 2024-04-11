import styles from './Navbar.module.css';
import NavItem from '../NavItem';

const Navbar = ({updateFunction}) => {
  return (
    <nav className={styles.navbar}>
      <NavItem updateFunction={updateFunction} currentPage="Home" />
      <NavItem updateFunction={updateFunction} currentPage="SKILLS" />
      <NavItem updateFunction={updateFunction} currentPage="PROJECTS" />
      <NavItem updateFunction={updateFunction} currentPage="CONTACT" />
    </nav>
  );
};

export default Navbar;
