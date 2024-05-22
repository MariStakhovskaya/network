import styles from './Post.module.scss'
type PostType = {
    message: string,
    like: string
}

const Post = (props: PostType) => {
    return  <div className={styles.item}>
        <span className={styles.avatar}>
        <img src='https://hips.hearstapps.com/hmg-prod/images/index-avatar-1665421955.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=1200:*' alt='avatar' />
        </span>
         {props.message}
         <div>
            {props.like}
            </div>
            </div>
 
   }
    
    export default Post;