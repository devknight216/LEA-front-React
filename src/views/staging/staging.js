import React, { useState } from "react";
import ImageItem1 from "assets/imgs/background/Living room.jpg";
import ImageItem2 from "assets/imgs/background/Kitchen.jpg";
import ImageItem3 from "assets/imgs/background/dining.jpg";
import ImageItem4 from "assets/imgs/background/bedroom.jpg";
import { CheckIcon } from "@heroicons/react/outline";
import StagingInfoModalComponent from "components/staging/popup";

function Stagingpage() {
  const [isOpen, setIsOpen] = useState(false);
  //Run Staging Modal
  const lunchStagingModal = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 py-10 px-5 sm:px-16">
        <div className="py-5">
          <h2 className="md:text-5xl text-3xl  font-extrabold tracking-tight text-gray-900">
            Thinking of staging
            <br /> your home
            <br /> or apartment?
          </h2>
          <p className="my-2 sm:my-12 text-2xl md:px-3 text-gray-600">Legendary Estates Airbnb can do it for you!</p>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="w-full h-52 ">
              <img src={ImageItem1} className="object-cover w-full h-full shadow-lg rounded-lg" />
            </div>
            <div className="w-full h-52 ">
              <img src={ImageItem2} className="object-cover w-full h-full shadow-lg rounded-lg" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="w-full h-52 ">
              <img src={ImageItem3} className="object-cover w-full h-full shadow-lg rounded-lg" />
            </div>
            <div className="w-full h-52 ">
              <img src={ImageItem4} className="object-cover w-full h-full shadow-lg rounded-lg" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-10 md:px-14 px-5">
        <div className="text-center py-10">
          <h2 className="text-5xl font-extrabold tracking-tight text-gray-900">Staging works!</h2>
        </div>
        <div className="py-5 text-gray-600">
          <span>
            Legendary Estates Airbnb offers staging services for our Airbnb hosts providing an array of furniture and decor for a
            monthly fee. In addition, our staging services are available for hosts whose properties are already furnished, to make
            the property more aesthetically pleasing and comfortable to potential guests. <br />
            <br />
            Often customers, or guests, are seeking a particular ambiance or vibe when searching for Airbnb properties.
            Professionals, families, and individuals utilize Airbnb for various purposes, and Legendary Estates Airbnb offers our
            hosts the opportunity to make the most of their listings!
          </span>
        </div>
        <div>
          <div className="grid md:grid-cols-2 gap-10 text-gray-600">
            <div>
              <ul className="space-y-8">
                <li>
                  <div className="flex items-center">
                    <CheckIcon className="h-8 w-8" />
                    <p className="ml-3">Get a special staging offer for listing your property in Legendary Estates Airbnb.</p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <CheckIcon className="h-8 w-8" />
                    <p className="ml-3">Get hassle – free consultations from our team of staging experts</p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <CheckIcon className="h-8 w-8" />
                    <p className="ml-3"> Transform your home or apartment and get interested buyers in no time!</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="md:text-5xl text-3xl font-extrabold tracking-tight text-gray-900">
                Let Legendary Estates Airbnb stage your
                <br />
                home or apartment
                <br /> for you!
              </h2>
            </div>
          </div>
        </div>
        <div className="text-center py-16">
          <div
            onClick={lunchStagingModal}
            className="md:px-12 px-8 cursor-pointer py-5 mx-auto max-w-xs bg-red-500 rounded-md hover:bg-red-600 text-white"
          >
            Schedule an appointment now!
          </div>
        </div>
      </div>
      <StagingInfoModalComponent isOpen={isOpen} setisOpen={setIsOpen} />
    </div>
  );
}

export default Stagingpage;
