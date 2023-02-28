import React, { useState } from 'react';
import { RiMailFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

export const ForgetPassword = () => {

  const [emailResetPass, setEmailResetPass] = useState('');
  const [messageSucesfull, setMessageSucesfull] = useState('')
  const [error, setError] = useState('');

  const { resetPassword } = useAuth();

  const handleChange = ({ target: { value } }) => setEmailResetPass(value)
  
  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!emailResetPass) return setError("Please enter your email");
    try {
      await resetPassword(emailResetPass)
      setMessageSucesfull("We sent an email with a link to reset your password. Reset and login again");
    } catch (error) {
      (error.code == "auth/invalid-email") ?
        setError("Error: enter a valid email") :
        (error.code == "auth/user-not-found") ?
          setError("Error: Unregistered email") :
          setError(error.message);
    }
  }

  return (
    <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
      <h1 className='text-3xl uppercase font-bold tracking-[5px] text-white mb-8 text-center'>Reset Password</h1>
      <form className='mb-8'>
        <div className='relative mb-8'>
          <RiMailFill className='absolute top-1/2 -translate-y-1/2 left-2 ' />
          <input onChange={handleChange}
            type="email"
            name='email'
            className=' py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary'
            placeholder='Email'
            required
          />
        </div>
        <div>
          {(!messageSucesfull) ?
            <button onClick={(e) => handleResetPassword(e)}
              type='Submit'
              className='bg-primary w-full text-secondary-100 py-3 px-4 rounded-lg  hover:text-white hover:bg-secondary-900 transition-colors uppercase font-bold'>
              Send
            </button> :
            <Link to="/"
              type='button'
              className='text-center bg-primary w-full text-secondary-100 py-3 px-4 rounded-lg  hover:text-white hover:bg-secondary-900 transition-colors uppercase font-bold'>
              Go back
            </Link>
          }
        </div>
      </form>

      {error && <p className='p-1 mb-2 rounded-md border-4 border-red-700 bg-transparent/50 text-red-600  text-xl text-center font-bold'>{error}</p>}
      {messageSucesfull && <p className='p-1 mb-2 rounded-md border-4 border-green-700 bg-transparent/50 text-green-600 text-xl text-center font-bold'>{messageSucesfull}</p>}

      <div className='flex flex-col items-center gap-4'>
        <span className='flex items-center gap-2'>
          ¿You have an account? <Link to="/"
            className='text-primary/80 hover:text-gray-100 transition-colors'>
            Sing in
          </Link>
        </span>
        <span className='flex items-center gap-2'>
          ¿You haven't account? <Link to="/registro"
            className='text-primary/80 hover:text-gray-100 transition-colors'>
            Sing up
          </Link>
        </span>
      </div>
    </div>
  )
}
