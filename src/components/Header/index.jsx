import Navbar from '../Navbar/DesktopMenu/index.jsx';
import styles from './Header.module.css'
import MobileMenu from '../Navbar/MobileMenu/index.jsx';

const Header = ({pageTitle, updateFunction}) => {
    return (
       <header className={styles.header}>
        <h1>{pageTitle}</h1>
        <Navbar updateFunction={updateFunction}/>
        <MobileMenu updateFunction={updateFunction}/>
       </header>
    )
};

export default Header
