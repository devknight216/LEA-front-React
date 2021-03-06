import React from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import VisaCard from "assets/imgs/icon/visacard.svg";
import MasterCard from "assets/imgs/icon/mastercard.svg";
import AmexCard from "assets/imgs/icon/amexcard.svg";
import DiscoverCard from "assets/imgs/icon/discovercard.svg";
import { InputBox } from "components/basicui/basicui";

export default function AddPaymentMethodPopup({ isOpen, setIsOpen }) {
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" auto-reopen="true" className="fixed z-40 inset-0 overflow-y-auto" onClose={onClose}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={onClose}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <Dialog.Title as="h3" className="text-xl font-extrabold leading-6 py-4 text-gray-700">
                    Add Payment Method
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className="flex gap-2 flex-wrap">
                      <img src={VisaCard} />
                      <img src={MasterCard} />
                      <img src={AmexCard} />
                      <img src={DiscoverCard} />
                    </div>
                    <div className="mt-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                        <div>
                          <InputBox label="First Name" />
                        </div>
                        <div>
                          <InputBox label="Last Name" />
                        </div>
                        <div className="border-t col-span-2"></div>
                        <div className="col-span-2">
                          <InputBox label="Card Info" placeholder="Card Number" />
                        </div>
                        <div>
                          <InputBox placeholder="Expiration" />
                        </div>
                        <div>
                          <InputBox placeholder="CVV" />
                        </div>
                        <div className="border-t col-span-2"></div>
                        <div>
                          <InputBox label="Street address" />
                        </div>
                        <div>
                          <InputBox label="Apt #" />
                        </div>
                        <div>
                          <InputBox label="City" />
                        </div>
                        <div>
                          <InputBox label="State" />
                        </div>
                        <div>
                          <InputBox label="ZIP code" />
                        </div>
                        <div>
                          <InputBox label="Country/region" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={onClose}
                >
                  Done
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                  onClick={onClose}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
