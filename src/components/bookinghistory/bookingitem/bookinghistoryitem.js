import React, { useEffect } from 'react'
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import { useDispatch, useSelector } from 'react-redux';
import { getReservationById } from 'reduxstore/bookreducer/action';

function BookingHistoryItemComponent({reservation}) {
    return (
        <div>
            <li className="col-span-1 bg-white rounded-lg shadow list-none">
                <div className="w-full flex items-center justify-between px-6 py-3 space-x-6">
                    <div className="flex-1 truncate">
                        <div className="flex items-center space-x-3">
                            <a  href={`/details/${reservation?.property?._id}`} target="_blank" className="text-gray-900 text-sm font-medium truncate hover:text-indigo-500 cursor-pointer">{reservation?.property?.propertyName}</a>
                            <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                                {"PENDING"}
                            </span>
                        </div>
                        <p className="mt-1 text-gray-500 text-sm truncate">{(reservation?.from)?.substr(0,10)} to {(reservation?.to)?.substr(0,10)}</p>
                    </div>
                    <img className="w-16 h-16 bg-gray-300 rounded-sm flex-shrink-0" src={reservation?.property?.imageURLs[0].url} alt="" />
                </div>
                <div className="px-6 pb-2 flex justify-between">
                    <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                        ${reservation?.total}
                    </span>
                </div>
                <div>
                    <div className="-mt-px flex divide-x divide-gray-200 border-t">
                        <div className="w-0 flex-1 flex">
                            <a
                                href={`mailto:${reservation?.property?.hostInfo?.email}`}
                                className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                            >
                                <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                <span className="ml-3">Email</span>
                            </a>
                        </div>
                        <div className="-ml-px w-0 flex-1 flex">
                            <a
                            href={`tel:${"+17072196909"}`}
                            className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                            >
                                <PhoneIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                <span className="ml-3">Call</span>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    )
}

export default BookingHistoryItemComponent
