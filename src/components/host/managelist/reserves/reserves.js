import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHostReservations } from 'reduxstore/bookreducer/action';
const people = [
    {
      name: 'Leslie Alexander',
      email: 'lesliealexander@example.com',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Leslie Alexander',
        email: 'lesliealexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Leslie Alexander',
        email: 'lesliealexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Leslie Alexander',
        email: 'lesliealexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    // More people...
]

function ManageListReserveComponent() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const properties = useSelector(state => state.reservation.reservations);
    useEffect(() => {
        dispatch(getHostReservations(user.userID))         
    }, []);
    console.log(properties);
    return (
        <div className="py-5">
            <div className="relative bg-gray-900">
                <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
                    <div className="h-full w-full xl:grid xl:grid-cols-2">
                        <div className="h-full xl:relative xl:col-start-2">
                            <img
                                className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                                src="https://legendarystorage.s3.us-east-2.amazonaws.com/background/bg-arrive-guest1.jpg"
                                alt="People working on laptops"
                            />
                            <div
                                aria-hidden="true"
                                className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                            />
                        </div>
                    </div>
                </div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
                    <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
                        <h2 className="text-sm font-semibold tracking-wide uppercase">
                            <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
                                Your reservations
                            </span>
                        </h2>
                        <p className="mt-3 text-3xl font-extrabold text-white">
                            Guests will soon be on the way.
                        </p>
                        <p className="mt-5 text-lg text-gray-300">
                            When they book, they’ll show up here.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <p className="mt-3 border-b pb-3 text-3xl font-extrabold text-gray-700">
                    Reserves
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 py-5">
                    {properties[0]?.reservations.map((reservation, index) => (
                        <div
                            key={index}
                            className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                            <div className="flex-shrink-0">
                                <img className="h-10 w-10 rounded-full" src={""} alt="" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <a href="#" className="focus:outline-none">
                                    <span className="absolute inset-0" aria-hidden="true" />
                                    <p className="text-sm font-medium text-gray-900">{reservation.from}</p>
                                    <p className="text-sm text-gray-500 truncate">{reservation.to}</p>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ManageListReserveComponent
