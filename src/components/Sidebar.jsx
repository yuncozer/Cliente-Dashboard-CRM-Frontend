import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    RiBarChart2Line,
    RiEarthLine,
    RiArrowRightSLine,
    RiMenu3Fill,
    RiCloseFill,
    RiDownload2Fill,
    RiDashboard2Fill,
    RiDoorOpenLine

}
    from "react-icons/ri";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useAuth } from '../context/authContext';

const Sidebar = () => {

    const [error, setError] = useState()
    const { logout } = useAuth()

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            setError(error.message)
        }
    }

    // Hook Location Page

    const { pathname } = useLocation();
    const [page] = pathname.split("/").slice(2, 3).filter((el) => el !== "");

    // Screenshot view page and donwload pdf file

    var today = new Date();
    const [showMenu, setShowMenu] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);
    const exportPDF = () => {
        const input = document.getElementById("Page")
        html2canvas(input, { logging: true, letterRendering: 1, useCORS: true }).then(canvas => {
            const imgWidth = 208;
            const imgHeight = canvas.height * imgWidth / canvas.width;
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            pdf.save(`${today}dashboard_crm.pdf`)
        })
    }


    return (
        <>
            {/* Menu */}
            <div id="Sidebar" className={`bg-secondary-100 xl:h-[100vh] overflow-y-auto fixed xl:static w-[80%] sm:w-[40%] md:w-[40%] lg:w-[30%] xl:w-auto
                        h-full top-0 p-4 flex flex-col justify-between z-50 ${showMenu ? 'left-0' : '-left-full'} transition-all`}>
                <div>
                    <h1 className='flex items-center text-center text-2xl font-bold text-white mb-10'>
                        <RiDashboard2Fill className='text-primary mr-2' />Dashboard CRM 
                    </h1>
                    {/* Items */}
                    <ul>
                        {/* CRM Objects */}
                        <li>
                            <button className='flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors w-full'
                                onClick={() => setShowSubMenu(!showSubMenu)}>
                                <span className='flex items-center gap-4'>
                                    <RiEarthLine className='text-primary' />CRM Objects
                                </span>
                                <RiArrowRightSLine className={`mt-1 ${showSubMenu && 'rotate-90'} transition-all`} />
                            </button>
                            {/* Sub-menu objects crm */}
                            <ul className={` ${showSubMenu ? 'h-fit' : 'h-0'}
                                        overflow-y-hidden transition-all`
                            }>
                                <li>
                                    <Link to='/dashboard/contacts' className='py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3
                                                    before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px]
                                                    before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 
                                                    hover:text-white hover:before:bg-primary transition-colors'>
                                        Contacts
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/companies' className='py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3
                                                    before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px]
                                                    before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100
                                                    hover:text-white hover:before:bg-primary transition-colors'>
                                        Companies
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/deals' className='py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3
                                                    before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px]
                                                    before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100
                                                    hover:text-white hover:before:bg-primary transition-colors'>
                                        Deals
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        {/* Account Manager Activity */}
                        <li>
                            <Link className='flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'
                                to='/dashboard/accountmanagers'>
                                <RiBarChart2Line className='text-primary' />Account Manager Activity
                            </Link>
                        </li>
                        {/* DownLoad views */}
                        {page ?
                            <li>
                                <Link onClick={() => exportPDF()} className='flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'>
                                    <RiDownload2Fill className='text-primary' />Download View
                                </Link>
                            </li> : <div />
                        }
                    </ul>
                </div>
                <nav>
                    <Link onClick={() => handleLogout()}
                        className='flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'>
                        <RiDoorOpenLine className='text-primary' />Log out
                    </Link>
                </nav>
            </div>
            {/* Boton Menu Responsive */}
            <button onClick={() => setShowMenu(!showMenu)}
                className='xl:hidden fixed bottom-4 right-4 bg-primary text-black p-3 rounded-full z-50'>
                {!showMenu ? <RiMenu3Fill /> : <RiCloseFill />}
            </button>
        </>
    )
}

export default Sidebar;
