import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";

   
  interface PracReg{
    FullName: string;
    Email: string;
    Password: string;
  }

   function RegisterPrac(){
     const [user,setUser] = useState<PracReg>({
        FullName:'',
        Email:'',
        Password:''
     })

     const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name,value} = e.target
        setUser((prevData) => ({...prevData ,[name]:value}))
     }
     
     const handleSubmit = async (e:FormEvent) => {
            e.preventDefault()
            try{
             const response = await axios.post('https://fakestoreapi.com/products',user)
              console.log('fetch data succesful', response.data)
            }catch(error){
                console.log('Failed to fetch data' + error)
            }
     }

    return(
        <>
       <form onSubmit={handleSubmit}>
         <div>
        <label htmlFor="FullName">FullName</label>
         <input type="text" name="FullName" value={user.FullName} onChange={handleInputChange} />
         </div>
         <div>
        <label htmlFor="Email">Email</label>
         <input type="email" name="Email" value={user.Email} onChange={handleInputChange}/>
         </div>
         <div>
         <label htmlFor="Password">Password</label>
         <input type="password" name="Passwod" value={user.Password} onChange={handleInputChange} />
         </div>
       </form>
        </>
    )
   }
   export default RegisterPrac