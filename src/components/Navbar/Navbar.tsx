import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss'

const Navbar = () => {
    return   <nav className={styles.nav}>
    <div>
        <NavLink to='/profile' className={({ isActive }) => isActive ? styles.active : styles.item}>Profile</NavLink>
        </div>
    <div>
        <NavLink to='/dialogs' className={({ isActive }) => isActive ? styles.active : styles.item}>Messages</NavLink>
    </div>
    <div className={styles.item}><a>News</a></div>
    <div className={styles.item}><a>Music</a></div>
    <div  className={styles.item}><a>Settings</a></div>
   </nav>
   }
    
    export default Navbar;