import { Switch } from "@headlessui/react";
import { useState } from "react";
import { classNames } from "shared/function";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {
  ArchiveIcon,
  ArrowCircleRightIcon,
  ChevronDownIcon,
  DuplicateIcon,
  HeartIcon,
  PencilAltIcon,
  TrashIcon,
  UserAddIcon,
} from '@heroicons/react/solid'

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
                    onChange={onchange}
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

export const Dropdown = () => {
  return(
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md bg-transparent text-sm font-medium text-indigo-700 focus:outline-none ">
          Edit
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="z-10 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'group flex items-center px-4 py-2 text-sm'
                )}
              >
                {/* <PencilAltIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" /> */}
                Edit
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'group flex items-center px-4 py-2 text-sm'
                )}
              >
                {/* <PencilAltIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" /> */}
                Edit
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}