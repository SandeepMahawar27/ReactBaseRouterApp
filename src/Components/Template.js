import React from 'react'
import frameImage from '../assets/frame.png'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import {FcGoogle} from 'react-icons/fc'

const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {
  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto  justify-between gap-y-0'>

         <div className='w-11/12 max-w-[450px] mx-0'>
            <h1 className='text-white font-semibold text-[1.875rem] leading-[1.375]'>{title}</h1>
            <p className='text-[1.125rem] leadig-[1.625] mt-4'>
                <span className='text-blue-200'>{desc1}</span> <br />
                <span className='text-blue-200 italic'>{desc2}</span>
            </p>

            {formtype === "signup" ? 
            (<SignupForm setIsLoggedIn = {setIsLoggedIn}/>) : 
            (<LoginForm setIsLoggedIn = {setIsLoggedIn}/>)}

            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='h-[1px] w-full bg-blue-500'></div>
                <p className='text-blue-200 font-medium leading-[1.375] '>OR</p>
                <div className='h-[1px] w-full bg-blue-500'></div>
            </div>

            <button className='w-full flex justify-center items-center rounded-[8px] font-medium 
            text-blue-500 border border-blue-800 px-[12px] py-[8px] gap-x-2 mt-6'>
                <FcGoogle/>
                <p className='text-white'>Sign Up with Google</p>
            </button>
         </div>

         <div className='relative w-11/12 max-w-[450px]'>
            <img src={frameImage} alt="Pattern" 
                width={550}
                height={504}
                loading='lazy'
            />

            <img src={image} alt="Pattern" 
                width={550}
                height={490}
                loading='lazy'
                className='absolute -top-4 right-4'
            />
         </div>

    </div>
  )
}

export default Template