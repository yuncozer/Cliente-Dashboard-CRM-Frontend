import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import img_logo from "../../public/img/user.jpg"
import { RiArrowDownSLine, RiSettings4Line, RiDoorOpenLine } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { useAuth } from '../context/authContext';


const Header = () => {

  const { user, logout } = useAuth();
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");
  const dashboard = '/dashboard';

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      setError(error.message)
    }
  }
  return (
    <header className='h-[60px] border-b border-secondary-100 p-2 grid grid-cols-2 items-end'>
      <div className='justify-self-start'>
        <Link to={`/${layout}`}
          className={`capitalize text-sm md:text-xl ${(pathname === dashboard) ? 'font-bold' :
            'text-gray-500'}  hover:text-primary transition-colors`}>{layout} </Link>/
        <Link to={`/dashboard/${page}`}
          className='capitalize font-bold text-sm md:text-xl hover:text-primary transition-colors'> {page}
        </Link>
      </div>
      <nav className='flex items-center gap-x-2 justify-end'>
        <Menu
          menuButton={
            <MenuButton className='flex items-center gap-x-2 hover:bg-secondary-100 pt-2 pb-0.5 px-4 rounded-lg transition-colors'>
              <img src={user.photoURL || img_logo} className="w-6 h-6 md:w-8 md:h-8 object-cover rounded-full" />
              <span className='font-semibold text-sm md:text-lg text-white uppercase'>{user.displayName || user.email}</span>
              <RiArrowDownSLine />
            </MenuButton>} align="end"
          arrowClassName="bg-secondary-100"
          transition
          menuClassName="bg-secondary-100 p-4">
          <div className="p-0 hover:bg-transparent">
            <div className='rounded-lg transition-colors text-gray-300 hover:bg-secondary-100 flex items-center gap-x-4 py-2 px-6'>
              <img src={user.photoURL || img_logo} className="w-8 h-8 object-cover rounded-full" />
              <div className='flex flex-col text-sm'>
                <span className='text-sm'>{user.displayName || user.email}</span>
                <span className='text-xs text-gray-500'>{user.displayName && user.email}</span>
              </div>
            </div>
          </div>
          <hr className='my-4 border-gray-500' />
          <MenuItem className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900">
            <Link className='flex items-center gap-x-4'>
              <RiSettings4Line />Settings
            </Link>
          </MenuItem>
          <MenuItem className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900">
            <Link onClick={handleLogout} className='flex items-center gap-x-4'>
              <RiDoorOpenLine />Logout
            </Link>
          </MenuItem>
        </Menu>
      </nav>
    </header>
  )
}

export default Header