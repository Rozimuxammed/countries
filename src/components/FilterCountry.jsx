import React from 'react'

export default function FilterCountry({ regions, handleChange, handleInput }) {
    return (
        <div className='container mx-auto px-4'>
            <form className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8'>
                <label className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-md shadow px-4 py-2 w-full sm:w-1/2">
                    <svg className="h-5 w-5 opacity-50 text-gray-500 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input
                        onChange={handleInput}
                        type="search"
                        required
                        placeholder="Search for a country…"
                        className="w-full bg-transparent outline-none  dark:text-white"
                    />
                </label>

                <select
                    onChange={handleChange}
                    defaultValue="Filter by Region"
                    className="select bg-white dark:bg-gray-800 shadow px-4 py-2 rounded-md text-gray-700 dark:text-white w-full sm:w-1/4"
                >
                    <option disabled={true}>Filter by Region</option>
                    {
                        regions.map((region, index) => (
                            <option key={index} value={region}>{region}</option>
                        ))
                    }
                </select>
            </form>
        </div>
    )
}
