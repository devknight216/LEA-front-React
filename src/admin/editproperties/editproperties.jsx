import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPropertyById } from "reduxstore/propertyreducer/slice";
import { useEffect } from "react";
import EditPropertyFieldComponent from "components/admin/manageitem/editfields/editfields";
import ImageUploadToAWSComponent from "components/common/uploadImage";
import EditPropertyDescriptionComponent from "components/admin/manageitem/editfields/editdescription";
import EditPropertyFieldBySelectComponent from "components/admin/manageitem/editfields/editfieldsbySelect";
import { amenities, features } from "components/host(test)/constant";
import { iconList } from "components/detailview/amenities/icons";
import { CheckCircleIcon, XCircleIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { updatePropertyById } from "reduxstore/propertyreducer/action";

export default function CreateNewPropertyPage() {
  const location = useLocation();
  const propertyId = location.pathname.split("/")[4];
  //Get Stored value
  const dispatch = useDispatch();
  const property = useSelector((state) => state.properties.property);
  console.log(property);
  useEffect(() => {
    dispatch(getPropertyById(propertyId));
  }, []);

  //Edit Amenities
  const [isEdit, setIsEdit] = useState(false);
  const [selectedAmenity, setSelectedAmenity] = useState(null);
  const handleOnSelect = (item) => {
    setSelectedAmenity(item.name);
  };
  const formatResult = (item) => {
    return item;
  };

  const deleteAmenities = (item) => {
    const payload = {
      id: propertyId,
      body: {
        amenities: property?.amenities?.filter((amenities) => amenities !== item),
      },
    };
    dispatch(updatePropertyById(payload));
  };
  const addAmenities = () => {
    if (selectedAmenity) {
      const payload = {
        id: propertyId,
        body: {
          amenities: [...property?.amenities, selectedAmenity],
        },
      };
      dispatch(updatePropertyById(payload));
    }
  };

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
              variableName="propertyDescription"
              propertyID={propertyId}
            />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-2 md:p-5 mt-4">
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
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 sm:gap-4 py-2">
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
              label="Full Bathrooms:"
              value={property?.fullBathNum | 0}
              unit=""
              type="number"
              variableName="fullBathNum"
              propertyID={propertyId}
            />
          </div>
          <div>
            <EditPropertyFieldComponent
              label="Half Bathrooms:"
              value={property?.halfBathNum | 0}
              unit=""
              type="number"
              variableName="halfBathNum"
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
            <EditPropertyFieldComponent
              label="Beds:"
              value={property?.bedsNum}
              unit=""
              type="number"
              variableName="bedsNum"
              propertyID={propertyId}
            />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-2 md:p-5 mt-4">
        <p className="border-b py-2 text-xl">Amenities</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 px-5 py-5">
          {property?.amenities?.map((amenity, index) => (
            <div key={index} className="py-3 md:px-5 px-2 relative">
              <img src={iconList[amenity]} className="w-10 h-10" />
              <p className="truncate">{amenity}</p>
              <div className="absolute top-0 left-0">
                <XCircleIcon
                  className="h-6 w-6 cursor-pointer text-red-500 hover:text-red-800"
                  onClick={() => {
                    deleteAmenities(amenity);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center border-t py-5">
          {isEdit ? (
            <div className="w-full">
              <ReactSearchAutocomplete
                items={amenities?.map((amenity, index) => ({
                  id: index,
                  name: amenity.label,
                }))}
                maxResults={20}
                onSelect={handleOnSelect}
                autoFocus
                formatResult={formatResult}
              />
            </div>
          ) : (
            ""
          )}
          {!isEdit ? (
            <PlusCircleIcon
              className="h-6 w-6 cursor-pointer text-gray-500 hover:text-gray-800"
              onClick={() => {
                setIsEdit(true);
              }}
            />
          ) : (
            <div>
              <CheckCircleIcon className="h-6 w-6 cursor-pointer text-gray-500 hover:text-gray-800" onClick={addAmenities} />
              <XCircleIcon
                className="h-6 w-6 cursor-pointer text-gray-500 hover:text-gray-800"
                onClick={() => {
                  setIsEdit(false);
                }}
              />
            </div>
          )}
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-2 md:p-5 mt-4">
        <p className="border-b py-2 text-xl">Fees</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 divide-x mt-3">
          <div className="px-4">
            <EditPropertyFieldComponent
              label="Deposit Fee:"
              value={property?.depositFee | 0}
              unit="$"
              type="number"
              variableName="depositFee"
              propertyID={propertyId}
            />
          </div>
          <div className="px-4">
            <div className="grid grid-cols-2">
              <div>
                <EditPropertyFieldComponent
                  label="Pet Fee:"
                  value={property?.petAllowFee?.fee | 0}
                  unit="$"
                  type="number"
                  variableName="petAllowFee"
                  propertyID={propertyId}
                />
              </div>
              <div>
                <EditPropertyFieldComponent
                  label="Pet Allow Number:"
                  value={property?.petAllowFee?.number | 0}
                  unit=""
                  type="number"
                  variableName="petAllowFee"
                  propertyID={propertyId}
                />
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="grid grid-cols-2">
              <div>
                <EditPropertyFieldComponent
                  label="Staging Fee:"
                  value={property?.stagingFee?.rate | 0}
                  unit="$"
                  type="number"
                  variableName="stagingFee"
                  propertyID={propertyId}
                />
              </div>
              <div>
                <EditPropertyFieldComponent
                  label="Staging housrs:"
                  value={property?.stagingFee?.hours | 0}
                  unit=""
                  type="number"
                  variableName="stagingFee"
                  propertyID={propertyId}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-2 md:p-5 mt-4">
        <p className="border-b py-2 text-xl">Location</p>
        <div></div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-2 md:p-5 mt-4">
        <p className="border-b py-2 text-xl">Settings</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <EditPropertyFieldBySelectComponent
              label="Instant Book"
              value={property?.instantBook ? "TRUE" : "FALSE"}
              options={["Instant Book", "No"]}
              variableName="instantBook"
              propertyID={propertyId}
            />
          </div>
          <div>
            <EditPropertyFieldBySelectComponent
              label="Manage By"
              value={property?.manageType}
              options={["LEA", "HOST"]}
              variableName="manageType"
              propertyID={propertyId}
            />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-2 md:p-5 mt-4">
        <ImageUploadToAWSComponent />
      </div>
    </div>
  );
}
