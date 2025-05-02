import React, { useEffect } from 'react'

export default function Countries({ setCountries, countries, region, inpValue, setError, setLoader }) {


    useEffect(() => {
        let url = inpValue
            ? `https://restcountries.com/v3.1/name/${inpValue}`
            : `https://restcountries.com/v3.1/${region}`;

        setError(false);

        const fetchData = async () => {
            setLoader(true);
            try {
                const res = await fetch(url);
                if (res.status === 404) {
                    throw new Error(`No country found for "${inpValue}"`);
                }

                const data = await res.json();
                setCountries(data);
            } catch (err) {
                setCountries([]);
                setError(err.message);
            } finally {
                setLoader(false);
            }
        };

        fetchData();
    }, [region, inpValue, setCountries]);



    return (
        <div className='container mx-auto px-4 mt-24 sm:mt-10 md:mt-10  lg:mt-10'>
            <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {
                    countries.map((country, index) => (
                        <div
                            key={index}
                            className='min-h-[320px] bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02]'
                        >
                            <img
                                className='h-40 w-full object-cover'
                                src={country.flags.svg}
                                alt={country.name.common}
                            />
                            <div className='p-5 leading-[30px]'>
                                <h2 className='font-bold text-xl mb-3 text-gray-800 dark:text-white'>{country.name.common}</h2>
                                <p className='text-gray-700 dark:text-gray-300'><strong>Population:</strong> {country.population.toLocaleString()}</p>
                                <p className='text-gray-700 dark:text-gray-300'><strong>Region:</strong> {country.region}</p>
                                <p className='text-gray-700 dark:text-gray-300'><strong>Capital:</strong> {country.capital}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}
