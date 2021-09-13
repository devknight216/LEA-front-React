import React, { useState, useEffect } from "react";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { useHistory } from "react-router-dom";
import { classNames, getDaysArray } from "shared/function";
import { Toast } from "components/common/notification";
import { useSelector } from "react-redux";
//Guest Data
const GuestLayout = [
  { title: "Adult", param: "adult" },
  { title: "Children", param: "children" },
];

function ReserveComponent({ property, checkedInOut, propertyId }) {
  const [guests, setGuests] = useState({
    adult: 1,
    children: 0,
    infants: 0,
    pets: 0,
  });
  //Pet Allowed?
  const [isPet, setIsPet] = useState(false);

  //Increase or Decrease the Gust Num
  const CalcGuestNum = (method, type) => {
    if (method === "INCREASE" && guests.adult + guests.children < property?.guestNum) {
      setGuests({ ...guests, [type]: guests[type] + 1 });
    } else if (method === "DECREASE") {
      setGuests({ ...guests, [type]: guests[type] > 0 ? guests[type] - 1 : 0 });
    }
  };

  //Get Date Array
  const [dateArray, setDateArray] = useState([]);
  useEffect(() => {
    if (checkedInOut?.from && checkedInOut?.to) {
      const array = getDaysArray(checkedInOut?.from, checkedInOut?.to);
      setDateArray(array);
    }
  }, [checkedInOut]);

  //Calculate
  const [costValue, setCostValue] = useState({
    nightly: 0,
    deposite: 0,
    pet: 0,
    tax: 0,
    disamount: 0,
  });
  useEffect(() => {
    setCostValue({
      nightly: dateArray.length - 1 > 0 ? (property.nightlyRate * (dateArray.length - 1)) | 0 : 0,
      deposite: property?.depositFee | 0,
      pet: (property?.petAllowFee?.fee | 0) * guests.pets,
      tax:
        dateArray.length - 1 > 0
          ? (
              (property.nightlyRate * (dateArray.length - 1) +
                (property?.depositFee | 0) +
                (property?.petAllowFee?.fee | 0) * guests.pets) *
              0.065
            ).toFixed(2)
          : 0,
      disamount: 0,
    });
  }, [dateArray, guests]);

  //Go to Book
  const history = useHistory();
  const AuthToken = useSelector((state) => state.auth.token);
  const gotoBook = () => {
    if (AuthToken) {
      if (dateArray.length) {
        history.push(
          `/user/book/${propertyId}?adult=${guests.adult}&children=${guests.children}&infants=${guests.infants}&checkedin=${checkedInOut?.from}&checkedout=${checkedInOut?.to}&pets=${guests.pets}`
        );
      } else {
        Toast("", "Please choose checked-in and checked-out", "info");
      }
    } else {
      Toast("", "You must sign in", "info");
      history.push("/signin");
    }
  };

  return (
    <div>
      <section aria-labelledby="announcements-title">
        <div className="rounded-lg bg-white overflow-hidden shadow">
          <div className="text-center w-full">
            {checkedInOut && (
              <div className="px-4 py-5">
                <div className="flex justify-between border border-gray-900 py-3 rounded-2xl">
                  <div className="w-full text-center border-r border-gray-900">
                    <p>{checkedInOut?.from}</p>
                  </div>
                  <div className="w-full text-center">
                    <p>{checkedInOut?.to}</p>
                  </div>
                </div>
              </div>
            )}
            <div className="flow-root mt-6">
              <ul className="-my-5 py-5">
                {GuestLayout.map((item, index) => (
                  <div className="flex justify-between px-5 gird grid-cols-2" key={index}>
                    <p>{item.title}:</p>
                    <div className="flex justify-between w-1/2">
                      <div
                        className="cursor-pointer"
                        onClick={() => {
                          CalcGuestNum("DECREASE", item.param);
                        }}
                      >
                        <MinusCircleIcon
                          className={classNames(guests[item.param] > 0 ? "text-gray-800" : "text-gray-300", "h-6")}
                        />
                      </div>
                      {guests[item.param]}
                      <div
                        className="cursor-pointer"
                        onClick={() => {
                          CalcGuestNum("INCREASE", item.param);
                        }}
                      >
                        <PlusCircleIcon
                          className={classNames(
                            guests.adult + guests.children < property?.guestNum ? "text-gray-800" : "text-gray-300",
                            "h-6"
                          )}
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <div className="flex justify-between px-5 gird grid-cols-2">
                  <p>Infants:</p>
                  <div className="flex justify-between w-1/2">
                    <div
                      className="cursor-pointer"
                      onClick={() => {
                        setGuests({
                          ...guests,
                          infants: guests.infants ? guests.infants - 1 : 0,
                        });
                      }}
                    >
                      <MinusCircleIcon className={classNames(guests.infants > 0 ? "text-gray-800" : "text-gray-300", "h-6")} />
                    </div>
                    {guests.infants}
                    <div
                      className="cursor-pointer"
                      onClick={() => {
                        setGuests({
                          ...guests,
                          infants: guests.infants < 5 ? guests.infants + 1 : guests.infants,
                        });
                      }}
                    >
                      <PlusCircleIcon className={classNames(guests.infants < 5 ? "text-gray-800" : "text-gray-300", "h-6")} />
                    </div>
                  </div>
                </div>
                <div>
                  {property?.amenities?.find((element) => element === "Pets Allowed") && (
                    <div className="py-5 px-5">
                      <div className="flex justify-left items-center">
                        <input
                          type="checkbox"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          onChange={(e) => {
                            setIsPet(e.target.checked);
                            setGuests({ ...guests, pets: 0 });
                          }}
                        />
                        <p className="ml-2 text-gray-400">Traveling with pets</p>
                      </div>
                      {isPet && (
                        <div>
                          <div className="flex justify-between gird grid-cols-2">
                            <p>pets:</p>
                            <div className="flex justify-between w-1/2">
                              <div
                                className="cursor-pointer"
                                onClick={() => {
                                  setGuests({
                                    ...guests,
                                    pets: guests.pets ? guests.pets - 1 : 0,
                                  });
                                }}
                              >
                                <MinusCircleIcon
                                  className={classNames(guests.pets > 0 ? "text-gray-800" : "text-gray-300", "h-6")}
                                />
                              </div>
                              {guests.pets}
                              <div
                                className="cursor-pointer"
                                onClick={() => {
                                  setGuests({ ...guests, pets: guests.pets + 1 });
                                }}
                              >
                                <PlusCircleIcon
                                  className={classNames(guests.pets < 3 ? "text-gray-800" : "text-gray-300", "h-6")}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="py-5 px-10">
                  <p className="text-gray-800">
                    <span className="text-lg font-bold">${property?.nightlyRate}</span>
                    /night
                  </p>
                  <div className="flex justify-between py-4 px-5 text-gray-800">
                    <p className="underline">
                      ${property?.nightlyRate} x {dateArray.length ? dateArray.length - 1 : 0} nights
                    </p>
                    <p>${costValue.nightly}</p>
                  </div>
                  {property?.depositFee && (
                    <div className="flex pb-5 px-5 justify-between">
                      <p className="underline">Deposit fee</p>
                      <p>${costValue.deposite}</p>
                    </div>
                  )}
                  {isPet && (
                    <div className="flex pb-5 px-5 justify-between">
                      <p className="underline">Pet fee</p>
                      <p>${costValue.pet}</p>
                    </div>
                  )}
                  {/* <div className="flex pb-5 px-5 justify-between">
                    <p className="underline">Taxes</p>
                    <p>${costValue.tax}</p>
                  </div> */}
                  <div className="flex pb-5 px-5 justify-end">
                    <span className="font-bold mr-2">{guests.adult + guests.children}</span> Guests
                  </div>
                  <hr />
                  <div className="flex justify-between px-5 py-2">
                    <p className="font-bold">Total</p>
                    <p className="font-bold">
                      ${parseFloat(costValue.deposite) + parseFloat(costValue.nightly) + parseFloat(costValue.pet)}
                    </p>
                  </div>
                </div>
              </ul>
            </div>
            <div className="mt-6">
              <div
                onClick={gotoBook}
                className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-800"
              >
                Reserve
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ReserveComponent;
