import React, { useEffect, useState } from "react";
import { InputBox, Toggle } from "components/basicui/basicui";
import { Toast } from "components/common/notification";

function HostNewPropertyStepOne({ nextStep, property, setProperty, setStep }) {
  const [location, setLocation] = useState({
    apartment: "",
    street: "",
    city: "",
    state: "",
    country: "United States",
    zip: "",
  });

  const locationInfoLayout = [
    {
      label: "Apartment, Suite etc",
      name: "apartment",
      onchange: (e) => {
        setLocation({ ...location, apartment: e.target.value });
      },
    },
    {
      label: "Street address",
      name: "street",
      onchange: (e) => {
        setLocation({ ...location, street: e.target.value });
      },
    },
    {
      label: "City",
      name: "city",
      onchange: (e) => {
        setLocation({ ...location, city: e.target.value });
      },
    },
    {
      label: "State / Province",
      name: "state",
      onchange: (e) => {
        setLocation({ ...location, state: e.target.value });
      },
    },
    {
      label: "ZIP / Postal",
      name: "zip",
      onchange: (e) => {
        setLocation({ ...location, zip: e.target.value });
      },
    },
  ];

  //Get Property Name
  const getProprtyName = (e) => {
    setProperty({
      ...property,
      propertyName: e.target.value,
    });
  };

  //Get Nightly Rate
  const getNightlyRate = (e) => {
    setProperty({
      ...property,
      nightlyRate: e.target.value,
    });
  };

  //Get Property Description
  const getPropertyDescription = (e) => {
    setProperty({
      ...property,
      propertyDescription: e.target.value,
    });
  };

  //Get country name
  const getCountryName = (e) => {
    setLocation({
      ...location,
      country: e.target.value,
    });
  };

  //Get property Location
  useEffect(() => {
    if (location.apartment && location.city && location.state && location.street && location.zip && location.country) {
      setProperty({
        ...property,
        propertyLocation: location,
      });
    }
  }, [location]);

  //Get Instant Bool
  const getInstantBookToggle = (value) => {
    setProperty({
      ...property,
      instantBook: true,
    });
  };
  const removeInstantBookToggle = (value) => {
    setProperty({
      ...property,
      instantBook: false,
    });
  };

  //Go to Next
  const gotoNext = () => {
    if (property.propertyName && property.nightlyRate && property.propertyDescription && property.propertyLocation) {
      setStep([
        { id: "01", name: "Job details", status: "complete" },
        { id: "02", name: "Application form", status: "current" },
        { id: "03", name: "Preview", status: "upcoming" },
      ]);
      nextStep();
    } else {
      Toast("", "You should fill all fields", "danger");
    }
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto rounded-md shadow-md p-3 sm:p-8 bg-white px-2">
        <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Add your property</h3>
        </div>
        <div className="py-5">
          <form>
            <div className="grid grid-cols-1 sm:gird-cols-2 md:grid-cols-3 md:gap-4 py-2">
              <div className="col-span-2">
                <InputBox label="Property Name" name="propertyName" type="text" onchange={getProprtyName} />
              </div>
              <div className="col-span-1">
                <InputBox label="Nightly Rate($)" name="nightlyRate" type="number" onchange={getNightlyRate} />
              </div>
              <div className="col-span-1">
                <InputBox label="Weekly Discount(%)" name="nightlyRate" type="number" onchange={getNightlyRate} />
              </div>
              <div className="col-span-1">
                <InputBox label="Monthly Discount(%)" name="nightlyRate" type="number" onchange={getNightlyRate} />
              </div>
              <div className="col-span-3 py-4">
                <Toggle label="Instant Book" getToggleValue={getInstantBookToggle} removeToggleValue={removeInstantBookToggle} />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                className="border  rounded-md p-4 outline-none border-gray-300 w-full"
                rows={5}
                name="propertyDescription"
                onChange={getPropertyDescription}
              />
            </div>
            <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Property Location</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 mt-4">
              {locationInfoLayout.map((item, index) => (
                <div key={index}>
                  <InputBox label={item.label} name={item.name} type="text" onchange={item.onchange} />
                </div>
              ))}
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Country / Region
                </label>
                <div className="mt-1">
                  <select
                    className="shadow-sm focus:outline-none block w-full  h-full p-3 sm:text-sm border-gray-300  border rounded-md"
                    onChange={getCountryName}
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
        <footer>
          <div className="py-5 text-center">
            <button className="bg-red-500 focus:bg-red-700 text-white px-10 py-2 rounded-md" onClick={gotoNext}>
              Next
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default HostNewPropertyStepOne;
