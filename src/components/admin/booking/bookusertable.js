import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProperties } from "reduxstore/propertyreducer/action";
import { SpinnerCircularFixed } from 'spinners-react';
 
export default function BookPropertyListComponent() {
    const properties = useSelector(state => state.properties.properties);
    const status = useSelector( state => state.properties.status );
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllProperties());
    }, [])
    return (
      <ul className="divide-y divide-gray-200">
        {
          status !== 1 
          ?
            <div className="flex justify-center w-full py-5">
                <SpinnerCircularFixed size={50} thickness={100} speed={100} color="#000000AA" secondaryColor="#FFFFFF" />
            </div>
          :
            <div>              
              {properties.map((property) => (
                <li key={property._id} className="py-4 px-2 hover:bg-gray-100 cursor-pointer">
                  <div className="flex space-x-2 items-center">
                    <img className="h-10 min-w-10 w-10 object-cover" src={property.imageURLs[0].url} alt="" />
                    <p className="text-sm font-medium text-gray-900">{property.propertyName}</p>
                  </div>
                  <div className="px-2 mt-3">
                    <div className="flex justify-between">
                      <p className="text-sm text-gray-500">${property.nightlyRate}/night</p>
                      <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-600 bg-indigo-200 rounded-md">{property.hostInfo.name}</span>
                    </div>
                  </div>
                </li>
              ))}
            </div>
        }
      </ul>
    )
  }