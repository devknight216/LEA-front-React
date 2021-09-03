import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import AddPaymentMethodPopup from '../popups/addpyamentmethod'

function EditAccountPaymentSettingComponent() {
    //Run Add Payment Method
    const[addPaymentMethod, setAddPaymentMethod] = useState(false);
    const user = useSelector(state => state.auth.user);

    return (
        <div>
            <div className="divide-y">
                <div>
                    <p className="text-2xl py-3 font-semibold">PAYMENTS</p>
                    <div>
                        <div className='p-3 rounded-md'>
                            <p className="text-xl">Payment methods</p>
                            <p className="py-3 text-gray-500">Add a payment method using our secure payment system, then start planning your next trip.</p>
                            <div className="px-5">
                                <button onClick={()=>{setAddPaymentMethod(true)}} className=" bg-red-500 text-white px-5 py-2 rounded hover:bg-red-700">Add Payment Method</button>
                                <AddPaymentMethodPopup isOpen={addPaymentMethod} setIsOpen={setAddPaymentMethod}/>
                            </div>
                        </div>
                        <div className='p-3 rounded-md'>
                            <p className="text-xl">Coupons</p>
                            <p className="py-3 text-gray-500">Add a coupon and save on your next trip.</p>
                            <p className="py-3 text-gray-500 underline">Your coupons</p>
                            <div className="px-5">
                                <button className=" bg-red-500 text-white px-5 py-2 rounded hover:bg-red-700">Add Coupons</button>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    user?.property?.length && <div>
                        <p className="text-2xl py-3 font-semibold">Payout methods</p>
                        <div>
                            <div className='p-3 rounded-md'>
                                <p className="text-xl">Payout methods</p>
                                <p className="py-3 text-gray-500">To get paid, you need to set up a payout method</p>
                                <div className="px-5">
                                    <button className=" bg-red-500 text-white px-5 py-2 rounded hover:bg-red-700">Add Payout Method</button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <div>
                    <p className="text-2xl py-3 font-semibold">TAXES</p>
                    <div>
                        <div className='p-3 rounded-md'>
                            <p className="text-xl">VAT</p>
                            <p className="py-3 text-gray-500">If you are registered for VAT or your stay is for business, you may not be charged VAT on Airbnb service fees. To get started, enter your business’ VAT ID Number.</p>
                            <div className="px-5">
                                <button className=" bg-red-500 text-white px-5 py-2 rounded hover:bg-red-700">Add VAT ID Number</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditAccountPaymentSettingComponent
