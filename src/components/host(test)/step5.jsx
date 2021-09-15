import { ButtonComponent } from "components/basicui/basicui";
import { InputBox } from "components/basicui/basicui";
import { Toast } from "components/common/notification";
import React from "react";

function HostGuestComponent({ nextStep, previousStep, property, setProperty }) {
  const setGuests = (e, param) => {
    setProperty({
      ...property,
      [param]: e.target.value,
    });
  };
  const gotoNext = () => {
    if (property.guestNum && property.bedsNum && property.bedroomNum && property.bathroomNum) {
      nextStep();
    } else {
      Toast("", "You should add all information", "danger");
    }
  };
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
              <p className="text-2xl text-white font-extrabold">Guest info</p>
              <div className="py-5">
                <div className="py-2">
                  <span className="text-white">Guests (# of guests that the property an accomodate)</span>
                  <InputBox
                    onchange={(e) => {
                      setGuests(e, "guestNum");
                    }}
                    type="number"
                  />
                </div>
                <div className="py-2">
                  <span className="text-white">Beds (# of beds in the property that guests can use)</span>
                  <InputBox
                    onchange={(e) => {
                      setGuests(e, "bedsNum");
                    }}
                    type="number"
                  />
                </div>
                <div className="py-2">
                  <span className="text-white">Bedrooms (# of bedrooms in the property)</span>
                  <InputBox
                    onchange={(e) => {
                      setGuests(e, "bedroomNum");
                    }}
                    type="number"
                  />
                </div>
                <div className="py-2">
                  <span className="text-white">Bathrooms (# of bathrroms in the property)</span>
                  <InputBox
                    onchange={(e) => {
                      setGuests(e, "bathroomNum");
                    }}
                    type="number"
                  />
                </div>
              </div>
              <div className="flex justify-between py-5">
                <ButtonComponent onClick={previousStep} label="Prev" classes="bg-indigo-500 hover-bg-indigo-600" />
                <ButtonComponent onClick={gotoNext} label="Next" classes="bg-indigo-500 hover-bg-indigo-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HostGuestComponent;
