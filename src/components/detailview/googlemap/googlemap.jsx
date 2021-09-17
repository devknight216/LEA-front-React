import React, { useState, useEffect } from "react";
// import GoogleMapReact from "google-map-react";
// import MarkIcon from "assets/imgs/icon/mark.png";
// import Geocode from "react-geocode";

// const AnyReactComponent = () => {
//   return (
//     <div className="text-red-700">
//       <img src={MarkIcon} className="h-12" />
//     </div>
//   );
// };

function GoogleMapComponent({ address }) {
  //Get Lat and Lang from Address
  // const [location, setLocation] = useState(null);
  // const [loading, setLoading] = useState(false);
  // Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAP_API_KEY);
  // useEffect(() => {
  //   if (address) {
  //     setLoading(true);
  //     Geocode.fromAddress(`${address.apartment} ${address.street} ${address.city} ${address.state} ${address.country}`).then(
  //       (response) => {
  //         setLoading(false);
  //         const { lat, lng } = response.results[0].geometry.location;
  //         setLocation({
  //           lat: lat,
  //           lng: lng,
  //         });
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );
  //   }
  // }, [address]);

  return (
    <div>
      {/* <div className="w-full h-52 border-2 rounded-md border-gray-900">
        {!loading && location && (
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
            defaultCenter={{ ...location }}
            defaultZoom={15}
          >
            <AnyReactComponent />
          </GoogleMapReact>
        )}
      </div> */}
    </div>
  );
}

export default GoogleMapComponent;
