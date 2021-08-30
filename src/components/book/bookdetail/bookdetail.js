import React, { useState } from 'react';
import { ChevronLeftIcon } from '@heroicons/react/outline';
import qs from 'qs';
import { useSelector } from 'react-redux';
import StripeComponent from './stripe';

function BookDetailComponent({setBookData, bookData}) {
    const property = useSelector((state) => state.properties.property);
    const query = qs.parse(location.search, { ignoreQueryPrefix: true });

    return (
        <div className="text-gray-600 p-5 shadow-lg rounded-md">
            <div className="flex items-center flex-wrap">
                <ChevronLeftIcon className="w-8 h-8"/>
                <h2 className="text-3xl font-extrabold tracking-tight ml-2">Request to book</h2>
            </div>
            <div className="px-2">
                <div className="py-3 tracking-tight border-b">
                    <h2 className="text-xl">Your trip</h2>
                    <div className="py-4 sm:px-5 md:px-10">
                        <p className="font-bold">Dates</p>
                        <div className="text-sm flex flex-wrap justify-between px-3">
                            <p>From: {bookData.checkedin}</p>
                            <p>To: {bookData.checkedout}</p>
                        </div>
                        <p className="font-bold mt-3">Guests</p>
                        <div className="text-sm flex flex-wrap justify-between px-3">
                            <p>Guests: {parseInt(bookData.adult) + parseInt(bookData.children)}</p>
                            <p>Infants: {bookData.infants}</p>
                        </div>
                    </div>
                </div>
                {/* Select Pay method */}
                {/* <div className="py-3 tracking-tight border-b">
                    <h2 className="text-xl">Choose how to pay</h2>
                </div> */}
                <div className="py-3 tracking-tight border-b">
                    <h2 className="text-xl">Required for your trip</h2>
                    <div className="py-3 px-5 flex justify-between space-x-2">
                        <div>
                            <p className="font-bold">Phone number</p>
                            <p className="text-sm">Add and confirm your phone number to get trip updates.</p>
                        </div>
                        <div>
                            <button className="bg-transparent hover:bg-red-600 px-3 py-1 rounded-md text-gray-600 hover:text-white border">Add</button>
                        </div>
                    </div>
                    <div className="py-3 px-5 flex justify-between space-x-2">
                        <div>
                            <p className="font-bold">Send Email to Host</p>
                            <p className="text-sm">Let the host know why you're traveling and when you'll check in.</p>
                        </div>
                        <div>
                            <button className="bg-transparent hover:bg-red-600 px-3 py-1 rounded-md text-gray-600 hover:text-white border">Add</button>
                        </div>
                    </div>
                </div>
                <div className="py-3 tracking-tight border-b">
                    <h2 className="text-xl">Pay with</h2>
                    <div className="py-3">
                        <StripeComponent bookData={bookData}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookDetailComponent
