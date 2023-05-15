import React, { useState } from "react";
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [show1Password, setShow1Password] = useState(false)
  const [show2Password, setShow2Password] = useState(false)
  const [accuntType, setAccountType] = useState("student")
  const changeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };
  const submitHandler = (event) => {
             event.preventDefault();
             if(formData.password !== formData.confirmPassword) {
                toast.error("Password Do not match");
                return;
             }
             else{
                setIsLoggedIn(true);
                toast.success("Account Create");
                // const accountData = {
                //     ...formData
                // };
                // // console.log("Printing account Data")
                // // console.log(accountData)
                // const finalData = {
                //   ...accountData,
                //   accuntType
                // }
                // console.log("Printing account Data")
                // console.log(finalData)
             }

             navigate("/dashboard")

    }
  return (
    <div className="">
      {/* Student - Instructot tab */}
      <div className="flex bg-purple-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
        
        <button onClick={() => {
          setAccountType("student")
        }}
        className={`${accuntType === "student" ? 
         "bg-black text-white"
         : "bg-transparent text-red-200"} py-2 px-5 rounded-full transition-all duration-200 `}
        >Student</button>
       
        <button onClick={() => {
          setAccountType("instructor")
        }}
        className={`${accuntType === "instructor" ? 
        "bg-black text-white"
         : "bg-transparent text-red-200"} py-2 px-5 rounded-full transition-all duration-200`}
        >Instructor</button>
      </div>

      <form action="" onSubmit={submitHandler}>
      {/* first name and last name */}
        <div className="flex justify-between mt-4 m-b-4">
          <label className="">
          <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>
              First Name <sup>*</sup>
            </p>
            <input
              type="text"
              required
              name="firstname"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstname}
              className='bg-purple-100 rounded-[0.5rem] text-purple-800 w-full p-[12px]'
            />
          </label>
          <label>
          <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>
              Last Name <sup className='text-pink-200'>*</sup>
            </p>
            <input
              type="text"
              required
              name="lastname"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastname}
              className='bg-purple-100 rounded-[0.5rem] text-purple-800 w-full p-[12px]'
            />
          </label>
        </div>
             {/* email Add */}
             <div className="mt-4">
             <label className="">
             <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>
             Email Address 
             <sup className='text-pink-200'>*</sup></p>
                <input type="email" 
                required
                name='email'
                onChange={changeHandler} 
                placeholder='Enter Email Address'
                value={formData.email}
                className='bg-purple-100 rounded-[0.5rem] text-purple-800 w-full p-[12px]'
                />
             </label>
             </div>

             {/* CreatePassword and Confirm Password */}
             <div className="flex gap-x-10 mt-4">
             <label className="w-full relative">
             <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>
                <input  type={show1Password ? ("text") : ("password")}
                required
                name='password'
                onChange={changeHandler} 
                placeholder='Enter Password'
                value={formData.password}
                className='bg-purple-100 rounded-[0.5rem] text-purple-800 w-full p-[12px]'
                />
                <span 
                className='absolute right-3 top-[40px] cursor-pointer '
                onClick={() => setShow1Password( (prev) => !prev)}>
            {show1Password ? 
            (<AiOutlineEyeInvisible fontSize={24} color='text-black'/>) 
            : (<AiOutlineEye fontSize={24} color='text-black'/>)}
           </span>
             </label>

             <label className="w-full relative">
             <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>
                <input  type={show2Password ? ("text") : ("password")}
                required
                name='confirmPassword'
                onChange={changeHandler} 
                placeholder='Confirm Password'
                value={formData.confirmPassword}
                className='bg-purple-100 rounded-[0.5rem] text-purple-800 w-full p-[12px]'
                />
                <span
                className='absolute right-3 top-[40px] cursor-pointer '
                 onClick={() => setShow2Password( (prev) => !prev)}>
                    {show2Password ? 
                    (<AiOutlineEyeInvisible fontSize={24} color='text-black'/>) 
                    : (<AiOutlineEye fontSize={24} color='text-black'/>)}
                </span>
             </label>
             </div>

             <button className='w-full bg-yellow-400 rounded-[8px] font-medium px-[12px] py-[8px]
           text-white mt-2'>
                Create Account
             </button>

      </form>
    </div>
  );
};

export default SignupForm;
