import { Toggle } from "components/basicui/basicui";
import { ButtonComponent } from "components/basicui/basicui";
import React, { useEffect, useState } from "react";
import MultiSelect from "react-multi-select-component";
import { amenities } from "./constant";
const specialAmenities = [
  "Pets Allowed",
  "Wifi",
  "TV",
  "Kitchen",
  "Free parking on premises",
  "Pool",
  "Air Conditioning",
  "Gym",
  "Dedicated workspace",
];
function HostAmanitiesComponent({ nextStep, previousStep, property, setProperty }) {
  const [seletedAmenities, setSelectedAmenities] = useState([]);
  //Add Main Amenities value
  const addMainAmenities = (value) => {
    setSelectedAmenities([...seletedAmenities, { label: value, value: value }]);
  };
  //Remove Main Amenities Value
  const removeMainAmenities = (index) => {
    setSelectedAmenities(seletedAmenities.filter((item) => item.value !== index));
  };

  useEffect(() => {
    setProperty({
      ...property,
      amenities: seletedAmenities.map((item) => item.label)
    })
  }, [seletedAmenities]);
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
              <p className="text-2xl text-white font-extrabold">Amenities</p>
              <div className="py-5">
                <div>
                  <textarea className="w-full rounded-lg p-3" rows={5} value={ property.amenities } disabled/>
                  <div className="py-5 grid grid-cols-2 md:grid-cols-3">
                    {specialAmenities.map((item) => (
                      <div key={item} className="my-2 flex items-center text-white">
                        <Toggle label={item} getToggleValue={addMainAmenities} removeToggleValue={removeMainAmenities} />
                      </div>
                    ))}
                  </div>
                  <MultiSelect options={amenities} value={seletedAmenities} onChange={setSelectedAmenities} labelledBy="Select" />
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

export default HostAmanitiesComponent;
