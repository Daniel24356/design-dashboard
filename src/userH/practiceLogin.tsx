//  import {zodResolver} from "@hookform/resolver/zod";
// import React, { FormEvent } from "react";
import { SubmitHandler, useForm } from "react-hook-form"
//  import {z} from "zod";

// const signUpSchema = z.object({
//     email: z.string().email(),
//     password: z.string().min(10, "password is required"),
//     confirmPassword: z.string(),
// })
// .refine(data => data.password  ===  data.confirmPassword, {
//     message: "passwords must match",
//     path: ["confirmPassword"]
// })

//     type TsignUpSchema = z.infer<typeof FormwithReactHookForm>

interface UserLogin {
    email: string
    password: string
    confirmPassword: string
}

function FormwithReactHookForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        getValues,
    } = useForm<UserLogin>();
    //       const{
    //         register,
    //         handleSubmit,
    //         formState: {errors, isSubmitting},
    //         reset,
    //         getValues,
    //   } = useForm<TsignUpSchema>({
    //     resolver: zodResolver(signUpSchema),
    //   });

    const onSubmit: SubmitHandler<UserLogin> = async (data: any) => {

        await new Promise((resolve) => setTimeout(resolve, 1000))

        reset();
    }

    return (
        <>
            <div style={{ width: "400px", marginLeft: "auto", marginRight: "auto" }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-3'>
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input
                            type="email"
                            {
                            ...register('email', { required: "email is required" })
                            }
                            className={'form-control'}
                            id='email'
                            placeholder='Email' />
                        {
                            errors.email && (
                                <p className="text-red-500">{`${errors.email.message}`}</p>
                            )
                        }
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="password" className='form-label'>Password</label>
                        <input
                            {
                            ...register('password', {
                                required: "password is required",
                                minLength: {
                                    value: 10,
                                    message: "password must be at least 10 characters"
                                }
                            })
                            }
                            type="password"
                            className={`form-control`}
                            placeholder='Password' />
                        {errors.password && <p className="text-red-500">{`${errors.password.message}`}</p>}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="confirmPassword" className='form-label'>Confirm Password</label>
                        <input
                            {
                            ...register('confirmPassword', {
                                required: "ConfirmPassword is required",
                                validate: (value) =>
                                    value === getValues('password') || "password must match",
                            })
                            }
                            type="password"
                            className={`form-control`}
                            placeholder='confirmPassword' />
                        {errors.confirmPassword && <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>}
                    </div>
                    <button
                        disabled={isSubmitting}
                        className='btn btn-primary'>
                        Log in
                    </button>
                </form>
            </div>
        </>
    )
}
export default FormwithReactHookForm
