import styles from './MyPosts.module.scss'
import Post from './Post/Post';

const MyPosts = () => {

  const postsData = [
    {message: 'Hi', id:'1', like:'10'},
    {message: 'How are you?', id:'2', like:'12'},
  ] 

    return <><div className={styles.postsBlock}>
      My posts
      <div>
        <textarea></textarea>
        <button>add</button>
        
      </div>
    </div>
    <div className={styles.posts}>
      {postsData.map((post) => {
        return   <Post key={post.id} message={post.message} like={post.like} />
      })}
  
    
    </div>
   
    </>
   }
    
    export default MyPosts;