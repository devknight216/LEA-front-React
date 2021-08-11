import ImageListComponent from 'components/admin/manageitem/imagelist'
import { Link } from 'react-router-dom'
import { amenities } from './constant'
const features = [
  {
    label: "What is the property type?",
    properties:['Apartment', 'House', 'Secondary Unit', 'Unique Space', 'Bed and Breakfast', 'Boutique Hotel']
  },
  {
    label: "Choose the best option that fits the property.",
    properties:['Rental Unit', 'Condominium (Condo)', 'Loft', 'Serviced Apartment']
  },
  {
    label: "Choose the best option that fits the space in the property that guests will occupy.",
    properties:['An entire place', 'A private room', 'A shared room']
  },
]

const guestsNum = [
  {
    type: 'of guests',
    description: '# of guests that the property an accomodate'
  },
  {
    type: 'of beds',
    description: '# of beds in the property that guests can use'
  },
  {
    type: 'of bedrooms',
    description: '# of bedrooms in the property'
  },
  {
    type: 'of bathrooms',
    description: '# of bathrroms in the property'
  },
]

const lastOffer = {
  'first':[
    'Peaceful',
    'Unique',
    'Family-Friendly',
    'Stylish',
    'Central',
    'Spacious'
  ],
  'second':[
    'Security Camera',
    'Weapons',
    'Dangerous animals'
  ]
}

export default function CreateNewPropertyPage() { 
    return (
      <form className="space-y-8 divide-y divide-gray-200">
        <div className="space-y-8 divide-y divide-gray-200">
          <div>
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">Create Property</h3>
              <p className="mt-1 text-sm text-gray-500">
                This information will be displayed publicly so be careful what you share.
              </p>
            </div>
  
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="propertyName" className="block text-sm font-medium text-gray-700">
                  Property Name
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    name="propertyName"
                    id="propertyName"
                    autoComplete="propertyName"
                    className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-full py-2 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                  />
                </div>
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="nightlyRate" className="block text-sm font-medium text-gray-700">
                  Nightly Rate
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="number"
                    name="nightlyRate"
                    id="nightlyRate"
                    autoComplete="nightlyRate"
                    className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-full py-2 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-6">
                <label htmlFor="propertyDescription" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <div className="mt-1">
                  <textarea
                    id="propertyDescription"
                    name="propertyDescription"
                    rows={3}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full h-full py-2 sm:text-sm border-gray-300 rounded-md"
                    defaultValue={''}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">Write a few sentences about property.</p>
              </div>            
  
              <div className="sm:col-span-6">
                <label htmlFor="cover_photo" className="block text-sm font-medium text-gray-700">
                  Images
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ImageListComponent/>
          <div className="pt-8">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">Host Information</h3>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="hostedByName" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="hostedByName"
                    id="hostedByName"
                    autoComplete="hostedByName"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full  h-full py-2 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-3">
                <label htmlFor="hostedByNameEmail" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="hostedByNameEmail"
                    id="hostedByNameEmail"
                    autoComplete="hostedByNameEmail"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full  h-full py-2 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>  
              <div className="sm:col-span-6 mt-5">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Property Location</h3>
              </div>
  
              
              <div className="sm:col-span-3">
                <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">
                  Apartment, Suite etc
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="street_address"
                    id="street_address"
                    autoComplete="street-address"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full h-full py-2 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">
                  Street address
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="street_address"
                    id="street_address"
                    autoComplete="street-address"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full h-full py-2 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-2">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full h-full py-2 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-2">
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                  State / Province
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="state"
                    id="state"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full h-full py-2 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-2">
                <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
                  ZIP / Postal
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="zip"
                    id="zip"
                    autoComplete="postal-code"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full h-full py-2 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Country / Region
                </label>
                <div className="mt-1">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full  h-full py-2 sm:text-sm border-gray-300 rounded-md"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
  
          <div className="pt-8">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">Property Features</h3>
              <p className="mt-1 text-sm text-gray-500">
                Select options below that best suit your property.
              </p>
            </div>
            <div className="mt-6">
              <fieldset>
                <div className="mt-4 space-y-4">  
                  {
                    features.map((item, index)=>(
                      <div key={index}>
                        <legend className="text-base font-medium text-gray-900">{item.label}</legend>
                        <div className="mt-2 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                          <div className="sm:col-span-3">
                            <select
                              id={item.label}
                              name={item.label}
                              autoComplete={item.label}
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full  h-full py-2 sm:text-sm border-gray-300 rounded-md"
                            >
                              {
                                item.properties.map((list, index) => (
                                  <option key={index}>{list}</option>
                                ))
                              }
                            </select>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                  <legend className="text-base font-medium text-gray-900">Please indicate the number applicable to the fields below: </legend>
                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-4">
                    {
                      guestsNum.map((item, index)=>(
                        <div key={index}>
                            <div className="flex items-center">                    
                              <input
                                type={item.type}
                                name={item.type}
                                min= {0}
                                id={item.type}
                                className="shadow-sm focus:ring-indigo-500 px-2 focus:border-indigo-500 block h-full py-2 sm:text-sm border-gray-300 rounded-md"
                              />
                              <span className="ml-3">{item.type}</span>
                            </div>
                            <span className="text-sm text-gray-500">{item.description}</span>
                        </div>
                      ))
                    }                  
                  </div>
                  <div>
                    <legend className='text-base font-medium text-gray-900'>What amenities comes with booking the property?</legend>
                    <div className="p-5 border-2 rounded-xl grid grid-cols-1 sm:grid-cols-4 gap-x-4 gap-y-4">
                      {
                        Object.keys(amenities).map(category => (
                          <div className='px-3' key={category}>
                            <legend className='text-base font-medium py-2 text-gray-900'>{amenities[category].title}</legend>
                            {
                              amenities[category].lists.map((item, index) => (
                                <div className="relative flex items-start" key={index}>
                                  <div className="flex items-center h-5">
                                    <input
                                      id={item.variableName}
                                      name={item.variableName}
                                      type="checkbox"
                                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                    />
                                  </div>
                                  <div className="ml-3 text-sm">
                                    <label htmlFor= {item.variableName} className="font-medium text-gray-700">
                                      {item.label}
                                    </label>
                                  </div>
                                </div>
                              ))
                            }
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </fieldset>   
            </div>
            <fieldset>
              <div className="grid sm:grid-cols-2 grid-cols-1">
                <div>
                  <legend className='text-base font-medium py-2 text-gray-900'>Describe the property.</legend>
                  {
                    lastOffer.first.map((item, index) => (
                      <div className="relative flex items-start" key={index}>
                        <div className="flex items-center h-5">
                          <input
                            id= {item}
                            name= {item}
                            type="checkbox"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor= {item} className="font-medium text-gray-700">
                            {item}
                          </label>
                        </div>
                      </div>
                    ))
                  }
                </div>
                <div>
                  <legend className='text-base font-medium py-2 text-gray-900'>Does the property has any of the following?</legend>
                  {
                    lastOffer.second.map((item, index) => (
                      <div className="relative flex items-start" key={index}>
                        <div className="flex items-center h-5">
                          <input
                            id= {item}
                            name= {item}
                            type="checkbox"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor= {item} className="font-medium text-gray-700">
                            {item}
                          </label>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </fieldset>       
          </div>
        </div>
  
        <div className="pt-5">
          <div className="flex justify-end">
            <Link to="/admin/properties">
              <button
                type="button"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </button>
            </Link>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    )
  }