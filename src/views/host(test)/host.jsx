import React, { useEffect, useState } from "react";
import HostMainInfoComponent from "components/host(test)/step1";
import HostDescriptionComponent from "components/host(test)/step2";
import HostLocationComponent from "components/host(test)/step3";
import HostTypeComponent from "components/host(test)/step4";
import HostGuestComponent from "components/host(test)/step5";
import HostAmanitiesComponent from "components/host(test)/step6";
import HostImagesComponent from "components/host(test)/step7";
import HostFeesComponent from "components/host(test)/step8";
import HostGuidesComponent from "components/host(test)/step9";
import SuccessHostComponent from "components/host(test)/success";
import WelcomeToHostComponent from "components/host(test)/welcome";
import StepWizard from "react-step-wizard";
import { useSelector } from "react-redux";

function HostNewPropertyPage() {
  const host = useSelector(state => state.auth.user);
  const [property, setProperty] = useState({
    propertyName: "",
    instantBook: false,
    nightlyRate: 0,
    weeklyDiscount: 0,
    monthlyDiscount: 0,
    propertyDescription: "",
    imageURLs: [],
    hostInfo: {
      name: host?.name,
      userId: host?.userID,
      email: host?.email,
    },
    propertyLocation: {
      apartment: "",
      street: "",
      city: "",
      state: "",
      country: "",
      zip: "",
    },
    propertyType: "Apartment",
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
      fee: 0,
    },
    manageType: "HOST",
    depositFee: 0,
    stagingFee: {
      hours: 0,
      rate: 80,
    },
  });
  useEffect(() => {
    console.log(property);
  }, [property]);
  return (
    <div>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-2 py-5 sm:py-16 sm:px-5">
          <StepWizard>
            <WelcomeToHostComponent />
            <HostMainInfoComponent property={property} setProperty={setProperty} />
            <HostDescriptionComponent property={property} setProperty={setProperty} />
            <HostLocationComponent property={property} setProperty={setProperty} />
            <HostTypeComponent property={property} setProperty={setProperty} />
            <HostGuestComponent property={property} setProperty={setProperty} />
            <HostAmanitiesComponent property={property} setProperty={setProperty} />
            <HostFeesComponent property={property} setProperty={setProperty} />
            <HostGuidesComponent property={property} setProperty={setProperty} />
            <HostImagesComponent property={property} setProperty={setProperty} />
            <SuccessHostComponent />
          </StepWizard>
        </div>
      </div>
    </div>
  );
}

export default HostNewPropertyPage;
