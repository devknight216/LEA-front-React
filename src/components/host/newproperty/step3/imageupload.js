import { PlusIcon } from '@heroicons/react/solid'
import { hostDeleteImage, hostDeleteRecord, hostReadAllUploadedImage, hostRemoveAllRecord, hostUploadIamge } from 'firebaseStorage/hostspace';
import { useEffect, useState } from 'react';

export default function ImageUploadComponent({property, setProperty}) {

  const handlfileChange = async(e) => {
    if(e.target.files[0]){
      console.log(e.target.files[0]);
      hostUploadIamge(e.target.files[0]);
    }
  }
  
  //Read All Image Records
  const [records, setRecords] = useState(null);
  useEffect(() => {
    hostReadAllUploadedImage(setRecords);
  }, []);

  //DeleteImage
  const deleteImage = async( name, url ) => {
    await hostDeleteRecord(name);
    await hostDeleteImage(url);
    hostReadAllUploadedImage(setRecords);
  }

  //Get ImageData
  useEffect(() => {
    if(records){
      setProperty({
        ...property,
        imageURLs: Object.keys(records).map(key => ( {filename: records[key].name, url: records[key].url} ))
      })
    }
  }, [records])

  //Clear Storage
  useEffect(() => {
    return () => {
      hostRemoveAllRecord();
    }
  }, [])

  return (
    <div className="text-center">
      {
        records?<div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th>Preview</th>
                <th>File Name</th>
                <th>View</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>              
              {
                Object.keys(records).map((key) =>(
                  <tr key={key}>
                    <td className="flex justify-center"> <img src={records[key].url} className="h-12 w-16 object-cover rounded-xl"/> </td>
                    <td> {records[key].name} </td>
                    <td> <a href={records[key].url} target="_blank" className="text-blue-500 italic">View</a> </td>
                    <td> 
                      <span className="text-red-500 hover:text-red-700 cursor-pointer" onClick={() => {deleteImage(records[key].name, records[key].url)}}> 
                        Delete 
                      </span> 
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        :<div>
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
          <p className="mt-1 text-sm text-gray-500">Upload Image to complete</p>
        </div>
      }
      <div className="mt-6">
        <label htmlFor="file-upload">
          <div
            className="cursor-pointer inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-0"
          >
              <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Add Image
          </div>
          <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handlfileChange} />
        </label>
      </div>
    </div>
  )
}