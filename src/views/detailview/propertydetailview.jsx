import React from "react";
import DetailViewCarouselComponent from "components/detailview/carousel";
import GoogleMapComponent from "components/detailview/googlemap";
import DateRangerComponent from "components/detailview/dateranger";
import { useEffect, useState } from "react";
import { getPropertyById } from "reduxstore/propertyreducer/action";
import { useDispatch, useSelector } from "react-redux";
import AmenitiesComponent from "components/detailview/amenities";
import GuestIcon from "assets/imgs/icon/user.png";
import BedroomIcon from "assets/imgs/icon/sleep.png";
import BedIcon from "assets/imgs/icon/bed.png";
import BathroomIcon from "assets/imgs/icon/bathtub.png";
import ReserveComponent from "components/detailview/reserve";
import ReveiwsComponent from "components/detailview/reviews";
import ImageViewComponent from "components/detailview/carousel/imageview";
import HostInfoComponent from "components/detailview/hostinfo/hostinfo";

const PropertyDetailViewPage = (props) => {
  //Get Detail Data from API
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPropertyById(props.match.params.id));
  }, []);
  const property = useSelector((state) => state.properties.property);
  console.log(property);
  const stats = [
    { label: "Guests", value: property?.guestNum, icon: GuestIcon },
    { label: "Bedrooms", value: property?.bedroomNum, icon: BedroomIcon },
    { label: "Beds", value: property?.bedsNum, icon: BedIcon },
    { label: "Full baths", value: property?.fullBathNum | 0, icon: BathroomIcon },
    { label: "Half baths", value: property?.halfBathNum | 0, icon: BathroomIcon },
  ];

  //Get Checked in, Checked out Data
  const [checked, setChecked] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <DetailViewCarouselComponent images={property?.imageURLs} />
      </div>
      <ImageViewComponent
        images={property?.imageURLs}
        isOpen={isOpen}
        closeViewer={() => {
          setIsOpen(false);
        }}
      />
      <div className="min-h-screen mt-20 pt-10">
        <main className="-mt-24 pb-8">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="sr-only">Profile</h1>
            {/* Main 3 column grid */}
            <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
              {/* Left column */}
              <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                <HostInfoComponent property={property} />
                {/* Welcome panel */}
                <section aria-labelledby="profile-overview-title">
                  <div className="rounded-lg bg-white overflow-hidden shadow">
                    <h2 className="sr-only" id="profile-overview-title">
                      Profile Overview
                    </h2>
                    <div className="bg-white p-6">
                      <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="sm:flex sm:space-x-5">
                          <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                            <p className="text-sm font-medium text-gray-600">Welcome to,</p>
                            <p className="text-xl font-bold text-gray-900 sm:text-2xl">{property?.propertyName}</p>
                            <div>
                              <p className="border-0 py-2 text-sm text-gray-500">
                                Hosted By <span className="font-bold text-lg text-gray-700">{property?.hostInfo?.name}</span>
                              </p>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800">
                                {property?.propertyType}
                              </span>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-yellow-100 text-yellow-800">
                                {property?.propertySpaceFeature}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-5 ">
                      {stats.map((stat) => (
                        <div key={stat.label} className="px-2 py-3 text-sm font-medium text-center flex align-middle">
                          <img src={stat.icon} className="h-7 px-3" />
                          <span className="text-gray-900">
                            {stat.value}
                            {"  "}
                          </span>
                          <span className="text-gray-600 ml-2">{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Actions panel */}
                <section aria-labelledby="quick-links-title">
                  <div className="rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:gap-px">
                    <div className="px-4 py-8 w-100">
                      <p className="text-gray-600 text-lg font-bold">Know more about this space</p>
                      <span className="text-gray-600">{property?.propertyDescription}</span>
                    </div>
                  </div>
                </section>
                <section aria-labelledby="quick-links-title">
                  <div className="rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:gap-px">
                    <div className="px-4 py-8 w-100">
                      <p className="text-gray-600 text-lg font-bold">Amenities</p>
                      <AmenitiesComponent data={property?.amenities} />
                    </div>
                  </div>
                </section>
                <section aria-labelledby="quick-links-title">
                  <p className="text-gray-600 text-lg font-bold">Location</p>
                  <GoogleMapComponent address={property?.propertyLocation} />
                </section>
              </div>

              {/* Right column */}
              <div className="grid grid-cols-1 gap-4">
                <section aria-labelledby="announcements-title">
                  <div className="rounded-lg w-full bg-white overflow-hidden shadow">
                    <DateRangerComponent autoResponsive={false} setCheckInOut={setChecked} property={property} />
                  </div>
                </section>
                <ReserveComponent checkedInOut={checked} propertyId={props.match.params.id} property={property} />
              </div>
            </div>
            <div>
              <div className="mt-5">
                <p className="text-gray-600 text-lg font-bold">Reviews</p>
                <ReveiwsComponent reviews={property.reviews} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default PropertyDetailViewPage;
