import { useState } from 'react';
import NavItem from '../NavItem';
import styles from './MobileMenu.module.css';
import { IoClose } from 'react-icons/io5';
import { IoMenu } from 'react-icons/io5';

const MobileMenu = ({updateFunction}) => {
  const [menuOpen, setMenuOpen] = useState(null); 

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavItemClick = () => {
    console.log("NavItem clicked");
    setMenuOpen(false); 
  };

  return (
    <div className={styles.MobileMenu}>
      <nav onClick={handleClick} className={styles.navIcons}>
        {menuOpen ? ( 
          <IoClose className={styles.menuIcon} />
        ) : (
          <IoMenu className={styles.menuIcon} />
        )}
      </nav>
      <div className={menuOpen ? styles.mobileMenuItemOpen : styles.mobileMenuItem}>
          <NavItem updateFunction={updateFunction}  onClick={handleNavItemClick}  currentPage="Home"/>
          <NavItem updateFunction={updateFunction}  onClick={handleNavItemClick}  currentPage="SKILLS"/>
          <NavItem updateFunction={updateFunction}  onClick={handleNavItemClick}  currentPage="PROJECTS"/>
          <NavItem updateFunction={updateFunction}  onClick={handleNavItemClick}  currentPage="CONTACT"/>
      </div>
    </div>
  );
};

export default MobileMenu;