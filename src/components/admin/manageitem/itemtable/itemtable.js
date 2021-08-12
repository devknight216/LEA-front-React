import React, { useState } from 'react';
import ConfirmAlertComponent from 'components/modals/confirmalert';
import { useHistory } from 'react-router-dom'
  
export default function Example({getSeleted, properties}) {
  
  //Delet item
  const [confirm, setConfirm] = useState(false);
  const handleDelete = () => {
    setConfirm(true);
  }

  //Selected Item
  const[selected, setSelected] = useState(properties[0])
  const setSelectedProperty = (id) => {
    const property = properties.filter((item)=> item.id === id);
    setSelected(property[0])
    getSeleted(property[0]);
  }
  
  //Goto Create New
  const history = useHistory();
  const gotoCreateNew = () => {
    history.push('/admin/properties/new');
  }

  return (
    <div>
      <div className="flex justify-center mb-5">
        <div className="px-10 py-2 w-max mx-auto bg-yellow-500 text-white text-center hover:bg-yellow-700 rounded-md cursor-pointer" onClick={gotoCreateNew}>New</div>
        <div className="px-10 py-2 w-max mx-auto bg-red-500 text-white text-center hover:bg-red-700 rounded-md cursor-pointer" onClick={handleDelete}>Delete</div>
      </div>
      <ul className="divide-y divide-gray-200">
        {properties.map((property) => (
          <li 
            key={property.id}
            id={property.id} 
            className={(selected.id == property.id )?"py-4 flex bg-gray-300 px-5 cursor-pointer":"py-4 flex hover:bg-gray-300 px-5 cursor-pointer"}
            onClick={() => { setSelectedProperty(property.id) }}
          >
            <img className="h-10 w-10 rounded-full" src={property.images[0]} alt="" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{property.name}</p>
              <p className="text-sm text-gray-500">${property.rate}/night</p>
            </div>
          </li>
        ))}
      </ul>
      <ConfirmAlertComponent 
        isOpen={confirm} 
        message={'Are you sure you want to delete this property?'}
        title={'Delete Property'}
        refreshfunction = { setConfirm }
      />
    </div>
  )
}