import React, { useEffect, useState } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { getLatLangArray } from "./functions";
import Slider from "react-slick";

const GoogleMapComponent = ({ google, properties }) => {
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

  const settingsChildren = {
    dots: false,
    infinite: true,
    fade: true,
    pauseOnHover: false,
    swipeToSlide: false,
    swipe: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    arrows: true,
    autoplay: false,
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
        <div className="bg-white px-5 py-3 h-60 w-30">
          {visible.property?.imageURLs?.map((item) => (
            <div className="p-2 " key={item._id}>
              <img className="object-cover w-full h-full shadow-lg rounded-lg" src={item.url} alt="" />
            </div>
          ))}
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
