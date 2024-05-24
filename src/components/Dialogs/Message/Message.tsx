import styles from './Message.module.scss'

type MessageType = {
    message: string,
}

const Message = ({message}: MessageType) => {
    return <div className={styles.messageItem}>{message}</div>  
}

export default Message