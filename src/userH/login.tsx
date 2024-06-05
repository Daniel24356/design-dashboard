import { SubmitHandler, useForm } from 'react-hook-form'
interface UserLogin {
    email: string
    password: string
}

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<UserLogin>()

    const onSubmit: SubmitHandler<UserLogin> = (data) => {
        console.log(data);
    }
    return (
        <>
            <div>Login detail</div>
            <div style={{ width: "400px", marginLeft: "auto", marginRight: "auto" }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-3'>
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input type="email" {...register("email", { required: "Email is required" })}
                            className={`form-control ${errors.email ? "is-invalid" : ""}`}
                            id='email'
                            placeholder='Email' />
                        {errors.email && (
                            <div className='invalid-feedback'>{errors.email.message}</div>
                        )}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password" className='form-label'>Password</label>
                        <input
                            type="password"
                            className={`form-control ${errors.password ? "is-invalid" : ""}`}
                            {...register("password", { required: "Password is required", minLength: 5 })}
                            placeholder='Password' />
                        {errors.password && (
                            <div className='invalid-feedback'>{errors.password.message}</div>
                        )}
                    </div>
                    <button className='btn btn-primary'>Log in</button>
                </form>
            </div>
        </>
    )
}

export default Login