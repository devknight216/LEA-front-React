import React from "react";
import HomeBanner from "assets/imgs/background/hero.jpg";
import BellBoyIcon from "assets/imgs/icon/bellboy.png";
import DumbBellIcon from "assets/imgs/icon/dumbbell.png";
import WifiIcon from "assets/imgs/icon/wifi-signal.png";
import KitckenIcon from "assets/imgs/icon/kitchen.png";
import PetIcon from "assets/imgs/icon/pet.png";
const iconlist = [
  {
    text: "Fast WIFI",
    icon: WifiIcon,
  },
  {
    text: "Concierge",
    icon: BellBoyIcon,
  },
  {
    text: "Gym & Fitness",
    icon: DumbBellIcon,
  },
  {
    text: "Full Kitchen",
    icon: KitckenIcon,
  },
  {
    text: "Pet Friendly",
    icon: PetIcon,
  },
];

export default function HeroComponent() {
  return (
    <div className="-mt-28">
      {/* Hero card */}
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
        <div className="relative shadow-xl sm:overflow-hidden">
          <div className="absolute inset-0">
            <img className="h-full w-full object-cover" src={HomeBanner} alt="People working on laptops" />
          </div>
          <div className="relative py-16 sm:py-24 lg:py-32">
            <div className="bg-white bg-opacity-20">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl py-10">
                <span className="text-gray-900">
                  <p className="text-center drop-shadow-xl md:mt-16  font-cyzel">Fully Furnished</p>
                  <p className="text-center drop-shadow-xl  font-cyzel">Luxury Apartments</p>
                </span>
              </h1>
              <p className="mt-6 max-w-lg mx-auto text-center text-xl text-gray-900 sm:max-w-3xl py-5">
                Convenience meets luxury. Get the chance to experience luxurious living with the best amenities while having
                everything else you need at your tips.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-yellow-300">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between  w-full">
          {iconlist.map((icon, index) => (
            <div key={index} className="text-center mx-3">
              <div>
                <img src={icon.icon} className="w-12 md:w-16 h-auto text-center mx-auto" />
                <p className="text-center w-full font-bold">{icon.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
