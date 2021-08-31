import React, { useState } from 'react';
import { ChevronLeftIcon } from '@heroicons/react/outline';
import StripeComponent from './stripe';
import BookSendEmailPopUp from './sendemail';
import BookAddPhonePopUp from './addphone';

function BookDetailComponent({setBookData, bookData}) {
    //Send Email Popup 
    const [sendEmail, setSendEmail] = useState(false);
    const [addPhone, setAddPhone] = useState(false)

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
                    <h2 className="text-xl">Required for your trip</h2>
                    <div className="py-3 px-5 flex justify-between space-x-2">
                        <div>
                            <p className="font-bold">Phone number</p>
                            <p className="text-sm">Add and confirm your phone number to get trip updates.</p>
                        </div>
                        <div>
                            <button onClick={()=>{setAddPhone(true)}} className="bg-transparent hover:bg-red-600 px-4 py-1 rounded-md text-gray-600 hover:text-white border">Add</button>
                        </div>
                    </div>
                    <div className="py-3 px-5 flex justify-between space-x-2">
                        <div>
                            <p className="font-bold">Send Email to Host</p>
                            <p className="text-sm">Let the host know why you're traveling and when you'll check in.</p>
                        </div>
                        <div>
                            <button onClick={()=> {setSendEmail(true)}} className="bg-transparent hover:bg-red-600 px-4 py-1 rounded-md text-gray-600 hover:text-white border">Send</button>
                        </div>
                    </div>
                </div>
                <div className="py-6 tracking-tight border-b">
                    <h2 className="text-xl">Pay with</h2>
                    <div className="py-3">
                        <StripeComponent bookData={bookData}/>
                    </div>
                </div>
            </div>
            <BookSendEmailPopUp sendEmail={sendEmail} setSendEmail={setSendEmail}/>
            <BookAddPhonePopUp sendEmail={addPhone} setSendEmail={setAddPhone}/>
        </div>
    )
}

export default BookDetailComponent
