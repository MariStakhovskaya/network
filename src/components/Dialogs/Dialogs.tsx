import styles from './Dialogs.module.scss'

const Dialogs = () => {
    return <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>
          <div className={styles.item}>Masha</div>  
          <div className={styles.item}>Kostja</div>  
          <div className={styles.item}>Sasha</div>  
          <div className={styles.item}>Semen</div>  
        </div>

        <div className={styles.messages}>
          <div className={styles.messageItem}>Hi</div>  
          <div className={styles.messageItem}>How gdfs</div>  
          <div className={styles.messageItem}>ytrhgefwdsa gerfw</div>  
          <div className={styles.messageItem}>trgew retg</div>  
        </div>
    </div>
}

export default Dialogs