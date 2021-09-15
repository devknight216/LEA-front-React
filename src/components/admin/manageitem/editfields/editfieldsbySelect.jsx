import React, { useState, useEffect } from "react";
import { PencilAltIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/outline";

function EditPropertyFieldBySelectComponent({ label, value, variableName, options }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(null);
  const swichEdit = () => {
    setIsEdit(!isEdit);
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
              <CheckCircleIcon className="h-6 w-6 cursor-pointer text-gray-500 hover:text-gray-800 " onClick={swichEdit} />
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
