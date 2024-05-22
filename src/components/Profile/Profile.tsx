import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.scss'

const Profile = () => {
    return <main className={styles.main}>
    <div>
      <img src='https://previews.123rf.com/images/nataliagesto/nataliagesto1203/nataliagesto120300297/12622565-%D0%B4%D0%BB%D0%B8%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%B8%D0%B5-%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80-%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80%D1%8B-spalshing-%D0%B7%D0%B0%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B8-%D0%B3%D0%BE%D0%BB%D1%83%D0%B1%D1%8B%D0%B5-%D1%81%D0%B8%D0%BD%D0%B8%D0%B5-%D0%BA%D0%B0%D0%BF%D0%BB%D0%B8-%D0%B2%D0%BE%D0%B4%D0%B0-%D1%84%D0%BE%D0%BD%D1%8B.jpg'/>
    </div>
    <div>
      ava + description
    </div>
    <MyPosts />
   </main>
   }
    
    export default Profile;