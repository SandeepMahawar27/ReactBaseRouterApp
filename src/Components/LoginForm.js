import React, { useState } from 'react'
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const LoginForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({email: "", password: ""})
    const [showPassword, setShowPassword] = useState(false)
    const changeHandler = (event) =>{
        setFormData( (prevData) => (
          {
            ...prevData,
           [event.target.name] : event.target.value

          }
        ))
    }
    const submitHandler = (event) => {
             event.preventDefault();
             setIsLoggedIn(true);
             toast.success("Logged In");
             navigate("/dashboard")
    }
  return (
    
        <form action="" onSubmit={submitHandler} 
        className='flex flex-col w-full gap-y-4 mt-6'
        >
           <label htmlFor="" className='w-full'>
              <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>
                Email Address <sup className='text-pink-200'>*</sup>
              </p>
              <input type="email" 
                     required
                     value={formData.email}
                     onChange={changeHandler}
                     placeholder='Enter email address'
                     name='email'
                     className='bg-purple-100 rounded-[0.5rem] text-purple-800 w-full p-[12px]'
           />
           </label>

           <label htmlFor="" className='w-full relative'>
              <p  className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>
                Password<sub className='text-pink-200'>*</sub>
              </p>
              <input type={showPassword ? ("text") : ("password")} 
                     required
                     value={formData.password}
                     onChange={changeHandler}
                     placeholder='Enter Password'
                     name='password'
                     className='bg-purple-100 rounded-[0.5rem] text-purple-800 w-full p-[12px]'
           />
           <span
           className='absolute right-3 top-[40px] cursor-pointer '
            onClick={() => setShowPassword( (prev) => !prev)}>
            {showPassword ? 

            (<AiOutlineEyeInvisible fontSize={24} color='text-black'/>)

             : (<AiOutlineEye fontSize={24} color='text-black'/>)}
           </span>

           <Link to="#">
            <p className='text-x5 mt-1 text-purple-100 max-w-max ml-auto'>
                Forget Password
            </p>
           </Link>
           </label>
           
           <button className='bg-yellow-400 rounded-[8px] font-medium px-[12px] py-[8px]
           text-white mt-5'>
                 Sign In
           </button>
        </form>
    
  )
}

export default LoginForm