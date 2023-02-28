import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RiMailFill, RiLockFill, RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { useAuth } from '../../context/authContext';

export const Register = () => {

  const { register } = useAuth();

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [userRegister, setUserRegister] = useState({ email: '', password: '' });
  const [error, setError] = useState();

  // take changes of inputs
  const handleChange = ({ target: { name, value } }) => setUserRegister({ ...userRegister, [name]: value })

  // new users registre and navigate sing in
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await register(userRegister.email, userRegister.password)
      navigate("/")
    } catch (error) {
      (error.code == "auth/invalid-email") ?
        setError("Enter a valid email") :
        (error.code == "auth/weak-password") ?
          setError("Password should be at least 6 characters ") :
          setError(error.message)
    }
  }


  return (
    <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
      <h1 className='text-2xl uppercase font-bold tracking-[5px] text-white mb-8 text-center'>Account registration</h1>
      <form onSubmit={handleSubmit}
        className='mb-8'>
        {/* -------------------EMAIL--------------------------- */}
        <div className='relative mb-4'>
          <RiMailFill className='absolute top-1/2 -translate-y-1/2 left-2 ' />
          <input onChange={handleChange}
            type="email"
            name="email"
            className=' py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary'
            placeholder='Email'
          />
        </div>
        {/* -------------------PASSWORD--------------------------- */}
        <div className='relative mb-4'>
          <RiLockFill className='absolute top-1/2 -translate-y-1/2 left-2' />
          <input onChange={handleChange}
            type={showPassword ? "text" : "password"}
            name="password"
            className='py-3 pl-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary'
            placeholder="Password"
          />
          {showPassword ?
            (<RiEyeFill onClick={() => setShowPassword(!showPassword)}
              className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer' />) :
            (<RiEyeOffFill onClick={() => setShowPassword(!showPassword)}
              className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer' />)
          }
        </div>
        {/* -------------------Create Account--------------------------- */}
        <button type='submit'
          className='bg-primary w-full text-secondary-100 py-3 px-4 rounded-lg hover:text-white hover:bg-secondary-900 transition-colors uppercase font-bold'>
          Create Account
        </button>
      </form>
      {/* -------------------Error Message--------------------------- */}
      {error && <p className='p-1 mb-2 rounded-md border-4 border-red-700 bg-transparent/50 text-red-700 font-bold text-center text-lg'>Error: {error}</p>}

      <div className='flex flex-col items-center gap-4'>
        <span className='flex items-center gap-2'>¿You have an account?
          <Link to="/" className='text-primary/80 hover:text-gray-100 transition-colors'>Sing in</Link>
        </span>
      </div>
    </div>
  )
}
