
import styles from "./NavItem.module.css"

const NavItem = ({ currentPage, updateFunction, onClick}) => {
    const handleClick = () => {
        {currentPage === "Home" ? updateFunction(null) : updateFunction(currentPage.toLowerCase())}
        if (onClick) {
          onClick();
        }
    }
  return (
    <a className={styles.navItem} onClick={handleClick}>
      {currentPage}
    </a>
  );
};

export default NavItem;
