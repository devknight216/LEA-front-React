import React, { useEffect, useState } from "react";
import { ButtonComponent } from "components/basicui/basicui";
import { features, propertyDescribe } from "./constant";
import MultiSelect from "react-multi-select-component";

function HostTypeComponent({ nextStep, previousStep, property, setProperty }) {
  const [propertyDescribeWord, setPropertyDescribeWord] = useState([]);
  const getPropertyFeature = (e, params) => {
    setProperty({
      ...property,
      [params]: e.target.value,
    });
  };
  useEffect(() => {
    setProperty({
      ...property,
      propertyspecialFeature: propertyDescribeWord.map((item) => item.label),
    });
  }, [propertyDescribeWord]);
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
              <p className="text-2xl text-white font-extrabold">Choose the Type and Feature of your property</p>
              <div className="py-5">
                {features.map((item, index) => (
                  <div key={index} className="py-3">
                    <span className="text-white">{item.label}</span>
                    <div className="mt-1">
                      <select
                        name={item.variableName}
                        className="px-5 py-2 w-full rounded-md"
                        onChange={(e) => {
                          getPropertyFeature(e, item.variableName);
                        }}
                      >
                        {item.properties.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                ))}
                <div className="py-5">
                  <span className="text-white">Property Highlights</span>
                  <MultiSelect options={propertyDescribe} onChange={setPropertyDescribeWord} value={propertyDescribeWord} />
                </div>
              </div>
              <div className="flex justify-between py-5">
                <ButtonComponent onClick={previousStep} label="Prev" classes="bg-indigo-500 hover-bg-indigo-600" />
                <ButtonComponent onClick={nextStep} label="Next" classes="bg-indigo-500 hover-bg-indigo-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HostTypeComponent;
