    import { Link } from "react-router-dom"

 function NavPrac(){
    const userId = localStorage.getItem('userId')
    return (
        <nav>
            {userId?(
            <>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
            <Link to="/register"> Register</Link>
            </>
            ):(
                <>
                <Link to="/logout" style={{padding:"12px"}}>Logout</Link>
                <Link to="/profile" style={{padding:"12px"}}>Profile</Link>
                </>
            )}
         
        </nav>
      
    )
  }

  export default NavPrac