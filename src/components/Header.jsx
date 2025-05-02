import React from 'react'
import Navbar from './Navbar'
import FilterCountry from './FilterCountry'

export default function Header({ regions, handleChange, handleInput, handleMode ,mode }) {
    return (
        <header className='fixed flex flex-col gap-5 top-0 left-0 right-0 z-10'>
            <Navbar handleMode={handleMode} mode ={mode} />
            <FilterCountry handleChange={handleChange} regions={regions} handleInput={handleInput} />
        </header>
    )
}
