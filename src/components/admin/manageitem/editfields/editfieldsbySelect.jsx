import React, { useState, useEffect } from "react";
import { PencilAltIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { updatePropertyById } from "reduxstore/propertyreducer/action";

function EditPropertyFieldBySelectComponent({ label, value, variableName, options, propertyID }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(null);
  const dispatch = useDispatch();
  const swichEdit = () => {
    setIsEdit(!isEdit);
  };
  const updateValue = () => {
    const payload = {
      id: propertyID,
      body:
        variableName == "instantBook"
          ? {
              [variableName]: editValue == "Instant Book" ? true : false,
            }
          : {
              [variableName]: editValue,
            },
    };
    dispatch(updatePropertyById(payload));
    setIsEdit(false);
  };
  useEffect(() => {
    setEditValue(value);
  }, [value]);
  return (
    <div>
      <div>
        <p className="text-sm">{label}</p>
        <div className="flex items-center space-x-2">
          {isEdit ? (
            <select
              className="border rounded-md py-1 px-3 min-w-10 w-full"
              value={editValue}
              onChange={(e) => {
                setEditValue(e.target.value);
              }}
            >
              {options.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          ) : (
            <p>{value}</p>
          )}
          {isEdit ? (
            <div className="flex items-center space-x-2">
              <CheckCircleIcon className="h-6 w-6 cursor-pointer text-gray-500 hover:text-gray-800 " onClick={updateValue} />
              <XCircleIcon className="h-6 w-6 cursor-pointer text-gray-500 hover:text-gray-800 " onClick={swichEdit} />
            </div>
          ) : (
            <PencilAltIcon className="h-6 w-6 cursor-pointer text-gray-500 hover:text-gray-800 " onClick={swichEdit} />
          )}
        </div>
      </div>
    </div>
  );
}

export default EditPropertyFieldBySelectComponent;
