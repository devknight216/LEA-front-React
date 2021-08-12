import React, { useState, useEffect } from 'react';
import ConfirmAlertComponent from 'components/modals/confirmalert';
import { useHistory } from 'react-router-dom'
import { deletePropertyById, getAllProperties } from 'reduxstore/propertyreducer/slice';
import { useDispatch, useSelector } from 'react-redux';
  
export default function ItemsTableComponent( {getSelected} ) {
  
  //Get Property from Store
  const properties = useSelector( state => state.properties );

  //Get id of Selected Item 
  const [ selected, setSelected ] = useState(null);
  const handleSelectProperty = ( item ) => {
    setSelected( item );
    getSelected( item );
  }
  
  //Delet item
  const [confirm, setConfirm] = useState(false);
  const handleDelete = () => {
    selected && setConfirm(true);
  }

  //Call DeleteAPI
  const dispatch = useDispatch();
  const DeleteProperty = () => {
    if(selected){
      dispatch(deletePropertyById(selected?._id));
    }
  }
  
  //Goto Create New
  const history = useHistory();
  const gotoCreateNew = () => {
    history.push('/admin/properties/new');
  }

  return (
    <div>
      <div className="grid grid-cols-2 mb-5">
        <div className="px-10 py-2 w-max mx-auto bg-yellow-500 text-white text-center hover:bg-yellow-700 rounded-md cursor-pointer" onClick={gotoCreateNew}>New</div>
        {
          selected && <button className="px-10 py-2 w-max mx-auto bg-red-500 text-white text-center hover:bg-red-700 rounded-md cursor-pointer" onClick={handleDelete}>Delete</button>
        }
      </div>
      <ul className="divide-y divide-gray-200">
        {
          properties.properties.map( property => (
            <li 
              key={property['_id']}
              id={property['_id']}
              onClick={ () => { handleSelectProperty(property) } }
              className={ ( selected?._id == property['_id'] )?"py-4 flex bg-gray-300 px-5 cursor-pointer":"py-4 flex hover:bg-gray-300 px-5 cursor-pointer" }
            >
              <div>
                <p className="text-sm font-medium text-gray-900"> { property.propertyName }</p>
                <p className="text-sm text-gray-500">${property.nightlyRate}/night</p>
              </div>
            </li>
          ))
        }
      </ul>
      <ConfirmAlertComponent 
        isOpen={confirm} 
        onOk = {DeleteProperty}
        message={`Are you sure you want to delete this property? (${selected?.propertyName})`}
        title={'Delete Property'}
        refreshfunction = { setConfirm }
      />
    </div>
  )
}