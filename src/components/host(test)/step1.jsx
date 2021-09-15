import React from "react";
import { Toggle } from "components/basicui/basicui";
import { ButtonComponent } from "components/basicui/basicui";
import { InputBox } from "components/basicui/basicui";
import { Toast } from "components/common/notification";

function HostMainInfoComponent({ nextStep, previousStep, property, setProperty }) {
  const getData = (e, value) => {
    setProperty({
      ...property,
      [value]: e.target.value,
    });
  };
  const isInstantBook = (type) => {
    type
      ? setProperty({
          ...property,
          instantBook: true,
        })
      : setProperty({
          ...property,
          instantBook: false,
        });
  };
  const gotoNext = () => {
    if (property.propertyName && property.nightlyRate && property.weeklyDiscount && property.monthlyDiscount) {
      nextStep();
    } else {
      Toast("", "You should fill all fields", "danger");
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
              <p className="text-2xl text-white font-extrabold">Main Information</p>
              <div className="py-3">
                <span className="text-white">Property Name</span>
                <InputBox
                  onchange={(e) => {
                    getData(e, "propertyName");
                  }}
                  type="text"
                />
              </div>
              <div className="py-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-2">
                  <span className="text-white">Nightly Rate($)</span>
                  <InputBox
                    onchange={(e) => {
                      getData(e, "nightlyRate");
                    }}
                    type="number"
                  />
                </div>
                <div>
                  <span className="text-white">Weekly Discount(%)</span>
                  <InputBox
                    onchange={(e) => {
                      getData(e, "weeklyDiscount");
                    }}
                    type="number"
                  />
                </div>
                <div>
                  <span className="text-white">Monthly Discount(%)</span>
                  <InputBox
                    onchange={(e) => {
                      getData(e, "monthlyDiscount");
                    }}
                    type="number"
                  />
                </div>
                <div>
                  <span className="text-white">Instant Book</span>
                  <Toggle
                    getToggleValue={() => {
                      isInstantBook(true);
                    }}
                    removeToggleValue={() => {
                      isInstantBook(false);
                    }}
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

export default HostMainInfoComponent;
