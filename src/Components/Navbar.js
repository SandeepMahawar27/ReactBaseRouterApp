import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import { toast } from 'react-toastify';

const Navbar = (props) => {
      
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn
    return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

        <Link to='/'>
              <img src={logo} alt="" className='' width={160} height={32} loading='lazy'/>
        </Link>

        <nav className=''>
            <ul className='flex gap-x-6 text-white'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

        {/* Login - Signup - Logout - Dashboard */}

        <div className='flex items-center gap-x-4'>
            {!isLoggedIn &&
                <Link to="/login">
                    <button className='bg-green-400 text-white py-[8px] rounded-[8px] border
                     border-green-400 w-[100px]'>
                        Login
                    </button>
                </Link>
            }
            {!isLoggedIn &&
                <Link to="/Signup">
                    <button className='bg-green-400 text-white py-[8px] rounded-[8px] border
                     border-green-400 w-[100px]'>
                        Sign Up
                    </button>
                </Link>
            }
            {isLoggedIn &&
                <Link to="/logout">
                    <button className='bg-green-400 text-white py-[8px] rounded-[8px] border
                     border-green-400 w-[100px]' onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged out");
                    }}>
                        Logout
                    </button>
                </Link>
            }
            {isLoggedIn&&
                <Link to="/dashboard">
                    <button className='bg-green-400 text-white py-[8px] rounded-[8px] border
                     border-green-400 w-[100px]'>
                        Dashboard
                    </button>
                </Link>
            }
        </div>
 
    </div>
  )
}

export default Navbar