import React, { useState, useEffect } from "react";
import { PencilAltIcon, XCircleIcon, CheckCircleIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { InputBox } from "components/basicui/basicui";
import { updatePropertyById } from "reduxstore/propertyreducer/action";

function EditPropertyLocationComponent({ location, propertyId }) {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const swichEdit = () => {
    setIsEdit(!isEdit);
  };
  const [loationInfo, setLocationInfo] = useState({
    apartment: "",
    street: "",
    city: "",
    state: "",
    country: "",
    zip: "",
  });
  const inputLoationInfo = (e, param) => {
    setLocationInfo({
      ...loationInfo,
      [param]: e.target.value,
    });
  };
  const updateLocation = () => {
    const payload = {
      id: propertyId,
      body: {
        propertyLocation: loationInfo,
      },
    };
    dispatch(updatePropertyById(payload));
    setIsEdit(false);
  };
  useEffect(() => {
    setLocationInfo(location);
  }, [location]);
  return (
    <div className="relative">
      {!isEdit ? (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 py-5">
            <div>
              <InputBox
                placeholder="apartment"
                value={loationInfo.apartment}
                onchange={(e) => {
                  inputLoationInfo(e, "apartment");
                }}
              />
            </div>
            <div>
              <InputBox
                placeholder="street"
                value={loationInfo.street}
                onchange={(e) => {
                  inputLoationInfo(e, "street");
                }}
              />
            </div>
            <div>
              <InputBox
                placeholder="city"
                value={loationInfo.city}
                onchange={(e) => {
                  inputLoationInfo(e, "city");
                }}
              />
            </div>
            <div>
              <InputBox
                placeholder="state"
                value={loationInfo.state}
                onchange={(e) => {
                  inputLoationInfo(e, "state");
                }}
              />
            </div>
            <div>
              <InputBox
                placeholder="country"
                value={loationInfo.country}
                onchange={(e) => {
                  inputLoationInfo(e, "country");
                }}
              />
            </div>
            <div>
              <InputBox
                placeholder="zip"
                value={loationInfo.zip}
                onchange={(e) => {
                  inputLoationInfo(e, "zip");
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {isEdit ? (
        <PencilAltIcon className="h-6 w-6 cursor-pointer text-gray-500 hover:text-gray-800 " onClick={swichEdit} />
      ) : (
        <div className="flex items-center space-x-2">
          <CheckCircleIcon className="h-6 w-6 cursor-pointer text-gray-500 hover:text-gray-800 " onClick={updateLocation} />
          <XCircleIcon className="h-6 w-6 cursor-pointer text-gray-500 hover:text-gray-800 " onClick={swichEdit} />
        </div>
      )}
    </div>
  );
}

export default EditPropertyLocationComponent;
