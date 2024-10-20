import React, { useState } from 'react'

const Login = () => {


    const [email, setEmail] = useState('')

    const [password, setpassword] = useState('')

    const submitHandler = (e) => {

        e.preventDefault()
        console.log("Email is ", email, "Password is", password);
         setEmail("")
         setpassword("")
    }

    return (
        <div className='flex items-center justify-center h-screen w-screen'>
            <div className='border-2 rounded-xl border-red-600 p-20'>
                <form onSubmit={(e) => { submitHandler(e) }} className='flex flex-col items-center justify-center'>
                    <input
                        onChange={(e) => {
                            setEmail(e.target.value)

                        }}
                        value={email}

                        required className=' text-gray-200 bg-transparent outline-none border-2 border-red-600 text-xl rounded-full px-5 py-3 placeholder:text-white' type="email" name="" id="" placeholder='Enter your Email' />

                    <input

                        value={password}
                        onChange={(e) => {
                            setpassword(e.target.value)
                        }}
                        required className=' text-gray-200 bg-transparent outline-none border-2 border-red-600 mt-3 text-xl rounded-full px-5 py-3 placeholder:text-white' type="password" name="" id="" placeholder='Enter your Password' />


                    <button className=' text-white bg-transparent outline-none border-2 border-red-600 mt-4 text-xl rounded-full px-5 py-3 '>Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Login
