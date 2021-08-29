import React, { useState } from 'react';
import { ChevronLeftIcon } from '@heroicons/react/outline';
import qs from 'qs';
import { useSelector } from 'react-redux';
import { RadioGroup } from '@headlessui/react'
import { classNames } from 'shared/function';
import StripeComponent from './stripe';
const settings = [
    { name: 'Pay in full', description: "Pay the total now and you're all set." },
    { name: 'Pay part now, part later', description: "Pay the total now and you're all set." }
]
function BookDetailComponent() {
    const property = useSelector((state) => state.properties.property);
    const query = qs.parse(location.search, { ignoreQueryPrefix: true });

    const [selected, setSelected] = useState(settings[0]);

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
                            <p>From: {query.checkedin}</p>
                            <p>To: {query.checkedout}</p>
                        </div>
                        <p className="font-bold mt-3">Guests</p>
                        <div className="text-sm flex flex-wrap justify-between px-3">
                            <p>Guests: {parseInt(query.adult) + parseInt(query.children)}</p>
                            <p>Infants: {query.infants}</p>
                        </div>
                    </div>
                </div>
                {/* Select Pay method */}
                <div className="py-3 tracking-tight border-b">
                    <h2 className="text-xl">Choose how to pay</h2>
                    <div className="border rounded-md p-3 my-3">
                    <RadioGroup value={selected} onChange={setSelected}>
                        <RadioGroup.Label className="sr-only">Privacy setting</RadioGroup.Label>
                            <div className="bg-white rounded-md -space-y-px">
                                {settings.map((setting, settingIdx) => (
                                    <RadioGroup.Option
                                        key={setting.name}
                                        value={setting}
                                        className={({ checked }) =>
                                        classNames(
                                            settingIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                                            settingIdx === settings.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
                                            checked ? 'bg-red-50 border-red-200 z-10' : 'border-gray-200',
                                            'relative border p-4 flex cursor-pointer focus:outline-none'
                                        )}   
                                    >
                                        {({ active, checked }) => (
                                            <>
                                                <span
                                                    className={classNames(
                                                        checked ? 'bg-red-600 border-transparent' : 'bg-white border-gray-300',
                                                        active ? 'ring-2 ring-offset-2 ring-red-500' : '',
                                                        'h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center'
                                                    )}
                                                    aria-hidden="true"
                                                >
                                                    <span className="rounded-full bg-white w-1.5 h-1.5" />
                                                </span>
                                                <div className="ml-3 flex flex-col">
                                                    <RadioGroup.Label
                                                        as="span"
                                                        className={classNames(checked ? 'text-red-900' : 'text-gray-900', 'block text-sm font-medium')}
                                                    >
                                                        {setting.name}
                                                    </RadioGroup.Label>
                                                    <RadioGroup.Description
                                                        as="span"
                                                        className={classNames(checked ? 'text-red-700' : 'text-gray-500', 'block text-sm')}
                                                    >
                                                        {setting.description}
                                                    </RadioGroup.Description>
                                                </div>
                                            </>
                                        )}
                                    </RadioGroup.Option>
                                ))}
                            </div>
                        </RadioGroup>
                    </div>
                </div>
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
                </div>
                <div className="py-3 tracking-tight border-b">
                    <h2 className="text-xl">Pay with</h2>
                    <div className="py-3">
                        <StripeComponent/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookDetailComponent
