import React, { useState } from 'react';
import { RiMailFill, RiUserLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { Password } from '../../components/Password';

export const Register = () => {



  return (
    <div  className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
      <h1 className='text-3xl uppercase font-bold tracking-[5px] text-white mb-8 text-center'>Registro de Usuario</h1>
      <form className='mb-8'>
        <button className='flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full rounded-full mb-8 text-gray-100'>
          <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                className='w-4 h-4'
          />
          Ingresa con Google
        </button>
        <div className='relative mb-4'>
          <RiUserLine className='absolute top-1/2 -translate-y-1/2 left-2 '/>
          <input type="text"
                 className=' py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary'
                 placeholder='Nomre y Apellido'
          />
        </div>
        <div className='relative mb-4'>
          <RiMailFill className='absolute top-1/2 -translate-y-1/2 left-2 '/>
          <input type="email"
                 className=' py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary'
                 placeholder='Correo Electronico'
          />
        </div>
        <Password placeholder={'Contraseña'}/>
        <Password placeholder={'Confirmar Contraseña'}/>
        <div>
          <button type='submit' className='bg-primary w-full text-secondary-100 py-3 px-4 rounded-lg  hover:text-white hover:bg-secondary-900 transition-colors uppercase font-bold'>
            Registrarme
          </button>
        </div>
      </form>
      <div className='flex flex-col items-center gap-4'>
          <span className='flex items-center gap-2'>
            ¿Ya tienes cuenta?  
            <Link  to="/" 
                className='text-primary/80 hover:text-gray-100 transition-colors'> 
                Ingresa
            </Link>
          </span>
      </div>
    </div>
  )
}
