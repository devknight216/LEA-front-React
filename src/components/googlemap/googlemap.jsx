import React, { useEffect, useState } from "react";
// import GoogleMap, { Marker } from "react-maps-google";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { getLatLangArray } from "./functions";

const GoogleMapComponent = ({ google, locations }) => {
  console.log("Locations", locations);
  const [geoList, setGeoList] = useState([]);
  const getGeoList = async () => {
    setGeoList(await getLatLangArray(locations));
  };

  useEffect(() => {
    getGeoList();
  }, [locations]);

  console.log("GeoList", geoList);

  // var points = [
  //   { lat: 42.02, lng: -77.01 },
  //   { lat: 42.03, lng: -77.02 },
  //   { lat: 41.03, lng: -77.04 },
  //   { lat: 42.05, lng: -77.02 },
  // ];
  // var bounds = new google.maps.LatLngBounds();
  // for (var i = 0; i < points.length; i++) {
  //   bounds.extend(points[i]);
  // }
  return geoList.length > 0 ? (
    <Map google={google} zoom={14}>
      {geoList.map((position, index) => (
        <Marker key={index} name={"Current location"} position={{ lat: position.lat, lng: position.lng }} />
      ))}
      <InfoWindow>
        <div>
          <h1>ttt</h1>
        </div>
      </InfoWindow>
    </Map>
  ) : (
    <div>Loading ....</div>
  );
};
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
})(GoogleMapComponent);
