   import { Link } from "react-router-dom";
 function NavHead(){
     return (
        <>
        <Link to="/">Home</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
        <Link to="/userList">UserList</Link>
        <Link to="/login">Login</Link>
        </>
     )
   }
   export default NavHead