import { Link } from "react-router-dom";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import HomeImage from 'assets/imgs/background/home.jpg'
export default function OurTeamComponent() {
  return (
    <div>            
      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src={HomeImage}
              alt=""
            />
          </div>
        </div>
        <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Transform your space</h2>
              <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                Legendary Estates Airbnb also offers Staging services to help you spruce up your property and get it rented faster! 
                Learn more about our staging services and schedule an appointment with our Qualified Staging Consultants to know what 
                can we do to improve your space. 
              </p>
              <div className="mt-8">
                <div className="inline-flex rounded-md shadow">
                  <Link
                      to="/contact"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-400 hover:bg-red-700"
                  >
                    Learn More
                    <ExternalLinkIcon className="-mr-1 ml-3 h-5 w-5 text-white" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}