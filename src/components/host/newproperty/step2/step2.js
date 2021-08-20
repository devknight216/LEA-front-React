import { features, guestsNum } from 'admin/createnewitem/constant';
import React, { useState } from 'react';
import { InputBox } from '../step1/step1';
import MultiSelect from 'react-multi-select-component';
import { amenities } from 'components/properties/search/constant';
import { Switch } from '@headlessui/react'

const specialAmenities = [
    "Pets Allowed",
    "Wifi",
    "TV",
    "Kitchen",
    "Free parking on premises",
    "Pool",
    "Air Conditioning",
    "Gym",
    "Dedicated workspace"
]

function HostNewPropertyStepTwo({ previousStep, nextStep }) {

    const [seletedAmenities, setSelectedAmenities] = useState([])

    return (
        <div>
            <div className="max-w-4xl mx-auto rounded-md shadow-md p-3 sm:p-8 bg-white px-2">
                <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Property Features</h3>
                </div>
                <div className="py-2">
                    <form>
                        <div className="space-y-2">
                            {
                                features.map((item, index) => (
                                    <div key={index}>
                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                            { item.label }
                                        </label>
                                        <div className="mt-1">
                                            <select
                                                name={item.variableName}
                                                className="shadow-sm focus:outline-none block w-full  h-full p-3 sm:text-sm border-gray-300  border rounded-md"
                                            >
                                                {
                                                    item.properties.map((option) => (
                                                        <option key={option}>{option}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <label className="mt-5 block text-sm font-medium text-gray-700">Please indicate the number applicable to the fields below:</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-3">
                            {
                                guestsNum.map(item => (
                                    <div key={item.variableName}>
                                        <InputBox type="number" name={item.type} placeholder={item.type}/>
                                        <span className="text-gray-400">{item.description}</span>
                                    </div>
                                ))
                            }

                        </div>
                        <label className="mt-5 block text-sm font-medium text-gray-700">What amenities comes with booking the property?</label>
                        <div className="py-5 grid grid-cols-2 md:grid-cols-3">
                            {
                                specialAmenities.map(item => (
                                    <div key={item} className="my-2">
                                        <Toggle label={item}/>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="my-2">
                            <MultiSelect
                                options={amenities}
                                value={seletedAmenities}
                                onChange={setSelectedAmenities}
                                labelledBy="Select"
                            />
                        </div>
                    </form>
                </div>
                <footer>
                    <div className="py-5 flex justify-between">
                        <button className="bg-red-500 focus:bg-red-700 text-white px-10 py-2 rounded-md" onClick={previousStep}>Prev</button>
                        <button className="bg-red-500 focus:bg-red-700 text-white px-10 py-2 rounded-md" onClick={nextStep}>Next</button>
                    </div>
                </footer>
            </div>
        </div>
    )
}


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Toggle({label}) {
  const [enabled, setEnabled] = useState(false)

  return (
    <Switch.Group as="div" className="flex items-center">
      <Switch
        checked={enabled}
        onChange={setEnabled}
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

export default HostNewPropertyStepTwo