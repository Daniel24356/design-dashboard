import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './home'
import About from './about'
import Contact from './contact'
import NavBar from './NavBar'
import NotMatch from './NotMatch'
import UserList from '../APICALL/UserList'
import Register from '../useState/Register'
import Login from './Login'
import { ToastContainer } from 'react-toastify'
import Dashboard from './Dashboard'

function AppRouter() {
  return (
    <Router>
        <NavBar/>
        <ToastContainer />
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/userlist' element={<UserList/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path="*" element={<NotMatch/>}/>
        </Routes>
    </Router>
  )
}

export default AppRouter