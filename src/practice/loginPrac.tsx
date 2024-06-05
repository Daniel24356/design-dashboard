import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import Login from "../pages/Login";
import { toast } from "react-toastify";

    interface ILogin{
        Email: string;
        Password:string;
    }

   function LoginPrac(){

      const [login, setLogin] = useState<ILogin>({
        Email: '',
        Password:''
      })
      const [loading,setLoading] = useState(false)

      const handleLoginChange = (e:ChangeEvent<HTMLInputElement>) => {
         const {name,value} = e.target
         setLogin((prevData) => ({...prevData,[name]:value}))
      }

       const onSubmit = async (e:FormEvent) => {
          e.preventDefault()
            setLoading(true)
          try{
            const response = await axios.post('https://fakestoreapi.com/products',Login)
            console.log("The response",response.data.id)
             setLoading(true)
            
            localStorage.setItem('userId',response.data.id)

            toast.success("User logged in successfully",{
                // onClose:()=>navigate("/dashboard")
               })
               setLoading(false)
          }catch(error){
              console.log('Problem in fetching data' + error)
              toast.error('Login failed, invalid email or password')
          }
        
           
       }
    return (
        <>
        <form onSubmit={onSubmit}>
            <div>
          <label htmlFor="Email">Email</label>
          <input type="email" name="Email" value={login.Email} onChange={handleLoginChange} />
        </div>
        <div>
        <label htmlFor="Password">Password</label>
        <input type="password" name="Password"value={login.Password} onChange={handleLoginChange}/>
        </div>
        </form>
       <button type="submit" disabled={loading}>
        {loading? 'loading...':'Login'}
       </button>
        </>
    )
   }
   export default LoginPrac