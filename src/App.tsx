import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import './App.scss'
import Dialogs from './components/Dialogs/Dialogs'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import ErrorPage from './components/ErrorPage/ErrorPage'

export const PATH = {
  PROFILE: '/profile',
  DIALOGS: '/dialogs',
  NEWS: '/news',
  MUSIC: '/music',
  SETTINGS: '/settings',
  ERRORPAGE: '/errorpage'

} as const

function App() {


  return (
    <div className='app-wrapper'>
    <Header />
    <Navbar />
    <main className='app-wrapper-content'>

      <Routes>
      <Route path="/" element={<Navigate to={'/profile'}/>} />
        <Route path={PATH.PROFILE} element={<Profile />} />
        <Route path={PATH.DIALOGS} element={<Dialogs />} />
       
        <Route path='/dialogs/:userId' element={<Dialogs />} />

        <Route path="*" element={<ErrorPage/> } />


        {/* <Route path={PATH.ERRORPAGE} element={<ErrorPage />} />
        <Route path="*" element={<Navigate to={PATH.ERRORPAGE} />} /> */}
      </Routes>
    </main>
     
    </div>
  )
}

export default App
