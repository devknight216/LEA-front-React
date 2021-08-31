import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProperties } from "reduxstore/propertyreducer/action";
 
export default function BookUsersComponent() {
    const properties = useSelector(state => state.properties.properties);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllProperties());
    }, [])
    console.log(properties);
    return (
      <ul className="divide-y divide-gray-200">
        {properties.map((property) => (
          <li key={property._id} className="py-4 px-2 hover:bg-gray-100 cursor-pointer">
            <img className="h-10 w-10 rounded-full" src={property.imageURLs[0].url} alt="" />
            <div>
              <p className="text-sm font-medium text-gray-900">{property.propertyName}</p>
              <div className="flex justify-between">
                <p className="text-sm text-gray-500">${property.nightlyRate}</p>
                <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-600 rounded-full">{property.hostInfo.name}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    )
  }