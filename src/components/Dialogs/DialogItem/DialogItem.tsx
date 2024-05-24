import { NavLink } from 'react-router-dom'
import styles from './DialogItem.module.scss'

type DialogItemType = {
    id: string,
    name: string,
}

const DialogItem = ({id, name}: DialogItemType) => {
    return (
            <div className={styles.item}>
             <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
            </div>  
    )
}

export default DialogItem