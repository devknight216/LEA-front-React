import GoogleMapComponent from "components/googlemap";
import PropertyIistItem from "components/properties/propertylist/propertylistitem";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { searchProperties } from "reduxstore/propertyreducer/action";
import qs from "qs";
import { useLocation } from "react-router-dom";

function MapSearchPage() {
  const properties = useSelector((state) => state.properties.properties);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-8">
        <div className="col-span-4 h-screen relative">
          {properties?.length > 0 && <GoogleMapComponent properties={properties} />}
        </div>
        <div className="col-span-4 h-screen overflow-auto">
          <div className="px-5 pt-10 text-xl font-bold">{/* <p>{addressFilter}</p> */}</div>
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

export default MapSearchPage;
