import React from 'react'

const locationInfoLayout = [
    {
        label: "Apartment, Suite etc",
        name: "apartment",
        onchange: () => {}
    },
    {
        label: "Street address",
        name: "street",
        onchange: () => {}
    },
    {
        label: "City",
        name: "city",
        onchange: () => {}
    },
    {
        label: "State / Province",
        name: "state",
        onchange: () => {}
    },
    {
        label: "ZIP / Postal",
        name: "zip",
        onchange: () => {}
    },
]


function HostNewPropertyStepOne({ nextStep }) {
    return (
        <div>
            <div className="max-w-4xl mx-auto rounded-md shadow-md p-3 sm:p-8 bg-white px-2">
                <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Create your own property</h3>
                </div>
                <div className="py-5">
                    <form>                       
                        <div className="grid grid-cols-1 sm:gird-cols-2 md:grid-cols-3 md:gap-4 py-2">
                            <div className="col-span-2">
                                <InputBox label="Property Name" name="propertyName" type="text"/>
                            </div>
                            <div className="col-span-1">
                                <InputBox label="Nightly Rate" name="nightlyRate" type="number"/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Description
                            </label>
                            <textarea 
                                className="border  rounded-md p-4 outline-none border-gray-300 w-full" 
                                rows={5}
                                name="propertyDescription"
                            />
                        </div>
                        <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Property Location</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 mt-4">                           
                            {
                                locationInfoLayout.map(( item, index ) => (
                                    <div key={index}>
                                        <InputBox label={item.label} name={item.name} type="text" onchange={item.onchange}/>
                                    </div>
                                ))
                            }
                            <div>
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                    Country / Region
                                </label>
                                <div className="mt-1">
                                    <select
                                        className="shadow-sm focus:outline-none block w-full  h-full p-3 sm:text-sm border-gray-300  border rounded-md"
                                    >
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <footer>
                    <div className="py-5 text-center">
                        <button className="bg-red-500 focus:bg-red-700 text-white px-10 py-2 rounded-md" onClick={nextStep}>Next</button>
                    </div>
                </footer>
            </div>
        </div>
    )
}

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

export default HostNewPropertyStepOne
