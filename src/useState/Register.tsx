import { ChangeEvent, FormEvent, useState } from 'react'
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import axios from "axios";

interface RegisterData {
    fullName: string
    password: string
    email: string
}

function Register() {

    const [registerData, setRegisterData] = useState<RegisterData>({
        fullName: "",
        password: "",
        email: "",
    })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setRegisterData((prevData) => ({ ...prevData, [name]: value }))
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        console.log(registerData);

        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', registerData)
            console.log("The response", response.data);
            Swal.fire({
                title: "Sucessful!",
                text: "You have succesfully registered",
                icon: "success"
            });
            // Add sweet alert for succesfully added

        }
        catch (error) {
            console.log(`error in fetching data ${error}`);
            Swal.fire({
                title: "Error!",
                text: "There has been an error in registering!",
                icon: "error"
            });
            // Add sweet alert for error
        }
    }

    return (

        <>
            <div className="container-fluid" style={{ marginTop: "20px", width: "300px" }}>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="fullName" className='form-label'>Full Name</label>
                        <input type="text" className='form-control' value={registerData.fullName} onChange={handleInputChange} name='fullName' id='fullName' aria-describedby='fullName' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input type="email" className='form-control' value={registerData.email} onChange={handleInputChange} name='email' id='email' aria-describedby='email' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className='form-label'>Password</label>
                        <input type="password" className='form-control' value={registerData.password} onChange={handleInputChange} name='password' id='password' aria-describedby='password' />
                    </div>
                    <button type='submit' className='btn btn-primary'>Register</button>
                </form>
            </div>
        </>

    )
}

export default Register