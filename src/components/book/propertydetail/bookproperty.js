import React from 'react'
import { useSelector } from 'react-redux';

function BookPropertyDetail({ bookData }) {
    const property = useSelector((state) => state.properties.property);
 
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
               <div>
                   <div className="text-center">
                        <p className="text-lg font-extrabold">Price details</p>
                        <div className="py-5 px-10">
                            <p className="text-gray-800">
                                <span className="text-lg font-bold">${property?.nightlyRate}</span>
                                /night
                            </p>
                        <div className="flex justify-between py-4 px-5 text-gray-800">
                            <p className="underline">${property?.nightlyRate} x {bookData.dateArray?.length} nights</p>
                            <p>${ parseInt(property?.nightlyRate) * bookData.dateArray?.length}</p>
                        </div>
                        {
                            property?.depositFee && <div className="flex pb-5 px-5 justify-between">
                                <p className="underline">Deposit fee</p>
                                <p>${property?.depositFee | 0}</p>
                            </div>
                        }
                        {
                            bookData.pets !== 0 && <div className="flex pb-5 px-5 justify-between">
                                <p className="underline">Pet fee</p>
                                <p>${(property?.petAllowFee?.fee | 0) * bookData.pets }</p>
                            </div>
                        }
                        <div className="flex justify-between py-4 px-5 text-gray-800">
                            <p className="underline">Tax Fee(6.5%)</p>
                            <p>${ (bookData?.totalCost/1.065 * 0.065).toFixed(2)}</p>
                        </div>
                        <div  className="flex pb-5 px-5 justify-end">
                            <span className="font-bold mr-2">{ bookData.adult + bookData.children}</span> Guests
                        </div>
                        <hr />
                        <div className="flex justify-between px-5 py-2">
                            <p className="font-bold">Total</p>
                            <p className="font-bold">${bookData?.totalCost}</p>
                        </div>
                   </div>
                </div>
               </div>
            </div>
        </div>
    )
}

export default BookPropertyDetail;
