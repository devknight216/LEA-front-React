import React from "react";
import { Switch } from "@headlessui/react";
import { useState } from "react";
import { classNames } from "shared/function";
import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";

export const InputBox = ({ label, name, placeholder, type, onchange, disabled, value }) => {
  return (
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <input
          type={type}
          name={name}
          id={name}
          min={0}
          value={value}
          className="shadow-sm focus: outline-none border block w-full h-full p-3 sm:text-sm border-gray-300 rounded-md"
          placeholder={placeholder}
          disabled={disabled}
          onChange={onchange}
        />
      </div>
    </div>
  );
};

export const Toggle = ({ label, getToggleValue, removeToggleValue, classnames }) => {
  const [enabled, setEnabled] = useState(false);
  const getToggle = (value) => {
    if (value) {
      getToggleValue(label);
    } else {
      removeToggleValue(label);
    }
    setEnabled(value);
  };

  return (
    <Switch.Group as="div" className="flex items-center">
      <Switch
        checked={enabled}
        onChange={getToggle}
        className={classNames(
          enabled ? "bg-red-500" : "bg-gray-200",
          "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-offset-2 focus:ring-0"
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? "translate-x-5" : "translate-x-0",
            "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
          )}
        />
      </Switch>
      <Switch.Label as="span" className="ml-3">
        <span className={classNames(classnames, "text-sm font-medium")}>{label}</span>
      </Switch.Label>
    </Switch.Group>
  );
};

/* This example requires Tailwind CSS v2.0+ */

export function Banner() {
  return (
    <div className="py-3 inset-x-0 pb-2 sm:pb-5">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="p-2 rounded-lg bg-green-400 shadow-lg sm:p-3">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-green-600">
                <SpeakerphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span className="md:hidden">Messages will show up here!</span>
                <span className="hidden md:inline">All important messages will show up here!</span>
              </p>
            </div>

            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
              <button
                type="button"
                className="-mr-1 flex p-2 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span className="sr-only">Dismiss</span>
                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ButtonComponent({ onClick, label, classes }) {
  return (
    <div>
      <button onClick={onClick} className={classNames(classes, "px-5 py-2 rounded-full text-white")}>
        {label}
      </button>
    </div>
  );
}
