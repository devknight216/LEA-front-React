import React, { useEffect, useState } from 'react';
import MultiSelect from 'react-multi-select-component';
import ImageUploadComponent from './imageupload';
import { InputBox, Toggle } from 'components/basicui/basicui';
import { useDispatch } from 'react-redux';
import { createNewProperty } from 'reduxstore/propertyreducer/action';
import { Toast } from 'components/common/notification';
import { hostRemoveAllRecord } from 'firebaseStorage/hostspace';

const propertyDescribe = [ 
    { label: 'Quiet Neighborhood', value:"Quiet Neighborhood" }, 
    { label: 'Rare Space', value: "Rare Space"}, 
    { label: 'Good for Families', value: "Good for Families"}, 
    { label: 'Sleek Interior', value: 'Sleek Interior' }, 
    { label: 'Ideal Location', value: 'Ideal Location' }, 
    { label: 'Roomy and Big Space', value: 'Roomy and Big Space'}
];
const propertyspecialFeature = [
    { label: 'Security Camera',  value: 'Security Camera'}, 
    { label: 'Weapons',  value: 'Weapons'}, 
    { label: 'Dangerous', value: 'Dangerous'}
];

function HostNewPropertyStepThree({ previousStep, property, setProperty, setStep }) {
    
    //Get Property Describe words
    const[ propertyDescribeWord, setPropertyDescribeWord ] = useState([]);
    useEffect(() => {
        setProperty({
            ...property,
            propertyDescribe: propertyDescribeWord.map(item => item.label)
        })
    }, [propertyDescribeWord])

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
        hostRemoveAllRecord();
    }

    return (
        <div>
            <div className="max-w-4xl mx-auto rounded-md shadow-md p-3 sm:p-8 bg-white px-2">
                <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Special Features</h3>
                </div>
                <div className="py-2">
                    <form>
                        <ImageUploadComponent property={property} setProperty={setProperty}/>
                        <div className=" mt-4 border-t grid md:grid-cols-2 gap-4 py-5">
                            <div className='text-gray-700'>
                                <label className="text-sm font-medium">Describe the property.</label>
                                <MultiSelect
                                    options={propertyDescribe}
                                    onChange={setPropertyDescribeWord}
                                    value={propertyDescribeWord}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 border-t mt-4 py-4">
                            <Toggle label={"Do you want LEA to manage the property for you?"} getToggleValue={getManageTypeToggle} removeToggleValue={removeManageTypeToggle}/>
                            <div>
                                <InputBox placeholder="Deposit Fee" name="depositFee" type="number" onchange={getDepositeFee}/>
                            </div>
                            <div>
                                <InputBox placeholder="staging Fee (hours)" name="stagingFee" type="number" onchange={getStagingFee}/>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 border-t mt-4 py-4">
                            <div>
                                <InputBox placeholder="Pet fee" name="depositFee" type="number" onchange={(e)=>{petFee(e, "fee")}} disabled={!(property.amenities.filter(item => item === "Pets Allowed").length)}/>
                            </div>
                            <div>
                                <InputBox placeholder="How many?" name="stagingFee" type="number" onchange={(e)=>{petFee(e, "number")}} disabled={!(property.amenities.filter(item => item === "Pets Allowed").length)}/>
                            </div>
                        </div>
                    </form>
                </div>
                <footer>
                    <div className="py-5 flex justify-between">
                        <button className="bg-red-500 focus:bg-red-700 text-white px-10 py-2 rounded-md" onClick={previousStep}>Prev</button>
                        <button className="bg-red-500 focus:bg-red-700 text-white px-10 py-2 rounded-md" onClick={createNewSpace}>Create</button>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default HostNewPropertyStepThree;