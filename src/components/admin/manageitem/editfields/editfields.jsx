import React, { useState, useEffect } from "react";
import { PencilAltIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { updatePropertyById } from "reduxstore/propertyreducer/action";
import { useLocation } from "react-router";

function EditPropertyFieldComponent({ label, value, variableName, type, unit, propertyID }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(null);
  const dispatch = useDispatch();

  const swichEdit = () => {
    setIsEdit(!isEdit);
  };
  const updateValue = () => {
    const payload = {
      id: propertyID,
      body: {
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
            <input
              type={type}
              className="border rounded-md py-1 px-3 min-w-10"
              value={editValue}
              onChange={(e) => {
                setEditValue(e.target.value);
              }}
            />
          ) : (
            <p>
              {unit} {value}
            </p>
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

export default EditPropertyFieldComponent;
