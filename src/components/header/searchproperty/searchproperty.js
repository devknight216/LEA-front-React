import React, { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { RangePicker } from "react-trip-date";
import GooglePlacesAutoComplete from "../googleautocomplete";
import { MinusIcon, PlusIcon, SearchIcon } from "@heroicons/react/solid";
import moment from "moment";

export default function SearchPropertyComponent() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const locationRef = React.useRef();
  const checkInRef = React.useRef();
  const checkOutRef = React.useRef();
  const guestRef = React.useRef();

  const [currentNav, setCurrentNav] = useState(null);
  const [filterDateRange, setFilterDateRange] = useState({ from: null, to: null});
  const [guestNum, setGuestNum] = useState({ adult:0, children:0, infants: 0});

  const changeGuestNum = (type, who) => {
      if(type === 'plus') {
          switch(who) {
            case 'adult': {
                setGuestNum({...guestNum, adult:guestNum.adult + 1});
                break;
            }
            case 'children': {
                setGuestNum({...guestNum, children:guestNum.children + 1});
                break;
            }
            case 'infants':{
                setGuestNum({...guestNum, infants:guestNum.infants + 1});
                break;
            }
            default: {
            }
          }
      } else {
        switch(who) {
          case 'adult': {
                setGuestNum({...guestNum, adult:guestNum.adult > 0 ? guestNum.adult - 1 : 0});
                break;
          }
          case 'children': {
                setGuestNum({...guestNum, children:guestNum.adult > 0 ? guestNum.children - 1 : 0});
                break;
          }
          case 'infants':{
                setGuestNum({...guestNum, infants:guestNum.adult > 0 ? guestNum.infants - 1 : 0});
                break;
          }
          default: {
          }
        }
      }
  }

  return (
    <>
      <Popover.Group
        as="nav"
        className="flex w-6xl max-w-4/5 m-auto relative mt-3 bg-gray-200 rounded-full p-1"
      >
        <Popover className="w-1/4 outline-none">
          <Popover.Button className="w-full flex outline-none">
            {({ open }) => (
              <>
                {open && locationRef.current.focus()}
                {open && setCurrentNav(1)}
                <div
                  className={classNames(
                    open ? "rounded-full bg-white shadow-l shadow-lg" : "",
                    "w-full transform py-5 leading-2"
                  )}
                >
                  <div className="w-full text-left text-gray-600 text-sm font-semibold pl-8">
                    Location
                  </div>
                  <GooglePlacesAutoComplete
                    inputRef={locationRef}
                    inputClassName="w-full bg-transparent outline-none overflow-ellipsis pl-8 text-md text-gray-700 placeholder-gray-400"
                    itemClassName="text-left my-3 text-gray-600"
                    containerClassName="w-200% absolute top-24 p-3 bg-white rounded-lg shadow-md"
                    loader={
                      <div className="w-200% absolute top-24 p-3 bg-white rounded-lg">
                        loader
                      </div>
                    }
                    onSelect={(e) => {
                      checkInRef.current.click();
                    }}
                  />
                </div>
                {(currentNav !== 1 && currentNav !== 2) && (
                  <span className="bg-gray-300 w-px m-auto h-16"></span>
                )}
              </>
            )}
          </Popover.Button>
        </Popover>
        <Popover className="w-1/4" as="div">
          <Popover.Button className="w-full flex outline-none">
            {({ open }) => (
              <>
                {open && setCurrentNav(2)}
                <div
                  ref={checkInRef}
                  className={classNames(
                    open ? "rounded-full bg-white shadow-lg" : "",
                    "transform py-5 w-full"
                  )}
                  onClick={(e) => e.preventDefault()}
                >
                  <div className="w-full text-left text-gray-600 text-sm font-semibold pl-8">
                    CheckIn
                  </div>
                  <div
                    className={`w-full text-left text-md font-semibold pl-8 ${
                      filterDateRange.from === ""
                        ? "text-gray-400"
                        : "text-gray-600"
                    }`}
                  >
                    {filterDateRange.from ? moment(filterDateRange.from, 'YYYY-MM-DD').format('MM/DD/YYYY') : "From"}
                  </div>
                </div>
                {(currentNav !== 2 && currentNav !== 3) && (
                  <span className="bg-gray-300 w-px m-auto h-16"></span>
                )}
              </>
            )}
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
          >
            <Popover.Panel
              static
              className="hidden md:block absolute z-10 top-24 inset-x-0 bg-white rounded-t-lg shadow-md"
            >
              <RangePicker
              numberOfMonths={2}
                onChange={(e) => {
                  setFilterDateRange(e);
                  checkOutRef.current.click();
                }}
                selectedDays={{
                  from: filterDateRange.from,
                  to: filterDateRange.to,
                }}
                disabledBeforeDate={filterDateRange.from}
              />
            </Popover.Panel>
          </Transition>
        </Popover>
        <Popover className="w-1/4">
          <Popover.Button className="w-full flex outline-none">
            {({ open }) => (
              <>
                {open && setCurrentNav(3)}
                <div
                  ref={checkOutRef}
                  className={classNames(
                    open ? "rounded-full bg-white shadow-lg" : "",
                    "transform py-5 w-full"
                  )}
                  onClick={(e) => e.preventDefault()}
                >
                  <div className="w-full text-left text-gray-600 text-sm font-semibold pl-8">
                    CheckOut
                  </div>
                  <div
                    className={`w-full text-left text-md font-semibold pl-8 ${
                      filterDateRange.to === ""
                        ? "text-gray-400"
                        : "text-gray-600"
                    }`}
                  >
                    {filterDateRange.to ? moment(filterDateRange.to, 'YYYY-MM-DD').format('MM/DD/YYYY') : "To"}
                  </div>
                </div>
                {(currentNav !== 3 && currentNav !== 4) && (
                  <span className="bg-gray-300 w-px m-auto h-16"></span>
                )}
              </>
            )}
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
          >
            <Popover.Panel
              static
              className="hidden md:block absolute z-10 top-24 inset-x-0 bg-white rounded-t-lg shadow-md"
            >
              <RangePicker
              numberOfMonths={2}
                onChange={(e) => {
                  setFilterDateRange(e);
                  if (filterDateRange.from === "") {
                    checkInRef.current.click();
                  }
                }}
                selectedDays={{
                  from: filterDateRange.from,
                  to: filterDateRange.to,
                }}
                disabledAfterDate={filterDateRange.to}
              />
            </Popover.Panel>
          </Transition>
        </Popover>
        <Popover className="w-1/4">
          <Popover.Button className="w-full flex outline-none relative" ref={guestRef}>
            {({ open }) => (
              <>
                {open && setCurrentNav(4)}
                <div className={classNames( open ? "rounded-full bg-white shadow-lg" : "", "transform py-5 w-full" )} onClick={(e) => e.preventDefault()} >
                  <div className="w-full text-left text-gray-600 text-sm font-semibold pl-8">
                    Guest
                  </div>
                  <div className="w-full text-left text-gray-400 text-md font-semibold pl-8">
                    Add Guest
                  </div>
                </div>
                <div className="absolute w-16 h-16 bg-yellow-300 hover:bg-yellow-400 rounded-full right-3 top-3 flex items-center justify-center" onClick={(e) => e.preventDefault()}>
                    <SearchIcon className="text-white w-1/2 h-1/2" />
                </div>
              </>
            )}
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
          >
            <Popover.Panel
              static
              className="w-96 ml-auto hidden md:block absolute z-10 top-24 inset-x-0 bg-white rounded-lg shadow-md p-5"
            >
                <div className="flex text-gray-500 items-center my-4">
                    <span className=" w-4/6 text-gray-600 font-bold">Adult</span>
                    <div className="flex w-2/6 items-center">
                        <button className={`rounded-full border-2 border-gray-300 ${guestNum.adult === 0? 'cursor-not-allowed' : 'cursor-pointer hover:bg-gray-300'}`} onClick={() => changeGuestNum('minus', 'adult')}><MinusIcon className="w-8 h-8" /></button>
                        <span className="text-center mx-3">{guestNum.adult}</span>
                        <button className="rounded-full border-2 border-gray-300 cursor-pointer hover:bg-gray-300" onClick={() => changeGuestNum('plus', 'adult')}><PlusIcon className="w-8 h-8" /></button>
                    </div>
                </div>
                <div className="flex text-gray-500 items-center my-4">
                    <span className=" w-4/6 text-gray-600 font-bold">Children</span>
                    <div className="flex w-2/6 items-center">
                        <button className={`rounded-full border-2 border-gray-300 ${guestNum.children === 0? 'cursor-not-allowed' : 'cursor-pointer hover:bg-gray-300'}`} onClick={() => changeGuestNum('minus', 'children')}><MinusIcon className="w-8 h-8" /></button>
                        <span className="text-center mx-3">{guestNum.children}</span>
                        <button className="rounded-full border-2 border-gray-300 cursor-pointer hover:bg-gray-300" onClick={() => changeGuestNum('plus', 'children')}><PlusIcon className="w-8 h-8" /></button>
                    </div>
                </div>
                <div className="flex text-gray-500 items-center my-4">
                    <span className=" w-4/6 text-gray-600 font-bold">Infants</span>
                    <div className="flex w-2/6 items-center">
                        <button className={`rounded-full border-2 border-gray-300 ${guestNum.infants === 0? 'cursor-not-allowed' : 'cursor-pointer hover:bg-gray-300'}`} onClick={() => changeGuestNum('minus', 'infants')}><MinusIcon className="w-8 h-8" /></button>
                        <span className="text-center mx-3">{guestNum.infants}</span>
                        <button className="rounded-full border-2 border-gray-300 cursor-pointer hover:bg-gray-300" onClick={() => changeGuestNum('plus', 'infants')}><PlusIcon className="w-8 h-8" /></button>
                    </div>
                </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </Popover.Group>
    </>
  );
}
