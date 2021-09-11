import React, { useState } from "react";
import ConfirmAlertComponent from "components/modals/confirmalert";
import { useHistory } from "react-router-dom";
import { deletePropertyById } from "reduxstore/propertyreducer/slice";
import { useDispatch, useSelector } from "react-redux";
import { TrashIcon, PencilAltIcon, PlusIcon } from "@heroicons/react/outline";
import { SpinnerCircularFixed } from "spinners-react";

export default function ItemsTableComponent({ getSelected }) {
  //Get Property from Store
  const properties = useSelector((state) => state.properties);
  const status = useSelector((state) => state.properties.status);

  //Get id of Selected Item
  const [selected, setSelected] = useState(null);
  const handleSelectProperty = (item) => {
    setSelected(item);
    getSelected(item);
  };

  //Delet item
  const [confirm, setConfirm] = useState(false);
  const handleDelete = () => {
    selected && setConfirm(true);
  };

  //Call DeleteAPI
  const dispatch = useDispatch();
  const DeleteProperty = () => {
    if (selected) {
      dispatch(deletePropertyById(selected?._id));
    }
  };

  //Goto Create New
  const history = useHistory();
  const userinfo = useSelector((state) => state.user.user);
  const gotoCreateNew = async () => {
    if (!userinfo?.stripe_account) {
      try {
        // await stripeAccount(token);
        history.push("/admin/properties/new");
      } catch (error) {
        console.log(error);
      }
    }
  };
  const gotEdit = (id) => {
    history.push(`/admin/properties/edit/${id}`);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-4 mb-5">
        <div
          type="button"
          onClick={gotoCreateNew}
          className="cursor-pointer inline-flex object-contain items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 focus:outline-none"
        >
          <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          Add new Property
        </div>
      </div>
      {status !== 1 ? (
        <div className="flex justify-center w-full py-5">
          <SpinnerCircularFixed
            size={50}
            thickness={100}
            speed={100}
            color="#000000AA"
            secondaryColor="#FFFFFF"
          />
        </div>
      ) : (
        <ul className="divide-y divide-gray-200">
          {properties.properties.map((property) => (
            <li
              key={property["_id"]}
              id={property["_id"]}
              onClick={() => {
                handleSelectProperty(property);
              }}
              className={
                selected?._id == property["_id"]
                  ? "py-4 flex bg-gray-200 px-5 cursor-pointer justify-between"
                  : "py-4 flex hover:bg-gray-200 px-5 cursor-pointer justify-between"
              }
            >
              <div className="flex space-x-3">
                <div>
                  <img
                    src={property?.imageURLs[0]?.url}
                    className="w-14 h-14 rounded-md"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {" "}
                    {property.propertyName}
                  </p>
                  <p className="text-sm text-gray-500">
                    ${property.nightlyRate}/night
                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-blue-600 bg-blue-200 uppercase mx-1">
                      {property?.hostInfo.name}
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <PencilAltIcon
                  className="text-gray-400 h-6 w-6 hover:text-gray-800"
                  onClick={() => {
                    gotEdit(property._id);
                  }}
                />
                <TrashIcon
                  className="text-red-400 h-6 w-6 hover:text-red-600"
                  onClick={handleDelete}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
      <ConfirmAlertComponent
        isOpen={confirm}
        onOk={DeleteProperty}
        message={`Are you sure you want to delete this property? (${selected?.propertyName})`}
        title={"Delete Property"}
        refreshfunction={setConfirm}
      />
    </div>
  );
}
