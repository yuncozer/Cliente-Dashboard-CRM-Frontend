import React from 'react'
import { Link } from "react-router-dom";
import { RiAlertFill, RiArrowGoBackFill } from "react-icons/ri";

export const Error404 = () => {
  return (
    <div className='flex flex-col items-center mt-[20vh] gap-4'>
      <RiAlertFill className='text-8xl text-gray-400 animate-pulse' />
      <span className='text-5xl text-primary font-bold '>Error 404</span>
      <span className='text-center text-gray-200'>The page you are trying to access could not be found.</span>
      <Link to={"/dashboard"} className="bg-blue-gray-400 mt-4 p-3 rounded-lg">
        <RiArrowGoBackFill className='text-2xl text-secondary-100' />
      </Link>
    </div>
  )
}
