import GuestIcon from "assets/imgs/icon/user.png";
import BedroomIcon from "assets/imgs/icon/sleep.png";
import BedIcon from "assets/imgs/icon/bed.png";
import BathroomIcon from "assets/imgs/icon/bathtub.png";
import ApartmentIcon from "assets/imgs/icon/apartment.png";
import HotelIcon from "assets/imgs/icon/hotel.png";
import HomeIcon from "assets/imgs/icon/home.png";
import PetIcon from "assets/imgs/icon/pet.png";
import DetailViewCarouselComponent from "components/detailview/carousel";
import GoogleMapComponent from "components/detailview/googlemap";
import DateRangerComponent from "components/detailview/dateranger";
import ReactStars from "react-rating-stars-component";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getPropertyById } from "reduxstore/propertyreducer/action";
import { useDispatch, useSelector } from "react-redux";

const stats = [
  { label: "guests", value: 12, icon: GuestIcon },
  { label: "bedrooms", value: 4, icon: BedroomIcon },
  { label: "beds", value: 2, icon: BedIcon },
  { label: "baths", value: 2, icon: BathroomIcon },
];
const recentHires = [
  {
    name: "Leonard Krasner",
    handle: "leonardkrasner",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
  },
  {
    name: "Floyd Miles",
    handle: "floydmiles",
    imageUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
  },
  {
    name: "Emily Selman",
    handle: "emilyselman",
    imageUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
  },
  {
    name: "Kristin Watson",
    handle: "kristinwatson",
    imageUrl:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
  },
];

