import styles from './MyPosts.module.scss'
import Post from './Post/Post';

const MyPosts = () => {
    return <><div className={styles.postsBlock}>
      My posts
      <div>
        <textarea></textarea>
        <button>add</button>
        
      </div>
    </div>
    <div className={styles.posts}>
    <Post message='Hi' like='10' />
    <Post message='How are you?' like='42'/>
    </div>
   
    </>
   }
    
    export default MyPosts;