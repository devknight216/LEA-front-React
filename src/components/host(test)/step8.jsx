import { InputBox } from "components/basicui/basicui";
import { Toggle } from "components/basicui/basicui";
import { ButtonComponent } from "components/basicui/basicui";
import React from "react";
import { useDispatch } from "react-redux";
import { createNewProperty } from "reduxstore/propertyreducer/action";

function HostFeesComponent({ nextStep, previousStep, property, setProperty }) {
  const dispatch = useDispatch();
  const setDepositeFee = (e) => {
    setProperty({
      ...property,
      depositFee: e.target.value
    })
  }
  const setPetFee = (e) => {
    setProperty({
      ...property,
      petAllowFee:{
        ...property.petAllowFee,
        fee: e.target.value
      }
    })
  }
  const setPetLimit = (e) => {
    setProperty({
      ...property,
      petAllowFee:{
        ...property.petAllowFee,
        number: e.target.value
      }
    })
  }
  const setManageType = (type) => {
    type? setProperty({
      ...property,
      manageType: "LEA"
    }): setProperty({
      ...property,
      manageType: "HOST"
    })
  }
  const setStaging = (e) => {
    setProperty({
      ...property,
      stagingFee: {
        ...property.stagingFee,
        hours: e.target.value
      }
    })
  }
  const createProperty = () => {
    try {
      dispatch(createNewProperty(JSON.stringify(property))); 
      nextStep();     
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-md">
        <div className="relative bg-gray-900">
          <div className="absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
            <div className="h-full w-full xl:grid xl:grid-cols-2">
              <div className="h-full xl:relative xl:col-start-2">
                <img
                  className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                  src="https://legendarystorage.s3.us-east-2.amazonaws.com/background/bg-discuss-guest.jpg"
                  alt="People working on laptops"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                />
              </div>
            </div>
          </div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
            <div className="relative xl:col-start-1 py-3 sm:py-5 md:py-16">
              <p className="text-2xl text-white font-extrabold">Fees</p>
              <div className="py-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <span className="text-white">Deposite Fee($)</span>
                    <InputBox type="number" onchange={setDepositeFee}/>
                    <span className="text-white text-xs">As a host, you can set a Deposit fee for your property</span>
                  </div>
                </div>
                <p className="text-white mt-1">Pet Fee($)</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="col-span-1">
                    <InputBox type="number" placeholder="Pet allow fee" onchange={setPetFee}/>
                    <span className="text-white text-xs">Please enter the amount you want to charge for each pet per night.</span>
                  </div>
                  <div className="col-span-1">
                    <InputBox type="number" placeholder="How many?" onchange={setPetLimit}/>
                    <span className="text-white text-xs">How many pets are you allowing inside your property?</span>
                  </div>
                </div>
                <p className="text-white mt-2">Other service offered by Legendary Estates Airbnb</p>
                <div className="flex items-center">
                  <Toggle getToggleValue={()=> {setManageType(true)}} removeToggleValue={()=> {setManageType(false)}}/>
                  <span className="text-white text-xs">Do you want Legendary Estates Airbnb to manage the property for you?</span>
                </div>
                <p className="text-white mt-2">Staging by Legendary Estates Airbnb</p>
                <div>
                  <InputBox onchange={setStaging}/>
                  <span className="text-white text-xs">
                    Please enter the number of hours you want to have your property staged. Please leave it blank if you don’t
                    want staging for your space
                  </span>
                </div>
              </div>
              <div className="flex justify-between py-3">
                <ButtonComponent onClick={previousStep} label="Prev" classes="bg-indigo-500 hover-bg-indigo-600" />
                <ButtonComponent onClick={createProperty} label="Next" classes="bg-indigo-500 hover-bg-indigo-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HostFeesComponent;
