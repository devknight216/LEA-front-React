/* This example requires Tailwind CSS v2.0+ */
import { useEffect, useState } from "react";
import firebase from 'firebaseStorage/configure';
import 'firebase/database'
import 'firebase/storage'
import { deleteImage, removeStore } from "firebaseStorage/functions";

export default function ImageListComponent({getImageData}) {
    const[data, setData] = useState(null);
    useEffect(()=>{
      firebase.database().ref('/property/imageRecord').on('value', (snapshot) =>{
        if(snapshot.exists()){
          setData(snapshot.val());
          getImageData(snapshot.val());
        }
        else{
          setData(null)
        }
      })
    }, []);

    //Delete Item
    const deleteItem = (data) => {
      firebase.database().ref(`/property/imageRecord/${data.name}`).remove().then(
        ()=>{
          deleteImage(data.url);
          firebase.database().ref('/property/imageRecord').on('value', (snapshot) =>{
            if(snapshot.exists()){
              setData(snapshot.val());
              getImageData(snapshot.val());
            }
            else{
              setData(null)
            }
          })
        }
      ).catch((e) => { console.log(e); })
    }

    return (
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/2"
                    >
                      URL
                    </th>
                    <th scope="col" className="relative px-6 py-3 w-1/4 ">
                      <span className="sr-only"></span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data &&
                    Object.keys(data).map(key => (
                      <tr key={key} className='bg-white'> 
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 w-1/4">{data[key].name}</td>                    
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-500 truncate w-1/2">
                          <a target="_blank" href={data[key].url}>View Image</a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium w-1/4">
                          <a href="#" className="text-indigo-600 hover:text-indigo-900" onClick={() => {deleteItem(data[key])}}>
                            Delete
                          </a>
                        </td>
                      </tr>                     
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }