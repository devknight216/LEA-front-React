import React, { useState } from "react";
import { PencilAltIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/outline";

function EditPropertyFieldComponent({ label, value, variableName, type, unit }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(value);
  const swichEdit = () => {
    setIsEdit(!isEdit);
  };
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

export default EditPropertyFieldComponent;
