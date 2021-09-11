import React from "react";
import { Link, useLocation } from "react-router-dom";
import { amenities, features, guestsNum, lastOffer } from "../createnewitem/constant";
import { formatReqestData } from "../createnewitem/functions";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { getPropertyById, updatePropertyById } from "reduxstore/propertyreducer/slice";
import { useEffect } from "react";
import ImageUploadToAWSComponent from "components/common/uploadImage";

import { Toast } from "components/common/notification";
import { Toggle } from "components/basicui/basicui";

export default function CreateNewPropertyPage() {
  const location = useLocation();
  const propertyId = location.pathname.split("/")[4];

  //Get Stored value
  const dispatch = useDispatch();
  const property = useSelector((state) => state.properties.property);
  useEffect(() => {
    dispatch(getPropertyById(propertyId));
  }, []);

  //Get form data from hook form
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const requestBody = formatReqestData(data);
    //Dispatch API to create New Item
    const payload = {
      id: propertyId,
      body: JSON.stringify(requestBody),
    };
    try {
      dispatch(updatePropertyById(payload));
      Toast("", "Updated Successful", "success");
    } catch (error) {
      Toast("", "Faild", "danger");
    }
  };

  return (
    <form className="space-y-8 divide-y divide-gray-200" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">Create Property</h3>
            <p className="mt-1 text-sm text-gray-500">
              This information will be displayed publicly so be careful what you share.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label htmlFor="propertyName" className="block text-sm font-medium text-gray-700">
                Property Name
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  defaultValue={property.propertyName}
                  {...register("propertyName", { required: true, maxLength: 80 })}
                  className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-full py-2 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                />
              </div>
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="nightlyRate" className="block text-sm font-medium text-gray-700">
                Nightly Rate($)
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="number"
                  defaultValue={property.nightlyRate}
                  min={0}
                  {...register("nightlyRate", { required: true })}
                  className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-full py-2 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                />
              </div>
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="nightlyRate" className="block text-sm font-medium text-gray-700">
                Weekly Discount(%)
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="number"
                  min={0}
                  className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-full p-2 min-w-0 rounded-md sm:text-sm border-gray-300"
                />
              </div>
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="nightlyRate" className="block text-sm font-medium text-gray-700">
                Monthly Discount($)
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="number"
                  min={0}
                  className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-full p-2 min-w-0 rounded-md sm:text-sm border-gray-300"
                />
              </div>
            </div>
            <div className="sm:col-span-6">
              <Toggle label="Instant Book" removeToggleValue={() => {}} getToggleValue={() => {}} />
            </div>
            <div className="sm:col-span-6">
              <label htmlFor="propertyDescription" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <div className="mt-1">
                <textarea
                  rows={6}
                  defaultValue={property.propertyDescription}
                  {...register("propertyDescription", { required: true })}
                  className="shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-full py-2 sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">Write a few sentences about property.</p>
            </div>
          </div>
        </div>
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
                  defaultValue={property.hostInfo?.name}
                  {...register("hostedByName", { required: true })}
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
                  defaultValue={property.hostInfo?.email}
                  {...register("hostedByNameEmail", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
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
                  defaultValue={property.propertyLocation?.apartment}
                  {...register("apartment", { required: true })}
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
                  defaultValue={property.propertyLocation?.street}
                  {...register("street", { required: true })}
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
                  defaultValue={property.propertyLocation?.city}
                  {...register("city", { required: true })}
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
                  defaultValue={property.propertyLocation?.state}
                  {...register("state", { required: true })}
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
                  defaultValue={property.propertyLocation?.zip}
                  {...register("zip", { required: true, pattern: /[0-9]+/ })}
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
                  {...register("country", { required: true })}
                  defaultValue={property.propertyLocation?.country}
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
            <p className="mt-1 text-sm text-gray-500">Select options below that best suit your property.</p>
          </div>
          <div className="mt-6">
            <fieldset>
              <div className="mt-4 space-y-4">
                {features.map((item, index) => (
                  <div key={index}>
                    <legend className="text-base font-medium text-gray-900">{item.label}</legend>
                    <div className="mt-2 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <select
                          id={item.label}
                          name={item.label}
                          autoComplete={item.label}
                          {...register(`${item.variableName}`)}
                          defaultValue={property[item.variableName]}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full  h-full py-2 sm:text-sm border-gray-300 rounded-md"
                        >
                          {item.properties.map((list, index) => (
                            <option key={index}>{list}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
                <legend className="text-base font-medium text-gray-900">
                  Please indicate the number applicable to the fields below:{" "}
                </legend>
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2 md:grid-cols-4">
                  {guestsNum.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-center">
                        <input
                          type="number"
                          {...register(`${item.variableName}`, { required: true })}
                          defaultValue={property[item.variableName]}
                          min={0}
                          id={item.type}
                          className="shadow-sm focus:ring-indigo-500 px-2 focus:border-indigo-500 block h-full py-2 sm:text-sm border-gray-300 rounded-md"
                        />
                        <span className="ml-3">{item.type}</span>
                      </div>
                      <span className="text-sm text-gray-500">{item.description}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <legend className="text-base font-medium text-gray-900">What amenities comes with booking the property?</legend>
                  <div className="p-5 border-2 rounded-xl grid grid-cols-1 sm:grid-cols-4 gap-x-4 gap-y-4">
                    {property.amenities &&
                      Object.keys(amenities).map((category) => (
                        <div className="px-3" key={category}>
                          <legend className="text-base font-medium py-2 text-gray-900">{amenities[category].title}</legend>
                          {amenities[category].lists.map((item, index) => (
                            <div className="relative flex items-start" key={index}>
                              <div className="flex items-center h-5">
                                <input
                                  id={item.variableName}
                                  {...register(`${item.variableName}`)}
                                  type="checkbox"
                                  defaultChecked={property.amenities?.indexOf(item.label) >= 0}
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label htmlFor={item.variableName} className="font-medium text-gray-700">
                                  {item.label}
                                </label>
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <fieldset>
            <div className="grid sm:grid-cols-4 grid-cols-1 mt-5">
              <div>
                <legend className="text-base font-medium py-2 text-gray-900">Describe the property.</legend>
                {property.propertyDescribe &&
                  lastOffer.first.map((item, index) => (
                    <div className="relative flex items-start" key={index}>
                      <div className="flex items-center h-5">
                        <input
                          {...register(`${item.variableName}`)}
                          type="checkbox"
                          defaultChecked={property.propertyDescribe?.indexOf(item.label) >= 0}
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor={item.variableName} className="font-medium text-gray-700">
                          {item.lable}
                        </label>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="border px-5 py-2 rounded-md col-span-3">
                <h2 className="text-base font-medium py-2 text-gray-900">Fees</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:gap-x-3">
                  <div className="col-span-1">
                    <label htmlFor="depositeFee" className="block text-sm font-medium text-gray-700">
                      Deposit Fee
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        defaultValue={property?.depositFee}
                        {...register("depositFee", {
                          required: true,
                          pattern: /[0-9]+/,
                        })}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full h-full py-2 sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <label htmlFor="petFee" className="block text-sm font-medium text-gray-700">
                      Pet Allow Num
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        defaultValue={property?.petAllowFee?.fee}
                        {...register("petFee", {
                          required: true,
                          pattern: /[0-9]+/,
                        })}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full h-full py-2 sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <label htmlFor="petFee" className="block text-sm font-medium text-gray-700">
                      Pet Allow Fee
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        defaultValue={property?.petAllowFee?.fee}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full h-full py-2 sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <label htmlFor="stagingRate" className="block text-sm font-medium text-gray-700">
                      Stagin Fee
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        defaultValue={property?.stagingFee?.rate}
                        {...register("stagingRate", {
                          required: true,
                          pattern: /[0-9]+/,
                        })}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full h-full py-2 sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
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
            Update
          </button>
        </div>
      </div>
      <div>
        <ImageUploadToAWSComponent />
      </div>
    </form>
  );
}
