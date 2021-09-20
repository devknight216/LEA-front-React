import GoogleMapComponent from "components/googlemap";
import PropertyIistItem from "components/properties/propertylist/propertylistitem";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllProperties, searchProperties } from "reduxstore/propertyreducer/action";
import qs from "qs";
import { useLocation } from "react-router-dom";
import { geocodeByPlaceId, getLatLng } from "react-google-places-autocomplete";

function MapSearchPage() {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.properties.properties);
  const location = useLocation();
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  const [addressFilter, setAddressFilter] = useState(null);

  useEffect(() => {
    console.log(query);
    if (query.location !== "null") {
      geocodeByPlaceId(query.location)
        .then((results) => {
          console.log("GEOCODE", results);
          const address = results[0].address_components;
          dispatch(searchProperties({propertyLocation: {
            apartment:"",
            street:getLocationDetail(address, "street_number")?`${getLocationDetail(address, "street_number")} ${getLocationDetail(address, "route")}`:getLocationDetail(address, "route"),
            city: getLocationDetail(address, "locality"),
            state: getLocationDetail(address, "administrative_area_level_1"),
            country: getLocationDetail(address, "country"),
            zip: getLocationDetail(address, "postal_code"),
          }}));
        })
        .catch((error) => console.error(error));
    }
  }, []);
 
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-8">
        <div className="col-span-4 h-screen relative">
          {properties?.length>0 && <GoogleMapComponent properties={properties} />}
        </div>
        <div className="col-span-4 h-screen overflow-auto">
          <p>{}</p>
          <div className="grid grid-cols-1 2xl:grid-cols-2">
            {properties.map((item, index) => (
              <div key={index}>
                <PropertyIistItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const getLocationDetail = ( loationArray, type ) =>{
  const detailedData = loationArray.filter((item) => item.types[0] && (item.types[0]&&(item.types[0] === type)))[0]?.long_name
  return detailedData?detailedData:"";
}

export default MapSearchPage;
