import React, { useEffect } from 'react';
import HeroComponent from 'components/herosection';
import PropertyIistItem from 'components/properties/propertylist';
import { SearchIcon } from '@heroicons/react/solid';
import { useDispatch, useSelector } from "react-redux";
import { getAllProperties } from 'reduxstore/propertyreducer/action';


const PropertiesPage  = () => {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProperties());
    }, []);
    const properties = useSelector((state) => state.properties.properties);

    return (
        <div>
            <div className="container mx-auto">
                <div className="mt-10 text-center">
                    <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Check out our Properties</h3>
                </div>
                <div className="flex-1 flex justify-center mt-5 px-2 lg:ml-6 lg:justify-end">
                    <div className="max-w-lg w-full lg:max-w-xs">
                    <label htmlFor="search" className="sr-only">
                        Search
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </div>
                        <input
                        id="search"
                        name="search"
                        className="block w-full pl-10 pr-3 py-2 border rounded-md leading-5 bg-white text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-white focus:text-gray-900 sm:text-sm"
                        placeholder="Search"
                        type="search"
                        />
                    </div>
                    </div>
                </div>
                <div className ="md:grid md:grid-cols-3 md:px-4 lg:px-8">
                    {
                        properties.map((propety, index)=>(
                            <PropertyIistItem item={propety} key={index}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PropertiesPage;