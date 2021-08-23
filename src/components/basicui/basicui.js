import { Switch } from "@headlessui/react";
import { useState } from "react";
import { classNames } from "shared/function";

export const InputBox = ({ label, name, placeholder, type, onchange, disabled }) => {
    return(
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
                    className="shadow-sm focus: outline-none border block w-full h-full p-3 sm:text-sm border-gray-300 rounded-md"
                    placeholder={placeholder}
                    disabled={disabled}
                />
            </div>
        </div>
    )
} 


export const  Toggle = ({label, getToggleValue, removeToggleValue}) => {
    const [enabled, setEnabled] = useState(false);
    const getToggle = (value) => {
      if(value){
        getToggleValue(label);
      }
      else{
        removeToggleValue(label)
      }
      setEnabled(value);
    }
  
    return (
      <Switch.Group as="div" className="flex items-center">
        <Switch
          checked={enabled}
          onChange={getToggle}
          className={classNames(
            enabled ? 'bg-red-500' : 'bg-gray-200',
            'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-offset-2 focus:ring-0'
          )}
        >
          <span
            aria-hidden="true"
            className={classNames(
              enabled ? 'translate-x-5' : 'translate-x-0',
              'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
            )}
          />
        </Switch>
        <Switch.Label as="span" className="ml-3">
          <span className="text-sm font-medium text-gray-900">{label}</span>
        </Switch.Label>
      </Switch.Group>
    )
  }