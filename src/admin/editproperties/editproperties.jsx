import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPropertyById } from "reduxstore/propertyreducer/slice";
import { useEffect } from "react";
import EditPropertyFieldComponent from "components/admin/manageitem/editfields/editfields";
import ImageUploadToAWSComponent from "components/common/uploadImage";
import EditPropertyDescriptionComponent from "components/admin/manageitem/editfields/editdescription";
export default function CreateNewPropertyPage() {
  const location = useLocation();
  const propertyId = location.pathname.split("/")[4];
  //Get Stored value
  const dispatch = useDispatch();
  const property = useSelector((state) => state.properties.property);
  useEffect(() => {
    dispatch(getPropertyById(propertyId));
  }, []);
  console.log(property);
  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg p-2 md:p-5">
        <p className="border-b py-2 text-xl">Main Info</p>
        <div className="px-2 py-4">
          <EditPropertyFieldComponent label="Property Name:" value={property?.propertyName} unit="" type="text" />
          <div className="grid grid-cols-3 py-2">
            <div>
              <EditPropertyFieldComponent label="Nightly Rate:" value={property?.nightlyRate} unit="$" type="number" />
            </div>
            <div>
              <EditPropertyFieldComponent label="Weekly Discount:" value={property?.weeklyDiscount | 0} unit="%" type="number" />
            </div>
            <div>
              <EditPropertyFieldComponent
                label="Monthly Discount:"
                value={property?.monthlyDiscount | 0}
                unit="%"
                type="number"
              />
            </div>
          </div>
          <div className="py-2">
            <EditPropertyDescriptionComponent label="Property Description" value={property?.propertyDescription} type="text" />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-2 md:p-5  mt-4"></div>
      <div className="bg-white rounded-lg shadow-lg p-2 md:p-5 mt-4">
        <ImageUploadToAWSComponent />
      </div>
    </div>
  );
}
