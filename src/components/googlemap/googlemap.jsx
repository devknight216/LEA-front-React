import React, { useEffect, useState } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { getLatLangArray } from "./functions";

const GoogleMapComponent = ({ google, properties, center }) => {
  const [geoList, setGeoList] = useState([]);
  const [visible, setVisible] = useState({ showingInfoWindow: false, activeMarker: {}, selectedPlace: {}, property: {} });
  const getGeoList = async () => {
    setGeoList(await getLatLangArray(properties));
  };

  useEffect(() => {
    getGeoList();
  }, [properties]);

  const clickMapPin = (props, marker, e, property) => {
    console.log(property);
    setVisible({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      property: property,
    });
  };

  return geoList.length > 0 ? (
    <Map
      google={google}
      zoom={14}
      initialCenter={{
        lat: 29.7506658,
        lng: -95.37915079999999,
      }}
    >
      {geoList.map((position, index) => (
        <Marker
          key={index}
          name={position.property.propertyName}
          title={position.property.propertyName}
          position={{ lat: position.geo.lat, lng: position.geo.lng }}
          onClick={(props, marker, e) => {
            clickMapPin(props, marker, e, position.property);
          }}
        ></Marker>
      ))}
      <InfoWindow visible={visible.showingInfoWindow} marker={visible.activeMarker}>
        <div className="bg-white px-5 py-3 w-30">
          <p className="font-bold">{visible.property.propertyName}</p>
          <p className="text-indigo-500">${visible.property.nightlyRate}/night</p>
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
