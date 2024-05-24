import styles from './Dialogs.module.scss'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = () => {
const dialogData = [
  {name: 'Masha', id:'1'},
  {name: 'Sasha', id:'2'},
  {name: 'Pasha', id:'3'}
] 

const messageData = [
  {message: 'Hi', id:'1'},
  {message: 'Yo', id:'2'},
  {message: 'Tschuss', id:'3'}
] 


    return <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>
          {dialogData.map((dialog) => {
            return <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>
          })}
          
        </div>

        <div className={styles.messages}>
          {messageData.map((message) => {
            return <Message key={message.id} message={message.message}/>
          })}
          
        </div>
    </div>
}

export default Dialogs