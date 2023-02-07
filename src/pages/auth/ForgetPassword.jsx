import React from 'react';
import { RiMailFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

export const ForgetPassword = () => {
    
    return (
      <div  className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
        <h1 className='text-3xl uppercase font-bold tracking-[5px] text-white mb-8 text-center'>Recuperar Contraseña</h1>
        <form className='mb-8'>
          <div className='relative mb-8'>
            <RiMailFill className='absolute top-1/2 -translate-y-1/2 left-2 '/>
            <input type="email"
                   className=' py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary'
                   placeholder='Correo Electronico'
            />
          </div>
          <div>
            <button type='submit' className='bg-primary w-full text-secondary-100 py-3 px-4 rounded-lg  hover:text-white hover:bg-secondary-900 transition-colors uppercase font-bold'>
              Enviar
            </button>
          </div>
        </form>
        <div className='flex flex-col items-center gap-4'>
            <span className='flex items-center gap-2'>
              ¿Ya tienes cuenta? <Link  to="/" 
                                        className='text-primary/80 hover:text-gray-100 transition-colors'> 
                                        Ingresa
                                  </Link>
            </span>
            <span className='flex items-center gap-2'>
              ¿No tienes cuenta? <Link  to="/registro" 
                                        className='text-primary/80 hover:text-gray-100 transition-colors'> 
                                        Registrate
                                  </Link>
            </span>
        </div>
      </div>
    )
}
