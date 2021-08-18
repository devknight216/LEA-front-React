import React, { useEffect, useState } from 'react';
import HeroComponent from 'components/herosection';
import PropertyIistItem from 'components/properties/propertylist';
import { SearchIcon } from '@heroicons/react/solid';
import { useDispatch, useSelector } from "react-redux";
import { getAllProperties, searchProperties } from 'reduxstore/propertyreducer/action';
import { useLocation } from 'react-router-dom';
import qs from 'qs'
import DrawerComponent from 'components/properties/drawer';

const PropertiesPage  = () => {
    //Get Properties from backend
    const location = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        if(!location.search){
            dispatch(getAllProperties());
        }
        else{
            const query = qs.parse(location.search, { ignoreQueryPrefix: true });
            console.log(query);
            const queryBody = {
                nightlyRateRangeFrom: '',
                nightlyRateRangeTo: '',
                location: {

                },
                propertyType: '',
                propertySpaceFeature: '',
                guestNum: (parseInt(query.adult) + parseInt(query.children)),
                amenities: []
            }
            dispatch(searchProperties(queryBody));
        }
    }, []);
    const properties = useSelector((state) => state.properties.properties);

    //Handle Drawer
    const[isOpen, setIsOpen] = useState(false);
    const handleFilterDrawer = () => {
        setIsOpen(true);
    }


    return (
        <div>
            <div className="container mx-auto">
                <div className="mt-10 text-center">
                    <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Check out our Properties</h3>
                </div>
                <div className="pb-5 px-3 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Property List</h3>
                    <div className="mt-3 sm:mt-0 sm:ml-4">
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={handleFilterDrawer}
                        >
                          {"Search>>"}
                        </button>
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
            <DrawerComponent isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
    )
}

export default PropertiesPage;