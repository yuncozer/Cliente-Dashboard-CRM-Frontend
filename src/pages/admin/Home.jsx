import React from 'react';
import img_logo from "../../../public/img/logo.jpg"
import { RiLink } from "react-icons/ri";


export const Home = () => {


  return (

    <div className='flex flex-col text-center items-center justify-center mt-4 p-10 bg-gradient-to-br from-secondary-100 to-secondary-900 rounded-2xl'>
      <p className='text-xl sm:text-2xl md:text-4xl text-white font-bold'>
        Welcome to the Dashboard CRM
      </p>
      <p className='text-sm sm:text-md md:text-xl text-gray-500 font-bold'>
        Please select an option in the menu
      </p>
      <div className='flex felx-col gap-4 items-center'>
        <img src={img_logo} alt="logo" className='my-10 w-24 h-24 md:w-48 md:h-48 lg:w-72 lg:h-72 object-cover rounded-full' />
        <RiLink className='md:px-5 text-2xl sm:text-6xl md:text-8xl text-white animate-pulse' />
        <img src="https://pbs.twimg.com/profile_images/1500923494665797632/VytKgxOP_400x400.jpg" alt="logo_h"
          className='my-10  w-24 h-24 md:w-48 md:h-48 lg:w-72 lg:h-72 object-cover rounded-full' />
      </div>
    </div>
  )
}
