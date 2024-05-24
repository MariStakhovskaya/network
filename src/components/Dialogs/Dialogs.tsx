import styles from './Dialogs.module.scss'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = () => {
    return <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>
          <DialogItem name='Masha' id='1'/>
          <DialogItem name='Pasha' id='2'/>
        </div>

        <div className={styles.messages}>
          <Message message="Hi"/>
        </div>
    </div>
}

export default Dialogs