import React from "react";

function HostInfoComponent({ property }) {
  return (
    <div>
      <section>
        <div className="px-4 py-2 w-100">
          <p className="text-gray-600 text-lg font-bold">Meet your host</p>
          <div className="grid grid-cols-1 sm:grid-cols-4 mt-3">
            <div className="col-span-1 flex justify-center">
              {property?.host?.avatarURL ? (
                <div>
                  <img src={property.host.avatarURL} className="h-20 w-20 rounded-full border-2 object-cover" />
                </div>
              ) : (
                <span className="h-20 w-20 rounded-full overflow-hidden bg-gray-100">
                  <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
              )}
            </div>
            <div className="col-span-3 py-2">
              <p className="text-gray-600 text-lg font-bold">{property?.host?.name}</p>
              <p className="text-gray-600 text-sm font-bold">
                {property?.host?.email}, {property?.host?.phone}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HostInfoComponent;
