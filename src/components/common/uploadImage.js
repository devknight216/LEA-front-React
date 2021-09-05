import { PlusIcon } from '@heroicons/react/solid'
import { useDispatch, useSelector } from 'react-redux';
import { updatePropertyById } from 'reduxstore/propertyreducer/action';
import { uploadImageToAWS } from 'shared/function';
import { Toast } from './notification';

export default function ImageUploadToAWSComponent() {

  //Image List
  const property = useSelector(state => state.properties.property);

  const dispatch = useDispatch();

  //Upload File
  const handlfileChange = async(e) => {
    if(e.target.files[0]){
      if(property?._id){
        var date = Date.now();
        const propertyPhoto = new File([e.target.files[0]], `property_${property?._id}_${date}.${e.target.files[0].name.split('.').pop()}`);
        const res = await uploadImageToAWS(propertyPhoto, `property/${property?._id}`);
        const reqbody = {
          imageURLs: [ ...property.imageURLs, {filename: propertyPhoto.name, url: res.location} ]
        }
        dispatch(updatePropertyById({id: property._id, body: JSON.stringify(reqbody)}));
      }
      else{
        Toast('', 'To add Image, Please create Property first', 'danger')
      }
    }
  }

  //DeleteImage
  const deleteImage = (filename) => {
    if(property?._id){
      const reqbody = {
        imageURLs:  property.imageURLs.filter(item => item.filename !== filename) 
      }
      dispatch(updatePropertyById({id: property._id, body: JSON.stringify(reqbody)}));
    }
  }

  return (
    <div>
      {
        property?._id && <div>
          {
            property.imageURLs.length?<div>
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Preview
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        FileName
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        URL
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Edit
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {
                      property.imageURLs.map(image => (
                        <tr key={image.filename}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img className="h-10 w-10 object-cover" src={image.url} alt="" />
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{image.filename}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <a href={image.url} className="text-sm text-indigo-700 truncate w-2xl italic">Link</a>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-red-600 cursor-pointer" onClick={() => {deleteImage(image.filename)}}>DELETE</div>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
            :
              <div className="text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    vectorEffect="non-scaling-stroke"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                  />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">No Images</h3>
                <p className="mt-1 text-sm text-gray-500">Add images to your property</p>
              </div>
          }
          <div className="mt-6 text-center">
            <label
              htmlFor="file-upload-aws"
              className="relative cursor-pointer  rounded-md font-medium  focus-within:outline-none "
            >
              <div
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 focus:outline-none"
              >
                <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Add new image
              </div>
              <input id="file-upload-aws" name="file-upload" type="file" className="sr-only" onChange={handlfileChange} />
            </label>
          </div>
        </div>
      }
    </div>
  )
}
