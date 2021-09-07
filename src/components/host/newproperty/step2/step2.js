import { features, guestsNum } from 'admin/createnewitem/constant';
import React, { useEffect, useState } from 'react';
import MultiSelect from 'react-multi-select-component';
import { amenities } from 'components/properties/search/constant';
import { InputBox, Toggle } from 'components/basicui/basicui';
import { Toast } from 'components/common/notification';

const specialAmenities = [
    "Pets Allowed",
    "Wifi",
    "TV",
    "Kitchen",
    "Free parking on premises",
    "Pool",
    "Air Conditioning",
    "Gym",
    "Dedicated workspace"
]
const propertyDescribe = [ 
    { label: 'Quiet Neighborhood', value:"Quiet Neighborhood" }, 
    { label: 'Rare Space', value: "Rare Space"}, 
    { label: 'Good for Families', value: "Good for Families"}, 
    { label: 'Sleek Interior', value: 'Sleek Interior' }, 
    { label: 'Ideal Location', value: 'Ideal Location' }, 
    { label: 'Roomy and Big Space', value: 'Roomy and Big Space'}
];

function HostNewPropertyStepTwo({ previousStep, nextStep, property, setProperty, setStep }) {

    const [seletedAmenities, setSelectedAmenities] = useState([]);

    //Get Property type
    const getPropertyFeature = (e, param) => {
        setProperty({
            ...property,
            [param]: e.target.value
        })
    }

    //Get Amenities Value
    useEffect(() => {
        setProperty({
            ...property,
            amenities: seletedAmenities.map(item => item.value)
        })
    }, [seletedAmenities])

    //Add Main Amenities value
    const addMainAmenities = ( value ) => {
        setSelectedAmenities([ ...seletedAmenities, { label: value, value: value } ])
    }

    //Remove Main Amenities Value
    const removeMainAmenities = ( index ) => {
        setSelectedAmenities(seletedAmenities.filter((item) => item.value !== index))
    }

    //Get Property Describe words
    const[ propertyDescribeWord, setPropertyDescribeWord ] = useState([]);
    useEffect(() => {
         setProperty({
             ...property,
             propertyDescribe: propertyDescribeWord.map(item => item.label)
         })
     }, [propertyDescribeWord])

    //Go to Next
    const gotoNext = () => {
        if( property.guestNum && property.bedsNum && property.bedroomNum && property.bathroomNum ){
            setStep([
                { id: '01', name: 'Job details', status: "complete" },
                { id: '02', name: 'Application form', status:"complete" },
                { id: '03', name: 'Preview', status:"current" },
            ])
            nextStep();
        }
        else{
            Toast('', 'You should fill all fields', 'danger')
        }
    }
        
    return (
        <div>
            <div className="max-w-4xl mx-auto rounded-md shadow-md p-3 sm:p-8 bg-white px-2">
                <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Property Features</h3>
                </div>
                <div className="py-2">
                    <form>
                        <div className="space-y-2">
                            {
                                features.map((item, index) => (
                                    <div key={index}>
                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                            { item.label }
                                        </label>
                                        <div className="mt-1">
                                            <select
                                                name={item.variableName}
                                                className="shadow-sm focus:outline-none block w-full  h-full p-3 sm:text-sm border-gray-300  border rounded-md"
                                                onChange={(e) => {
                                                    getPropertyFeature(e, item.variableName)
                                                }}
                                            >
                                                {
                                                    item.properties.map((option) => (
                                                        <option key={option}>{option}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <label className="mt-5 block text-sm font-medium text-gray-700">Please indicate the number applicable to the fields below:</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-3">
                            {
                                guestsNum.map(item => (
                                    <div key={item.variableName}>
                                        <InputBox 
                                            type="number" 
                                            name={item.type} 
                                            placeholder={item.type} 
                                            onchange={(e) => {
                                                getPropertyFeature(e, item.variableName)
                                            }}
                                        />
                                        <span className="text-gray-400">{item.description}</span>
                                    </div>
                                ))
                            }

                        </div>
                        <label className="mt-5 block text-sm font-medium text-gray-700">What amenities comes with booking the property?</label>
                        <div className="py-5 grid grid-cols-2 md:grid-cols-3">
                            {
                                specialAmenities.map(item => (
                                    <div key={item} className="my-2">
                                        <Toggle label={item} getToggleValue={addMainAmenities} removeToggleValue={removeMainAmenities}/>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="my-2">
                            <MultiSelect
                                options={amenities}
                                value={seletedAmenities}
                                onChange={setSelectedAmenities}
                                labelledBy="Select"
                            />
                        </div>
                        <div className=" mt-4">
                            <div className='text-gray-700'>
                                <label className="text-sm font-medium">Describe the property.</label>
                                <MultiSelect
                                    options={propertyDescribe}
                                    onChange={setPropertyDescribeWord}
                                    value={propertyDescribeWord}
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <footer>
                    <div className="py-5 flex justify-between">
                        <button className="bg-red-500 focus:bg-red-700 text-white px-10 py-2 rounded-md" onClick={previousStep}>Prev</button>
                        <button className="bg-red-500 focus:bg-red-700 text-white px-10 py-2 rounded-md" onClick={gotoNext}>Next</button>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default HostNewPropertyStepTwo