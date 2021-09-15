import React, { useEffect, useState } from "react";
import { PencilAltIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/outline";

export default function EditPropertyDescriptionComponent({ label, value, variableName, type, unit }) {
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
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className="col-span-11">
            {isEdit ? (
              <textarea
                type={type}
                className="w-full border p-3 rounded-md"
                defaultValue={editValue}
                onChange={(e) => {
                  setEditValue(e.target.value);
                }}
              />
            ) : (
              <p className="border p-3">
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
