import { PlusIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { uploadImageToAWS } from 'shared/function';
import { Toast } from './notification';

export default function ImageUploadToAWSComponent({propertyID, imageList}) {

  //Image List
  const [images, setImages] = useState(imageList);

  //Upload File
  const handlfileChange = async(e) => {
    if(e.target.files[0]){
      if(propertyID){
        var date = Date.now();
        const propertyPhoto = new File([e.target.files[0]], `property_${propertyID}_${date}.${e.target.files[0].name.split('.').pop()}`);
        const res = await uploadImageToAWS(propertyPhoto, `property/${propertyID}`);
        setImages([
          images,
          {
            filename: propertyPhoto.name,
            url: res.location
          }
        ])
      }
      else{
        Toast('', 'To add Image, Please create Property first', 'danger')
      }
    }
  }

  return (
    <div className="text-center">
      {
        images.length?<div>
            {
              images.map((image)=>(
                <p key={image.filename}>{image.url}</p>
              ))
            }
          </div>
        :
          <div>
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
      <div className="mt-6">
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
  )
}
