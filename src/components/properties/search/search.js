import { Range } from 'rc-slider'
import 'rc-slider/assets/index.css';
import { useState } from 'react';
import MultiSelect from 'react-multi-select-component';
import { classNames } from 'shared/function';
import { typeArray, spaceArray, amenities } from './const';

export default function SearchComponent() {
  //Mark for slider
  const marks = {
    0: "$0",
    1000: "$1000"
  }
  const [selected, setSelected] = useState([])

  return (
    <div>
      <div className="shadow bg-white p-10 rounded-md text-gray-500 ">
        <span className="text-gray-500 text-lg font-bold">Filtering</span>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div className="max-w-xs">
            <p className="py-3">Nightly rate</p>
            <Range 
              min={0}
              max={1000}
              marks={marks}
              defaultValue={[0, 1000]}
              onChange={(value)=>{ console.log(value); }}
            />
          </div>
          <div>
            <div>
              <p className="text-gray-700 py-0">Type</p>
              <select
                id="location"
                name="location"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-2 border-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                defaultValue="Canada"
              >
                { typeArray.map(item => (
                  <option key={item}>{item}</option>
                )) }
              </select>
            </div>
          </div>
          <div>
            <p className="text-gray-700 py-0">Space Feature</p>
            <select
              id="location"
              name="location"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-2 border-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              defaultValue="Canada"
            >
              { spaceArray.map(item => (
                <option key={item}>{item}</option>
              )) }
            </select>
          </div>
          <div className="mt-1 z-50">
            <p className="text-gray-700">Amenities</p>
            <MultiSelect
                options={amenities}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
              />
          </div>
        </div>
      </div>
    </div>
  )
}
  //Mark for slider
  // const marks = {
  //   0: "$0",
  //   1000: "$1000"
  // }

  // const [selected, setSelected] = useState([]);
  
  // return (
  //   <Transition.Root show={isOpen} as={Fragment}>
  //     <Dialog as="div" auto-reopen="true" className="fixed inset-0 overflow-hidden z-50" onClose={() => {setIsOpen(false)}}>
  //       <div className="absolute inset-0 overflow-hidden">
  //         <Transition.Child
  //           as={Fragment}
  //           enter="ease-in-out duration-500"
  //           enterFrom="opacity-0"
  //           enterTo="opacity-100"
  //           leave="ease-in-out duration-500"
  //           leaveFrom="opacity-100"
  //           leaveTo="opacity-0"
  //         >
  //           <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
  //         </Transition.Child>

  //         <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
  //           <Transition.Child
  //             as={Fragment}
  //             enter="transform transition ease-in-out duration-500 sm:duration-700"
  //             enterFrom="translate-x-full"
  //             enterTo="translate-x-0"
  //             leave="transform transition ease-in-out duration-500 sm:duration-700"
  //             leaveFrom="translate-x-0"
  //             leaveTo="translate-x-full"
  //           >
  //             <div className="w-screen max-w-md">
  //               <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
  //                 <div className="px-4 sm:px-6">
  //                   <div className="flex items-start justify-between">
  //                     <Dialog.Title className="text-lg font-medium text-gray-900">Search</Dialog.Title>
  //                     <div className="ml-3 h-7 flex items-center">
  //                       <button
  //                         className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  //                         onClick={() => setIsOpen(false)}
  //                       >
  //                         <span className="sr-only">Close panel</span>
  //                         <XIcon className="h-6 w-6" aria-hidden="true" />
  //                       </button>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 <div className="mt-6 relative flex-1 px-4 sm:px-6">
  //                   {/* Replace with your content */}
  //                   <div className="absolute inset-0 px-4 sm:px-6">
  //                     <div className="h-full border-2 border-dashed border-gray-200 p-5" aria-hidden="true" >
  //                       <div>
  //                         <p className="text-gray-700 py-2">Nightly Rate Range</p>
  //                         <Range 
  //                           min={0}
  //                           max={1000}
  //                           marks={marks}
  //                           defaultValue={[0, 1000]}
  //                         />
  //                       </div>
  //                       <div className="py-5 mt-10">
  //                         <p className="text-gray-700 py-0">Type</p>
  //                         <select
  //                           id="location"
  //                           name="location"
  //                           className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-2 border-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
  //                           defaultValue="Canada"
  //                         >
  //                          { typeArray.map(item => (
  //                            <option key={item}>{item}</option>
  //                          )) }
  //                         </select>
  //                       </div>
  //                       <div className="py-5">
  //                         <p className="text-gray-700 py-0">Space Feature</p>
  //                         <select
  //                           id="location"
  //                           name="location"
  //                           className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-2 border-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
  //                           defaultValue="Canada"
  //                         >
  //                          { spaceArray.map(item => (
  //                            <option key={item}>{item}</option>
  //                          )) }
  //                         </select>
  //                       </div>
  //                       <div className="py-5">
  //                         <p className="text-gray-700 py-0">Amenities</p>
  //                         <MultiSelect
  //                           options={amenities}
  //                           value={selected}
  //                           onChange={setSelected}
  //                           labelledBy="Select"
  //                         />
  //                       </div>
  //                       <div className="mt-3 sm:mt-0 sm:ml-4 text-center">
  //                         <button
  //                             type="button"
  //                             className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  //                         >
  //                           Search
  //                         </button>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   {/* /End replace */}
  //                 </div>
  //               </div>
  //             </div>
  //           </Transition.Child>
  //         </div>
  //       </div>
  //     </Dialog>
  //   </Transition.Root>
  // )
