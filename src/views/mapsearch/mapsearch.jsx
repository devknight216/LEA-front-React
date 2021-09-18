import GoogleMapComponent from "components/googlemap";
import PropertyIistItem from "components/properties/propertylist/propertylistitem";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllProperties } from "reduxstore/propertyreducer/action";

function MapSearchPage() {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.properties.properties);
  useEffect(() => {
    dispatch(getAllProperties());
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-8">
        <div className="col-span-4 h-screen relative">
          {properties?.length > 0 && <GoogleMapComponent properties={properties} />}
        </div>
        <div className="col-span-4 h-screen overflow-auto">
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
