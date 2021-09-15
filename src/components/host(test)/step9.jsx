import React, { useState } from "react";
import { ButtonComponent } from "components/basicui/basicui";
import ImageUploadToAWSComponent from "components/common/uploadImage";
const layout = [
  {
    title: "Check in and Check out Information",
    content:
      "Please indicate your desired check in and check out time for your guests. Please also indicate any special instructions related to check in and out that your guests should take note of.",
    image: "",
    variableName: "checkinout",
  },
  {
    title: "House Rules",
    content: "Please indicate your house rules that guests should be aware of.",
    image: "",
    variableName: "hostRule",
  },
  {
    title: "Neighborhood and Local Spots",
    content:
      "Let your guests know about places they can explore around the property. You can offer suggestions of the best places to eat, hang out and shop.",
    image: "",
    variableName: "neighboarhoodLoalSpots",
  },
];
function HostGuidesComponent({ nextStep, previousStep }) {
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
            <div className="relative xl:col-start-1 py-1 sm:py-3 md:py-16">
              <div className="py-2">
                {layout.map((item, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-extrabold tracking-tight text-white">{item.title}</h4>
                    <p className="text-gray-500 text-sm italic">{item.content}</p>
                    <div className="w-full py-1">
                      <textarea rows={3} className="border w-full rounded-md p-2" name={item.variableName} />
                    </div>
                  </div>
                ))}
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

export default HostGuidesComponent;
