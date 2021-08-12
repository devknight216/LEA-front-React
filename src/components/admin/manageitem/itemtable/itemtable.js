import React, { useState } from 'react';
import ConfirmAlertComponent from 'components/modals/confirmalert';
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
  
export default function ItemsTableComponent( {getSelected} ) {

  //Get Property from Store
  const properties = useSelector( state => state.properties );

  //Get id of Selected Item 
  const [ selected, setSelected ] = useState();
  const handleSelectProperty = ( item ) => {
    setSelected( item );
    getSelected( item );
  }
  
  //Delet item
  const [confirm, setConfirm] = useState(false);
  const handleDelete = () => {
    setConfirm(true);
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
        message={'Are you sure you want to delete this property?'}
        title={'Delete Property'}
        refreshfunction = { setConfirm }
      />
    </div>
  )
}