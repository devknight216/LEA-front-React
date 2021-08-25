import React from 'react'
import { useSelector } from 'react-redux';
import qs from 'qs';

function BookPropertyDetail() {
    const property = useSelector((state) => state.properties.property);
    const query = qs.parse(location.search, { ignoreQueryPrefix: true });

    return (
        <div className="text-gray-600 p-5 shadow-lg rounded-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-b py-5">
                {
                    property?.imageURLs&& <img className="object-cover rounded-lg h-40 w-full " src={property?.imageURLs[0]?.url}/>
                }
                <div>
                    <div className="border-b py-4">
                        <p className=" font-bold text-lg truncate">{property?.propertyName}</p>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800">
                            { property?.propertyType }
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-yellow-100 text-yellow-800">
                            { property?.propertySpaceFeature }
                        </span>
                    </div>
                    <div className="my-2">
                        <span className="text-sm">{property?.guestNum} Guest, {property?.bedsNum} Bed, {property?.bathroomNum} Bathroom, {property?.bedroomNum} Bedroom</span>
                    </div> 
                </div>
            </div>
            <div className="py-5">
               
            </div>
        </div>
    )
}

export default BookPropertyDetail;
