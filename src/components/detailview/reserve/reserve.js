import React, { useState, useEffect, Children } from 'react'
import { MinusCircleIcon,  PlusCircleIcon } from '@heroicons/react/outline';
import { Link, useHistory } from 'react-router-dom'
import { classNames, getDaysArray } from 'shared/function';
import { Toast } from 'components/common/notification';

function ReserveComponent({ property, checkedInOut, propertyId }) {
    const [guests, setGuests] = useState({
        adult: 1, 
        children: 0,
        infants: 0
    });

    //Increase or Decrease the Gust Num
    const CalcGuestNum = ( method, type ) => {
        if((method === "INCREASE") && ((guests.adult + guests.children)<property?.guestNum ) ){
            setGuests(
                {
                    ...guests,
                    [type]: guests[type] + 1
                }
            )
        }
        else if(method === "DECREASE"){
            setGuests(
                {
                    ...guests,
                    [type]: (guests[type]>0)? (guests[type] - 1) : 0
                }
            )
        }
    }

    //Guest Data
    const GuestLayout = [
        {
            title: "Adult",
            param: "adult"
        },
        {
            title: "Children",
            param: "children"
        },
    ]

    //Get Date Array
    const[dateArray, setDateArray] = useState([])
    useEffect(() => {
       if(checkedInOut?.from && checkedInOut?.to){
           const array = getDaysArray(checkedInOut?.from, checkedInOut?.to);
           setDateArray(array);
       }
    }, [checkedInOut]);

    //Go to Book
    const history = useHistory()
    const gotoBook = () => {
        if(dateArray.length){
            history.push(`/book/${propertyId}?adult=${guests.adult}&children=${guests.children}&infants=${guests.infants}&checkedin=${checkedInOut?.from}&checkedout=${checkedInOut?.to}`)
        }
        else{
            Toast('', 'Please choose checked-in and checked-out', 'danger')
        }
    }

    return (
        <div>
            <section aria-labelledby="announcements-title">
                <div className="rounded-lg bg-white overflow-hidden shadow">
                    <div className="text-center w-full">
                        <h2
                        className="text-base font-medium text-gray-900"
                        id="announcements-title"
                        >
                            Guests
                        </h2>
                        <div className="flow-root mt-6">
                        <ul className="-my-5 py-5">
                            {
                                GuestLayout.map((item, index) => (
                                    <div className="flex justify-between px-5 gird grid-cols-2" key={index}>
                                        <p>{item.title}:</p>
                                        <div className="flex justify-between w-1/2">
                                            <div className="cursor-pointer" onClick={() => {CalcGuestNum("DECREASE", item.param)}}>
                                                <MinusCircleIcon 
                                                    className={classNames(
                                                        ((guests[item.param])>0 ) ? 'text-gray-800' : 'text-gray-300',
                                                        'h-6'
                                                    )} 
                                                />
                                            </div>
                                                { guests[item.param] }
                                            <div className="cursor-pointer" onClick={() => {CalcGuestNum("INCREASE", item.param)}}>
                                                <PlusCircleIcon
                                                    className={classNames(
                                                        ((guests.adult + guests.children)<property?.guestNum ) ? 'text-gray-800' : 'text-gray-300',
                                                        'h-6'
                                                    )} 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                             <div className="flex justify-between px-5 gird grid-cols-2">
                                <p>Infants:</p>
                                <div className="flex justify-between w-1/2">
                                    <div className="cursor-pointer" onClick={() => { setGuests({ ...guests, infants: guests.infants ? (guests.infants-1) : 0 }) }}>
                                        <MinusCircleIcon 
                                            className={classNames(
                                                ((guests.infants)>0 ) ? 'text-gray-800' : 'text-gray-300',
                                                'h-6'
                                            )} 
                                        />
                                    </div>
                                        { guests.infants }
                                    <div className="cursor-pointer" onClick={() => { setGuests({ ...guests, infants: guests.infants+1 }) }}>
                                        <PlusCircleIcon
                                            className={classNames(
                                                ((guests.infants)<3 ) ? 'text-gray-800' : 'text-gray-300',
                                                'h-6'
                                            )} 
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="py-5 px-10">
                                <p className="text-gray-800">
                                    <span className="text-lg font-bold">${property?.nightlyRate}</span>
                                    /night
                                </p>
                                <div className="flex justify-between py-4 px-5 text-gray-800">
                                    <p className="underline">${property?.nightlyRate} x {dateArray.length} nights</p>
                                    <p>${ parseInt(property?.nightlyRate) * dateArray.length}</p>
                                </div>
                                <div className="flex pb-5 px-5 justify-between">
                                    <p className="underline">Service fee</p>
                                    <p>${25}</p>
                                </div>
                                <div  className="flex pb-5 px-5 justify-end">
                                    <span className="font-bold mr-2">{ guests.adult + guests.children }</span> Guests
                                </div>
                                <hr />
                                <div className="flex justify-between px-5 py-2">
                                    <p className="font-bold">Total</p>
                                    <p className="font-bold">${(parseInt(property?.nightlyRate) * dateArray.length)}</p>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <div className="mt-6">
                    <div
                        onClick={gotoBook}
                        className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-800"
                    >
                        Reserve
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default ReserveComponent
