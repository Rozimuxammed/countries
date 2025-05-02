import React from 'react'
import { HiOutlineMoon } from 'react-icons/hi'
import { LuSun } from 'react-icons/lu'

export default function Navbar({ handleMode, mode }) {
    return (
        <nav className='shadow-md backdrop-blur-xs bg-white dark:bg-gray-800'>
            <div className="container mx-auto flex justify-between items-center py-4 px-4">
                <div className="w-full sm:w-auto text-center sm:text-left sm:mb-0">
                    <a href='#' className='sm:text-[18px] md:text-xl lg:text-2xl font-extrabold dark:text-white text-gray-900'>
                        Where in the world?
                    </a>
                </div>
                <div className="w-full sm:w-auto text-center sm:text-right">
                    <button
                        className='flex justify-center sm:justify-end items-center gap-2 text-gray-800 dark:text-white cursor-pointer mx-auto sm:mx-0'
                        onClick={handleMode}
                    >
                        {mode === "light" ? (
                            <>
                                <LuSun className='sm:text-[18px] md:text-xl lg:text-2xl' />
                                <span className='text-sm font-semibold'>Light Mode</span>
                            </>
                        ) : (
                            <>
                                <HiOutlineMoon className='sm:text-[18px] md:text-xl lg:text-2xl' />
                                <span className='text-sm font-semibold'>Dark Mode</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    )
}
