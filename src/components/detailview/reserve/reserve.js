import React, { useState, useEffect } from 'react'
import { MinusCircleIcon,  PlusCircleIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom'
import { getDaysArray } from 'shared/function';

function ReserveComponent({ nightlyRate, checkedInOut }) {
    const [guests, setGuests] = useState({
        adult: 0, 
        children: 0,
        infants: 0
    });

    //Increase or Decrease the Gust Num
    const CalcGuestNum = ( method, type ) => {
        if(method === "INCREASE"){
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
        {
            title: "Infants",
            param: "infants"
        },
    ]

    //Get Date Array
    const[dateArray, setDateArray] = useState([])
    useEffect(() => {
       if(checkedInOut?.from && checkedInOut?.to){
           const array = getDaysArray(checkedInOut?.from, checkedInOut?.to);
           setDateArray(array);
       }
    }, [checkedInOut])

    return (
        <div>
            <section aria-labelledby="announcements-title">
                <div className="rounded-lg bg-white overflow-hidden shadow">
                    <div className="text-center w-full">
                        <h2
                        className="text-base font-medium text-gray-900"
                        id="announcements-title"
                        >
                            Reserve
                        </h2>
                        <div className="flow-root mt-6">
                        <ul className="-my-5 py-5">
                            {
                                GuestLayout.map((item, index) => (
                                    <div className="flex justify-between px-5 gird grid-cols-2" key={index}>
                                        <p>{item.title}:</p>
                                        <div className="flex justify-between w-1/2">
                                            <div className="cursor-pointer" onClick={() => {CalcGuestNum("DECREASE", item.param)}}>
                                                <MinusCircleIcon className="h-6"  />
                                            </div>
                                                { guests[item.param] }
                                            <div className="cursor-pointer" onClick={() => {CalcGuestNum("INCREASE", item.param)}}>
                                                <PlusCircleIcon className="h-6"/>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            
                            <div className="py-5 px-10">
                                <p className="text-gray-800">
                                    <span className="text-lg font-bold">{nightlyRate}USD</span>
                                    /Night
                                </p>
                                <div className="flex justify-between py-4 px-5 text-gray-800">
                                    <p className="underline">{nightlyRate}USD x {dateArray.length} nights</p>
                                    <p>{ parseInt(nightlyRate) * dateArray.length}USD</p>
                                </div>
                                <div className="flex pb-5 px-5 justify-between">
                                    <p className="underline">Service fee</p>
                                    <p>{25}USD</p>
                                </div>
                                <div  className="flex pb-5 px-5 justify-end">
                                    <span className="font-bold mr-2">{ guests.adult + guests.children }</span> Guests
                                </div>
                                <hr />
                                <div className="flex justify-between px-5 py-2">
                                    <p className="font-bold">Total</p>
                                    <p className="font-bold">{(parseInt(nightlyRate) * dateArray.length - 25)*(guests.adult + guests.children) }USD</p>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <div className="mt-6">
                    <Link
                        to="#"
                        className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-800"
                    >
                        Reserve
                    </Link>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default ReserveComponent
