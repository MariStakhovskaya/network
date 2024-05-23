import { Navigate, Route, Routes } from 'react-router-dom'
import './App.scss'
import Dialogs from './components/Dialogs/Dialogs'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import ErrorPage from './components/ErrorPage/ErrorPage'

function App() {

  return (
    <div className='app-wrapper'>
    <Header />
    <Navbar />
    <main className='app-wrapper-content'>

      <Routes>
      <Route path="/" element={<Navigate to={'/profile'}/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dialogs" element={<Dialogs />} />
        <Route path="/errorpage" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to='/errorpage' />} />
      </Routes>
    </main>
     
    </div>
  )
}

export default App
