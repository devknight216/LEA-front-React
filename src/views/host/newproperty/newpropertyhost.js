import HostNewPropertyStepOne from 'components/host/newproperty/step1';
import HostNewPropertyStepTwo from 'components/host/newproperty/step2';
import HostNewPropertyStepThree from 'components/host/newproperty/step3';
import StepsComponent from 'components/host/newproperty/steps';
import HostNewPropertyWelcome from 'components/host/newproperty/welcome';
import React, { useEffect, useState } from 'react';
import StepWizard from "react-step-wizard";

function HostCreateNewPropertypage() {
    
    //Step Management
    const[steps, setStep] = useState([
        { id: '01', name: 'Add Main Info', status: "current" },
        { id: '02', name: 'Property Feature', status:"upcoming" },
        { id: '03', name: 'Fees and Suggestions',  status:"upcoming" },
    ]);

    //Property Info 
    const hostinfo = JSON.parse(localStorage.getItem("user"));
    const[property, setProperty] = useState({
        propertyName: "",
        nightlyRate: 0,
        propertyDescription: "",
        imageURLs: [],
        hostInfo: {
            name: hostinfo.name,
            userId: hostinfo.userID,
            email: hostinfo.email
        },
        propertyLocation: {
            apartment: "",
            street: "",
            city: "",
            state: "",
            country: "",
            zip: ""
        },
        propertyType:"Apartment",
        propertySpaceFeature: "The whole place",
        guestNum: 0,
        bedsNum: 0,
        bedroomNum: 0,
        bathroomNum: 0,
        amenities: [],
        propertyDescribe: [],
        propertyspecialFeature: [],
        petAllowFee: {
            number: 0,
            fee: 0
        },
        manageType: "HOST",
        depositFee: 0,
        stagingFee: {
            hours: 0,
            rate: 80
        }
    })

    useEffect(() => {
        console.log("Property=>", property);
    }, [property])
   
    return (
        <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl px-2 py-5 sm:py-16 sm:px-5">
                <StepsComponent steps={steps}/>
                <div className="mt-3">
                    <StepWizard 
                        isHashEnabled
                    >
                        <HostNewPropertyWelcome/>
                        <HostNewPropertyStepOne property={property} setProperty={setProperty} setStep={setStep}/>
                        <HostNewPropertyStepTwo property={property} setProperty={setProperty} setStep={setStep}/>
                        <HostNewPropertyStepThree property={property} setProperty={setProperty} setStep={setStep}/>
                    </StepWizard>
                </div>
            </div>
        </div>
    )
}

export default HostCreateNewPropertypage;
