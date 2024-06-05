import axios from 'axios'
import  { ChangeEvent, useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



interface ILogin{
    email:string
    password:string
}

function Login() {
    const navigate = useNavigate()

    const [loginData, setLoginData] = useState<ILogin>({
        email:"",
        password:""
    })
    const [loading, setLoading] = useState(false)

    const handleInputChange=(e:ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target
        setLoginData((prevData)=>({...prevData, [name]:value}))
    }

    const handleSubmit = async(e:FormEvent)=>{
        e.preventDefault()
        setLoading(true)
       // console.log(registerData);
       
        try{
           const response = await axios.post('https://fakestoreapi.com/products', loginData)
        //    const response = await axios.post('https://fakestoreapi.com/products', loginData)
           console.log("The response", response.data.id);
           setLoading(true)

        //Save token
           localStorage.setItem("UserId", response.data.id)
              
           toast.success("User logged in successfully",{
            onClose:()=>navigate("/dashboard")
           })
           setLoading(false)
        }
        catch(error){
           console.log(`Error in login ${error}`);
           toast.error("Login failed, invalid email or password")
        }
   }

  return (
    
    <>
    <div className="container-fluid" style={{marginTop:"20px", width:"300px"}}>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className='form-label'>Email</label>
                <input type="email" className='form-control' value={loginData.email} onChange={handleInputChange} name='email' id='email' aria-describedby='email'/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className='form-label'>Password</label>
                <input type="password" className='form-control' value={loginData.password} onChange={handleInputChange} name='password' id='password' aria-describedby='password'/>
            </div>
            <button type='submit' className='btn btn-primary' disabled={loading}>
                {loading ? 'Loading...':'Login'}
                </button>
        </form>
    </div>
    </>

  )
}

export default Login