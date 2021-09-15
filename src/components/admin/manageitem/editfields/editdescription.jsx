import React, { useState } from "react";
import { PencilAltIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/outline";

export default function EditPropertyDescriptionComponent({ label, value, variableName, type, unit }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(value);
  const swichEdit = () => {
    setIsEdit(!isEdit);
  };
  return (
    <div>
      <div>
        <p className="text-sm">{label}</p>
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className="col-span-11 border p-3">
            {isEdit ? (
              <textarea
                type={type}
                className="border rounded-md py-1 px-3 w-full"
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
          </div>
          <div className="col-span-1">
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
    </div>
  );
}
