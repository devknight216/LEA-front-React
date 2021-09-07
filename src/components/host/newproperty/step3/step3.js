import React, { useEffect, useState } from 'react';
import MultiSelect from 'react-multi-select-component';
import { InputBox, Toggle } from 'components/basicui/basicui';
import { useDispatch } from 'react-redux';
import { createNewProperty } from 'reduxstore/propertyreducer/action';
import { Toast } from 'components/common/notification';
import ImageUploadToAWSComponent from 'components/common/uploadImage';

function HostNewPropertyStepThree({ previousStep, property, setProperty }) {
    
    //Get manage Type
    const getManageTypeToggle = (value) => {
        setProperty({
            ...property,
            manageType: "LEA"
        })
    }
    const removeManageTypeToggle = (value) => {
        setProperty({
            ...property,
            manageType: "HOST"
        })
    }

    //Get Deposit Fee
    const getDepositeFee = (e) => {
        setProperty({
            ...property,
            depositFee: e.target.value
        })
    }

    //Get Staging Fee
    const getStagingFee = (e) => {
        const stagingFee = {
            hours: e.target.value,
            rate: 80
        }
        setProperty({
            ...property,
            stagingFee: stagingFee
        })
    }

    //Get Pet fee
   
    const petFee = (e, params) => {
        setProperty({
            ...property,
            petAllowFee: {
                ...property.petAllowFee,
                [params]: e.target.value
            }
        })
    }

    //List a new property
    const dispatch = useDispatch();
    const createNewSpace = () => {
        dispatch(createNewProperty(property));
        Toast('','New property is created','success');
    }

    return (
        <div>
            <div className="max-w-4xl mx-auto rounded-md shadow-md p-3 sm:p-8 bg-white px-2">
                <form>
                    <div className="bg-white px-4 py-5 border-gray-200 sm:px-6 space-y-4">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Fees</h3>
                        <div>
                            <p className="text-lg font-bold">Deposit Fee</p>
                            <p className="italic font-medium text-gray-600 text-sm">As a host, you can set a Deposit fee for your property</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 px-5 py-5">
                                <div>
                                    <InputBox placeholder="Deposit Fee" name="depositFee" type="number" onchange={getDepositeFee}/> 
                                </div>
                                <div>
                                    <p>If you want to set a deposit fee, please enter your desired amount. Please leave it blank otherwise.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-lg font-bold">Pet Fee</p>
                            <p className="italic font-medium text-gray-600 text-sm">If you selected to allow pets inside the property, you can also set a fee for each pet per night.</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 items-center px-5 py-5">
                                <div>
                                    <InputBox placeholder="Pet fee" name="depositFee" type="number" onchange={(e)=>{petFee(e, "fee")}} disabled={!(property.amenities.filter(item => item === "Pets Allowed").length)}/>
                                </div>
                                <div>
                                    <p>Please enter the amount you want to charge for each pet per night.</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 items-center px-5">
                                <div>
                                    <InputBox placeholder="How many?" name="stagingFee" type="number" onchange={(e)=>{petFee(e, "number")}} disabled={!(property.amenities.filter(item => item === "Pets Allowed").length)}/>
                                </div>
                                <div>
                                    <p>How many pets are you allowing inside your property?</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-lg font-bold">Other service offered by Legendary Estates Airbnb</p>
                            <p className="italic font-medium text-gray-600 text-sm">Management by Legendary Estates Airbnb</p>
                            <p className="italic font-medium text-gray-600 text-sm">Legendary Estates Airbnb can manage your property and handle everything for you. If you agree to have your property managed by Legendary Estates Airbnb, 20% of platform sales will go to Legendary Estates Airbnb.</p>
                            <div className="px-5 py-5">
                                <Toggle label={"Do you want Legendary Estates Airbnb to manage the property for you?"} getToggleValue={getManageTypeToggle} removeToggleValue={removeManageTypeToggle}/>
                            </div>
                        </div>
                        <div>
                            <p className="text-lg font-bold">Staging by Legendary Estates Airbnb</p>
                            <p className="italic font-medium text-gray-600 text-sm">Legendary Estates Airbnb also offers staging that will surely transform your space and get bookings in no time! Staging by Legendary Estates Airbnb starts at $80 per hour.</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 items-center">
                                <div>
                                    <InputBox placeholder="staging Fee (hours)" name="stagingFee" type="number" onchange={getStagingFee}/>
                                </div>
                                <div>
                                    <p>Please enter the number of hours you want to have your property staged. Please leave it blank if you don’t want staging for your space</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <footer>
                    <div className="py-5 flex justify-between">
                        <button className="bg-red-500 focus:bg-red-700 text-white px-10 py-2 rounded-md" onClick={previousStep}>Prev</button>
                        <button className="bg-red-500 focus:bg-red-700 text-white px-10 py-2 rounded-md" onClick={createNewSpace}>Create</button>
                    </div>
                    <div className="border-t">
                        <ImageUploadToAWSComponent/>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default HostNewPropertyStepThree;