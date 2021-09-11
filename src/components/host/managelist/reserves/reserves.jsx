import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHostReservations } from "reduxstore/bookreducer/action";

function ManageListReserveComponent() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const properties = useSelector((state) => state.reservation.reservations);
  useEffect(() => {
    dispatch(getHostReservations(user.userID));
  }, []);
  return (
    <div className="py-5">
      <div className="relative bg-gray-900">
        <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
          <div className="h-full w-full xl:grid xl:grid-cols-2">
            <div className="h-full xl:relative xl:col-start-2">
              <img
                className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                src="https://legendarystorage.s3.us-east-2.amazonaws.com/background/bg-arrive-guest1.jpg"
                alt="People working on laptops"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
              />
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
          <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
            <h2 className="text-sm font-semibold tracking-wide uppercase">
              <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
                Your reservations
              </span>
            </h2>
            <p className="mt-3 text-3xl font-extrabold text-white">Guests will soon be on the way.</p>
            <p className="mt-5 text-lg text-gray-300">When they book, they’ll show up here.</p>
          </div>
        </div>
      </div>
      <div>
        <p className="mt-3 border-b pb-3 text-3xl font-extrabold text-gray-700">Reserves</p>
        <div className="py-3">
          {properties &&
            properties.map((property, index) => (
              <div className="" key={index}>
                <div className="border rounded-lg py-3 px-8">
                  <div className="flex space-x-6 items-center">
                    <div>
                      {property.imageURLs && (
                        <img src={property?.imageURLs[0].url} className="w-16 h-16 object-cover rounded-lg shadow-lg" />
                      )}
                    </div>
                    <div>
                      <p className="text-gray-500 text-md font-bold"> {property.propertyName} </p>
                      <div className="flex space-x-6">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {property.nightlyRate}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                          {property.manageType}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          {property.propertySpaceFeature}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:px-8 md:px-6 sm-px-4 px-2 py-5">
                    {property.reservations?.map((reservation, index) => (
                      <div key={index} className="py-2 border-b flex items-center justify-between">
                        <div>
                          <p>
                            During: {reservation.from.substr(0, 10)} ~ {reservation.to.substr(0, 10)}
                          </p>
                          <p>Cost: ${reservation.total}</p>
                        </div>
                        <div>
                          <p className="cursor-pointer text-indigo-600">Edit</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ManageListReserveComponent;
