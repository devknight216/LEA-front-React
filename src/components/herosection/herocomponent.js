/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import HomeBanner from 'assets/imgs/background/home-banner.png';
import PropertyBanner from 'assets/imgs/background/properties-banner-image.png'
import { Link, useLocation } from 'react-router-dom';
import ProfitBanner from 'assets/imgs/background/profit-banner.png';
import ContactBanner from 'assets/imgs/background/contact-banner.png'

import AirConditionIcon from 'assets/imgs/icon/air-conditioner.png';
import DeskTopIcon from 'assets/imgs/icon/desktop.png';
import DumbBellIcon from 'assets/imgs/icon/dumbbell.png';
import FirePlaceIcon from 'assets/imgs/icon/fireplace.png';
import GrillIcon from 'assets/imgs/icon/grill.png';
import KitchenIcon from 'assets/imgs/icon/kitchen.png';
import OutDoorCafeIcon from 'assets/imgs/icon/outdoor-cafe.png';
import ParkedCarIcon from 'assets/imgs/icon/parked-car.png';
import PetIcon from 'assets/imgs/icon/pet.png';
import PoolTableIcon from 'assets/imgs/icon/pool-table.png';
import ShowerIcon from 'assets/imgs/icon/shower.png';
import SleepIcon from 'assets/imgs/icon/sleep.png';
import SwimmingPoolIcon from 'assets/imgs/icon/swimming-pool.png';
import TVIcon from 'assets/imgs/icon/tv.png';
import WifiIcon from 'assets/imgs/icon/wifi.png';


const BANNER = {
  '/': HomeBanner,
  '/properties': PropertyBanner,
  '/profit': ProfitBanner,
  '/contact': ContactBanner
}

const iconlist = [AirConditionIcon, DeskTopIcon, DumbBellIcon, FirePlaceIcon, GrillIcon, KitchenIcon, OutDoorCafeIcon, ParkedCarIcon, PetIcon, PoolTableIcon, ShowerIcon, SleepIcon, SwimmingPoolIcon, TVIcon, WifiIcon]

export default function HeroComponent() {
  const location = useLocation();

  return (
    <>
      <main>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="">
              <div className="relative shadow-xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src={BANNER[`${location.pathname}`]}
                    alt="People working on laptops"
                  />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="text-white">
                      <p className="text-center drop-shadow-xl	">Luxury Apartments</p>
                      <p className="text-center">Fully Furnished</p>
                    </span>
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl">
                    Convenience meets luxury, Get the chance to experience luxurious living with the best amenities while having 
                    everything else you need at your tips.
                  </p>
                  <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div className="">
                      <Link
                        to="/properties"
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                      >
                        Get started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo cloud */}
          {
            (location.pathname != '/contact')&&
              <div className="bg-yellow-300">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center">
                  {
                    iconlist.map((icon, index) => (
                      <div key={index} className="text-center mx-3"> 
                        <img src={icon} className="w-8 md:w-10 h-auto"/>
                      </div>
                    ))
                  }
                </div>
              </div>
          }
        </div>
      </main>
    </>
  )
}
