import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPropertyById } from "reduxstore/propertyreducer/slice";
import { useEffect } from "react";
import EditPropertyFieldComponent from "components/admin/manageitem/editfields/editfields";
import ImageUploadToAWSComponent from "components/common/uploadImage";
import EditPropertyDescriptionComponent from "components/admin/manageitem/editfields/editdescription";
import EditPropertyFieldBySelectComponent from "components/admin/manageitem/editfields/editfieldsbySelect";
import { features } from "components/host(test)/constant";
export default function CreateNewPropertyPage() {
  const location = useLocation();
  const propertyId = location.pathname.split("/")[4];
  //Get Stored value
  const dispatch = useDispatch();
  const property = useSelector((state) => state.properties.property);
  useEffect(() => {
    dispatch(getPropertyById(propertyId));
  }, []);
  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg p-2 md:p-5">
        <p className="border-b py-2 text-xl">Main Info</p>
        <div className="px-2 py-4">
          <EditPropertyFieldComponent
            label="Property Name:"
            value={property?.propertyName}
            unit=""
            type="text"
            variableName="propertyName"
            propertyID={propertyId}
          />
          <div className="grid grid-cols-3 py-2">
            <div>
              <EditPropertyFieldComponent
                label="Nightly Rate:"
                value={property?.nightlyRate}
                unit="$"
                type="number"
                variableName="nightlyRate"
                propertyID={propertyId}
              />
            </div>
            <div>
              <EditPropertyFieldComponent
                label="Weekly Discount:"
                value={property?.weeklyDiscount | 0}
                unit="%"
                type="number"
                variableName="weeklyDiscount"
                propertyID={propertyId}
              />
            </div>
            <div>
              <EditPropertyFieldComponent
                label="Monthly Discount:"
                value={property?.monthlyDiscount | 0}
                unit="%"
                type="number"
                variableName="monthlyDiscount"
                propertyID={propertyId}
              />
            </div>
          </div>
          <div className="py-2">
            <EditPropertyDescriptionComponent
              label="Property Description"
              value={property?.propertyDescription}
              type="text"
              variableName="propertyName"
              propertyID={propertyId}
            />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-2 md:p-5  mt-4">
        <p className="border-b py-2 text-xl">Property Feature</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-4 py-2">
          <div>
            <EditPropertyFieldBySelectComponent
              label="Property Type"
              value={property?.propertyType}
              options={features[0]["properties"]}
              variableName="propertyType"
              propertyID={propertyId}
            />
          </div>
          <div>
            <EditPropertyFieldBySelectComponent
              label="Property Space Feature"
              value={property?.propertySpaceFeature}
              options={features[1]["properties"]}
              variableName="propertySpaceFeature"
              propertyID={propertyId}
            />
          </div>
          <div>
            <EditPropertyFieldBySelectComponent
              label="Property Highlights"
              value={property?.propertyspecialFeature}
              options={[]}
              variableName="propertyspecialFeature"
              propertyID={propertyId}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:gap-4 py-2">
          <div>
            <EditPropertyFieldComponent
              label="Guests:"
              value={property?.guestNum}
              unit=""
              type="number"
              variableName="guestNum"
              propertyID={propertyId}
            />
          </div>
          <div>
            <EditPropertyFieldComponent
              label="Bathrooms:"
              value={property?.bathroomNum}
              unit=""
              type="number"
              variableName="bathroomNum"
              propertyID={propertyId}
            />
          </div>
          <div>
            <EditPropertyFieldComponent
              label="Bedrooms:"
              value={property?.bedroomNum}
              unit=""
              type="number"
              variableName="bedroomNum"
              propertyID={propertyId}
            />
          </div>
          <div>
            <EditPropertyFieldComponent label="Beds:" value={property?.bedsNum} unit="" type="number" variableName="bedsNum" propertyID={propertyId}/>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-2 md:p-5 mt-4">
        <ImageUploadToAWSComponent />
      </div>
    </div>
  );
}
