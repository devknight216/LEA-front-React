import { useEffect, useState } from 'react';
import MultiSelect from 'react-multi-select-component';
import { typeArray, spaceArray, amenities } from './constant';
import qs from 'qs'
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchProperties } from 'reduxstore/propertyreducer/action';
import { Toggle } from 'components/basicui/basicui';

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
export default function SearchComponent() {

  const location = useLocation();

  //Get Filtered Data
  const [filterData, setFilterData] = useState({
      nightlyRateRangeFrom: 0,
      nightlyRateRangeTo: '',
      location: {},
      propertyType: '',
      propertySpaceFeature: '',
      guestNum: 0,
      amenities: []
  });
  //Get Amenities Value
  const getAmenities = (value) => {
    setFilterData({
      ...filterData,
      amenities: value
    })
  }

  //Get Nightly Rate
  const getNightlyRate = (e) => {
    setFilterData({
      ...filterData,
      nightlyRateRangeFrom: e.target.value
    })
  }

  //Get Type Value
  const getType = (e) => {
    setFilterData({
      ...filterData,
      propertyType: e.target.value =="All"?"": e.target.value
    })
  }

  //Get Space Feature
  const getSpaceFeature = (e) => {
    setFilterData({
      ...filterData,
      propertySpaceFeature: e.target.value =="All"?"": e.target.value
    })
  }
  
  const dispatch = useDispatch();
  useEffect(() => {
    if(location.search){
      const query = qs.parse(location.search, { ignoreQueryPrefix: true });
      dispatch(searchProperties({
        nightlyRateRangeFrom: filterData.nightlyRateRangeFrom,
        nightlyRateRangeTo: filterData.nightlyRateRangeTo,
        location: {},
        propertyType: filterData.propertyType,
        propertySpaceFeature: filterData.propertySpaceFeature,
        guestNum: (parseInt(query.adult) + parseInt(query.children)),
        amenities: filterData.amenities
      }));
    }
    else{
      dispatch(searchProperties(filterData));
    }
  }, [filterData])

  return (
    <div>
      <div className="shadow bg-white p-10 rounded-md text-gray-500 ">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div className="mt-1">
            <label htmlFor="number" className="block text-sm font-medium text-gray-700">
              Nightly Rate
            </label>
            <div className="mt-1">
              <input
                type="number"
                name="rate"
                value={filterData.nightlyRateRangeFrom}
                onChange={getNightlyRate}
                id="rate"
                className="shadow-sm h-full py-2 px-3 border border-gray-300 block w-full sm:text-sm rounded-md"
              />
            </div>
          </div>
          <div>
            <div>
              <p className="block text-sm font-medium text-gray-700">Type</p>
              <select
                id="propertyType"
                name="propertyType"
                onChange={getType}
                value={(filterData.propertyType=="")?"":filterData.propertyType}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300  sm:text-sm rounded-md"
                defaultValue="Canada"
              >
                { typeArray.map(item => (
                  <option key={item}>{item}</option>
                )) }
              </select>
            </div>
          </div>
          <div>
            <p className="block text-sm font-medium text-gray-700">Space Feature</p>
            <select
              id="spaceFeature"
              name="spaceFeature"
              onChange={getSpaceFeature}
              value={(filterData.propertySpaceFeature=="")?"All":filterData.propertySpaceFeature}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300  sm:text-sm rounded-md"
              defaultValue="Canada"
            >
              { spaceArray.map(item => (
                <option key={item}>{item}</option>
              )) }
            </select>
          </div>
          <div className="mt-1 z-50">
            <p className="block text-sm font-medium text-gray-700">Amenities</p>
            <MultiSelect
              options={amenities}
              value={filterData.amenities}
              onChange={getAmenities}
              labelledBy="Select"
            />
          </div>
        </div>
        <div className="border-t mt-4 py-3">
          <span className="text-lg text-gray-500 font-bold">Special Amenities</span>
          <div className="py-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5">
              {
                  specialAmenities.map(item => (
                      <div key={item} className="my-2">
                          <Toggle label={item}/>
                      </div>
                  ))
              }
          </div>
        </div>
      </div>
    </div>
  )
}