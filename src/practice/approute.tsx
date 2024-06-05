import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../pages/home"
import NotMatch from "../pages/NotMatch"
import About from "../about"
import Login from "../pages/Login"
import RegisterPrac from "./register"
import Dashboard from "../pages/Dashboard"
import NavBar from "../pages/NavBar"
import { ToastContainer } from "react-toastify"

function AppRoutePrac() {
  return (
    <>
      <Router>
        <NavBar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPrac />} />
          <Route path="*" element={<NotMatch />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  )
}
export default AppRoutePrac