const PropertyDetailViewPage = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPropertyById(props.match.params.id));
  }, []);

  const property = useSelector((state) => state.properties.property);
  console.log(property);
  return (
    <div>
      <DetailViewCarouselComponent />
      <div className="min-h-screen mt-20 pt-10">
        <main className="-mt-24 pb-8">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="sr-only">Profile</h1>
            {/* Main 3 column grid */}
            <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
              {/* Left column */}
              <div className="grid grid-cols-1 gap-4 lg:col-span-2">
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
                            <p className="text-sm font-medium text-gray-600">
                              Welcome to,
                            </p>
                            <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                              Spacious Midtown/ Downtown mid rise
                            </p>
                            <p className="text-sm font-medium text-gray-600">
                              Legendary Real Estate
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-4 sm:divide-y-0 sm:divide-x">
                      {stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="px-6 py-5 text-sm font-medium text-center flex align-middle"
                        >
                          <img src={stat.icon} className="h-7 px-3" />
                          <span className="text-gray-900">
                            {stat.value}
                          </span>{" "}
                          <span className="text-gray-600">{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Actions panel */}
                <section aria-labelledby="quick-links-title">
                  <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:gap-px">
                    <div className="px-4 py-8 w-100">
                      <p className="text-gray-600 text-lg font-bold">About</p>
                      <span className="text-gray-600">
                        Cum qui rem deleniti. Suscipit in dolor veritatis sequi
                        aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut
                        repudiandae possimus. Nihil ex tempora neque cum
                        consectetur dolores.
                      </span>
                    </div>
                  </div>
                </section>
                <section aria-labelledby="quick-links-title">
                  <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:gap-px">
                    <div className="px-4 py-8 w-100">
                      <p className="text-gray-600 text-lg font-bold">
                        What this place offers
                      </p>
                      <span className="text-gray-600">
                        Cum qui rem deleniti. Suscipit in dolor veritatis sequi
                        aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut
                        repudiandae possimus. Nihil ex tempora neque cum
                        consectetur dolores.
                      </span>
                    </div>
                  </div>
                </section>
                <section aria-labelledby="quick-links-title">
                  <p className="text-gray-600 text-lg font-bold">Location</p>
                  <GoogleMapComponent />
                </section>
                <section>
                  <p className="text-gray-600 text-lg font-bold">
                    Select check-in date
                  </p>
                  <DateRangerComponent />
                </section>
              </div>

              {/* Right column */}
              <div className="grid grid-cols-1 gap-4">
                <section aria-labelledby="announcements-title">
                  <div className="rounded-lg bg-white overflow-hidden shadow">
                    <div className="text-center w-full">
                      <h2
                        className="text-base font-medium text-gray-900"
                        id="announcements-title"
                      >
                        Features
                      </h2>
                      <div className="flow-root mt-6">
                        <ul className="-my-5">
                          <div className="flex justify-center space-x-3 my-3">
                            <div>
                              <img src={ApartmentIcon} className="h-8" />
                            </div>
                            <div>
                              <img src={HotelIcon} className="h-8" />
                            </div>
                            <div>
                              <img src={HomeIcon} className="h-8" />
                            </div>
                            <div>
                              <img src={PetIcon} className="h-8" />
                            </div>
                          </div>
                          <li className="border-0 py-2">Apartment</li>
                          <li className="border-0 py-2">Serviced Apartment</li>
                          <li className="border-0 py-2">Entire Place</li>
                        </ul>
                      </div>
                      <div className="mt-6"></div>
                    </div>
                  </div>
                </section>
                <section aria-labelledby="announcements-title">
                  <div className="rounded-lg bg-white overflow-hidden shadow">
                    <div className="text-center w-full">
                      <h2
                        className="text-base font-medium text-gray-900"
                        id="announcements-title"
                      >
                        Reserve
                      </h2>
                      <div className="flow-root mt-6">
                        <ul className="-my-5 py-5">
                          <div className="flex justify-between px-5 gird grid-cols-2">
                            <p>Adult:</p>
                            <div className="flex justify-between w-1/2">
                              <MinusCircleIcon className="h-6" />
                              {2}
                              <PlusCircleIcon className="h-6" />
                            </div>
                          </div>
                          <div className="flex justify-between px-5 gird grid-cols-2">
                            <p>Children:</p>
                            <div className="flex justify-between w-1/2">
                              <MinusCircleIcon className="h-6" />
                              {2}
                              <PlusCircleIcon className="h-6" />
                            </div>
                          </div>
                          <div className="flex justify-between px-5 gird grid-cols-2">
                            <p>Infants:</p>
                            <div className="flex justify-between w-1/2">
                              <MinusCircleIcon className="h-6" />
                              {2}
                              <PlusCircleIcon className="h-6" />
                            </div>
                          </div>
                          <div className="py-5 px-10">
                            <p className="text-gray-800">
                              <span className="text-lg font-bold">2300USD</span>
                              /Night
                            </p>
                            <div className="flex justify-between py-4 px-5 text-gray-800">
                              <p className="underline">2,300USD x 2 nights</p>
                              <p>4,600USD</p>
                            </div>
                            <div className="flex pb-5 px-5 justify-between">
                              <p className="underline">Service fee</p>
                              <p>779USD</p>
                            </div>
                            <hr />
                            <div className="flex justify-between px-5 py-2">
                              <p className="font-bold">Total</p>
                              <p className="font-bold">5049USD</p>
                            </div>
                          </div>
                        </ul>
                      </div>
                      <div className="mt-6">
                        <Link
                          to="#"
                          className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-800"
                        >
                          Reserve
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Recent Hires */}
                <section aria-labelledby="recent-hires-title">
                  <div className="rounded-lg bg-white overflow-hidden shadow">
                    <div className="p-6">
                      <h2
                        className="text-base font-medium text-gray-900"
                        id="recent-hires-title"
                      >
                        Reviews
                      </h2>
                      <div className="flow-root mt-6">
                        <ul className="-my-5 divide-y divide-gray-200">
                          {recentHires.map((person) => (
                            <li key={person.handle} className="py-4">
                              <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                  <img
                                    className="h-8 w-8 rounded-full"
                                    src={person.imageUrl}
                                    alt=""
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-gray-900 truncate">
                                    {person.name}
                                  </p>
                                  <p className="text-sm text-gray-500 truncate">
                                    {"@" + person.handle}
                                  </p>
                                </div>
                                <div>
                                  <ReactStars
                                    size={15}
                                    value={5}
                                    edit={false}
                                  />
                                </div>
                                <div>
                                  <a
                                    href={person.href}
                                    className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                                  >
                                    View
                                  </a>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                          View all
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default PropertyDetailViewPage;
