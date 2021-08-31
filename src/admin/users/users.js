import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getAllUsers } from 'reduxstore/userreducer/slice';
import DefaultAvatar from 'assets/imgs/avatars/chrisAvatar.png'
import UserEditModalComponent from 'components/admin/users/editmodal';
import ConfirmAlertComponent from 'components/modals/confirmalert';

function UserAdminsPage() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users);
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);


  //Lunch Edit
  const [edit, setEdit] = useState(false);
  const [selected, setSelected] = useState(null);
  const lunchEdit = (user) => {
    setEdit(true);
    setSelected(user);
  }

  //Close Account
  const[close, setClose] = useState(false);
  const lunchClose = (user) => {
    setClose(true);
    setSelected(user);
  }
  const closeAccount = ( id ) => {
    dispatch(deleteUser(id))
  }

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Role
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <span className="h-10 w-10 rounded-full overflow-hidden bg-gray-100">
                            <svg className="h-full w-full rounded-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                          </span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{user._id}</div>
                      {/* <div className="text-sm text-gray-500">{user}</div> */}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {
                        user.verified?
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Active
                          </span>
                        :
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                            Pending
                          </span>
                      }
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-between">
                        <div className="text-indigo-600 hover:text-indigo-900 cursor-pointer" onClick={() => {lunchEdit(user)}}>
                          Edit
                        </div>
                        <div className="text-red-600 hover:text-red-900 cursor-pointer" onClick={() => {lunchClose(user)}}>
                          Close
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <UserEditModalComponent isOpen ={edit} setIsOpen={setEdit} user={selected}/>
      <ConfirmAlertComponent
        isOpen={close} 
        onOk = {() => {closeAccount(selected?._id)}}
        message={`Are you sure you want to delete this User? (${selected?.name})`}
        title={'Close User Account'}
        refreshfunction = { setClose }
      />
    </div>
  )
}

export default UserAdminsPage;
