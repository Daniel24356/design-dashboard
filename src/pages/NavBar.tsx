import { Link } from "react-router-dom"


function NavBar() {
  const UserId = localStorage.getItem("UserId")
  return (
    <>
    <nav>
      {!UserId?(
        <>
        <Link to="/" style={{padding:"12px"}}>Home</Link>
        <Link to="/about" style={{padding:"12px"}}>About</Link>
        <Link to="/contact" style={{padding:"12px"}}>Contact</Link>
        <Link to="/userlist" style={{padding:"12px"}}>User List</Link>
        <Link to="/register" style={{padding:"12px"}}>Register</Link>
        <Link to="/login" style={{padding:"12px"}}>Login</Link>
        </>
      ):(
        <>
        <Link to="/logout" style={{padding:"12px"}}>Logout</Link>
        <Link to="/profile" style={{padding:"12px"}}>Profile</Link>
        </>
      )}
  
    </nav>
    </>
  )
}

export default NavBar