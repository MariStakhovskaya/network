import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss'
import { PATH } from '../../App';

const Navbar = () => {
    return   <nav className={styles.nav}>
    <div>
        <NavLink to={PATH.PROFILE} className={({ isActive }) => isActive ? styles.active : styles.item}>Profile</NavLink>
        </div>
    <div>
        <NavLink to={PATH.DIALOGS} className={({ isActive }) => isActive ? styles.active : styles.item}>Messages</NavLink>
    </div>
    <div className={styles.item}><a>News</a></div>
    <div className={styles.item}><a>Music</a></div>
    <div  className={styles.item}><a>Settings</a></div>
   </nav>
   }
    
    export default Navbar;