import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Password } from '../../components/Password';
import { RiMailFill, RiLockFill, RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { useAuth } from '../../context/authContext';


const Login = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({ email: '', password: '' });
  const [error, setError] = useState();
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  // const {displayName} = auth.user;


  const handleChange = ({ target: { name, value } }) => setUser({ ...user, [name]: value })

  const handleGoogle = async () => {
    try {
      await loginWithGoogle()
      navigate("/dashboard");
    } catch (error) {
      setError(error.message)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(user.email, user.password);
      navigate("/dashboard");
    } catch (error) {
      (error.code == "auth/invalid-email") ? 
        setError("Enter a valid email") :
      (error.code == "auth/wrong-password") ?
        setError("Password error") :
      setError(error.message)
    }
  }

  return (
    <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
      <h1 className='text-xl uppercase font-bold tracking-[3px] text-white mb-8 text-center'>Dashboard CRM Login</h1>
      {/* {(displayName) && <h1>{displayName}</h1>} */}
      {/* -------------------LOGIN GOOGLE--------------------------- */}        
      <button onClick={handleGoogle}
          className='flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 hover:bg-primary/50 hover:text-secondary-900 w-full rounded-full mb-8 text-gray-100'>
          <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
            className='w-4 h-4'
          />
          Sing in with Google
        </button>
      <form onSubmit={handleSubmit} className='mb-8'>
        {/* -------------------INPUT EMAIL--------------------------- */}
        <div className='relative mb-4'>
          <RiMailFill className='absolute top-1/2 -translate-y-1/2 left-2 ' />
          <input onChange={handleChange}
            type="email"
            name="email"
            className=' py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary'
            placeholder='Email'
          />
        </div>

        {/* -------------------INPUT PASSWORD--------------------------- */}
        <div className='relative mb-4'>

          <RiLockFill className='absolute top-1/2 -translate-y-1/2 left-2' />
          <input onChange={handleChange}
            type={showPassword ? "text" : "password"}
            name="password"
            className='py-3 pl-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary'
            placeholder="Password"
          />
          {showPassword ? (
            <RiEyeOffFill onClick={() => setShowPassword(!showPassword)}
              className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer' />
          ) : (
            <RiEyeFill onClick={() => setShowPassword(!showPassword)}
              className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer' />

          )
          }

        </div>
        <div>
          {/* -------------------Button Login--------------------------- */}
          <button type='submit'
            className='bg-primary w-full text-secondary-100 py-3 px-4 rounded-lg  hover:text-white hover:bg-secondary-900 transition-colors uppercase font-bold'>
            Sing in
          </button>
        </div>
      </form>
      {/* -------------------Error Message--------------------------- */}
      {error && <p className='m-2 text-red-700 font-bold text-center text-lg'>{error}</p>}

      {/* -------------------Loose Password--------------------------- */}
      <div className='flex flex-col items-center gap-4'>
        <Link to="/forgetPass" className='hover:text-primary transition-colors'>
          ¿Forgot Password?
        </Link>
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

export default Login;