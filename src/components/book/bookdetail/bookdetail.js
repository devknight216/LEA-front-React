import React, { useState } from 'react';
import { ChevronLeftIcon } from '@heroicons/react/outline';
import StripeComponent from './stripe';
import VisaCard from 'assets/imgs/icon/visacard.svg'
import MasterCard from 'assets/imgs/icon/mastercard.svg'
import AmexCard from 'assets/imgs/icon/amexcard.svg'
import DiscoverCard from 'assets/imgs/icon/discovercard.svg'

function BookDetailComponent({setBookData, bookData}) {
    
    return (
        <div className="text-gray-600 p-5 shadow-lg rounded-md">
            <div className="flex items-center flex-wrap">
                <ChevronLeftIcon className="w-8 h-8"/>
                <h2 className="text-3xl font-extrabold tracking-tight ml-2">Request to book</h2>
            </div>
            <div className="px-2">
                <div className="py-6 tracking-tight border-b">
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
                <div className="py-6 tracking-tight border-b">
                    <h2 className="text-xl">Pay with</h2>
                    <div>
                        <div className="flex gap-2 flex-wrap justify-center py-5">
                            <img src={VisaCard}/>
                            <img src={MasterCard}/>
                            <img src={AmexCard}/>
                            <img src={DiscoverCard}/>
                        </div>
                    </div>
                    <div className="py-3">
                        <StripeComponent bookData={bookData}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookDetailComponent
