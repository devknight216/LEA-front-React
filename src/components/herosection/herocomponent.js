/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import HomeBanner from 'assets/imgs/background/home-banner.png';
import PropertyBanner from 'assets/imgs/background/properties-banner-image.png'
import TextTransition, { presets } from "react-text-transition";
import { Link, useLocation } from 'react-router-dom';
import ProfitBanner from 'assets/imgs/background/profit-banner.png';
import ContactBanner from 'assets/imgs/background/contact-banner.png'

const TEXTS = [
  "Fully Furnished",
  "Luxury Apartments"
];

const BANNER = {
  '/': HomeBanner,
  '/properties': PropertyBanner,
  '/profit': ProfitBanner,
  '/contact': ContactBanner
}

export default function HeroComponent() {

  const [index, setIndex] = React.useState(0);
  const location = useLocation();
  React.useEffect(() => {
    //Transaction for Hero title
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

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
                    {/* <span className="block text-gray-800	">Fully Furnished</span>
                    <span className="block text-gray-800">Luxury Apartments</span> */}
                    <span className="flex justify-center text-gray-800">
                      <TextTransition
                        className="text-center"
                        text={ TEXTS[index % TEXTS.length] }
                        springConfig={ presets.wobbly }
                        delay={1500}
                      />
                    </span>
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl">
                    Convenience meets luxury, Get the chance to experience luxurious living with the best amenities while having 
                    everything else you need as your tips.
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
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                  <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
                    Trusted by over 5 very average small businesses
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                      <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                      <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                      <img
                        className="h-12"
                        src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                        alt="StaticKit"
                      />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                      <img
                        className="h-12"
                        src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                        alt="Transistor"
                      />
                    </div>
                    <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                      <img
                        className="h-12"
                        src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                        alt="Workcation"
                      />
                    </div>
                  </div>
                </div>
              </div>
          }
        </div>
      </main>
    </>
  )
}
