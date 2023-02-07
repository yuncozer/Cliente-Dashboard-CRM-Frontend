import React, { useState } from 'react';
import { RiMailFill, RiLockFill, RiEyeFill, RiEyeOffFill } from "react-icons/ri";

export const Password = ({placeholder}) => {

    const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className='relative mb-4'>
          <RiLockFill className='absolute top-1/2 -translate-y-1/2 left-2'/>
          <input type={showPassword ? "text" : "password"}
                 className='py-3 pl-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary'
                 placeholder={placeholder}
          />
          { showPassword ? (
            <RiEyeFill  onClick={() => setShowPassword(!showPassword)} 
                        className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer'/>
            ) : (
                  <RiEyeOffFill onClick={() => setShowPassword(!showPassword)} 
                                className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer'/>

                )
          }
    </div>
  )
}
