import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react'
import AvatarEditorComponent from 'components/editprofile/avatarupload';
import { getUserByID, updateUser } from 'reduxstore/userreducer/action';
import { useForm } from 'react-hook-form';
import { saveAvatarUrlToBackend } from 'shared/api';

export default function EditProfilePage() {
    const authToken = useSelector(state => state.auth.token);
    const userId = useSelector(state => state.auth.user.userID);

    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch();
    const history = useHistory()
    useEffect(() => {
        if(!authToken){
                history.push('/signin')
        }
        else{
            dispatch(getUserByID(userId))
        }
    }, []);

    //Got to Home
    const gotoHome = () => {
        history.push('/')
    }

    //React Hook form
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async( data )=>{
        const payload = {
            id: userId,
            body: {
                name: data.name,
                email: data.email,
                password: (data.password == data.confirmpassword)?data.password:""
            }
        }
        dispatch(updateUser(payload));
    }

    return (
        <div className=" max-w-7xl mx-auto p-5">
            <form className="space-y-8 divide-y divide-gray-200" onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-8 divide-y divide-gray-200">
                    <div>
                        <div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900 py-5">Profile</h3>
                            <p className="mt-1 text-sm text-gray-500">
                                This information will be displayed publicly so be careful what you share.
                            </p>
                        </div>
                        <div className="my-2">
                            <AvatarEditorComponent userId = {userId}/>
                        </div>
                    </div>
        
                    <div className="pt-8">
                        <div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
                            <p className="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
                        </div>
                        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="name"
                                        defaultValue={user.name}
                                        {...register("name")}
                                        className="shadow-sm block w-full sm:text-sm rounded-md p-2 border"
                                    />
                                </div>
                            </div>
            
                            <div className="sm:col-span-3">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        defaultValue={user.email}
                                        {...register("email")}
                                        autoComplete="email"
                                        className="shadow-sm block w-full sm:text-sm rounded-md p-2 border"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Phone Number
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="text"
                                        name="phone"
                                        type="phone"
                                        defaultValue={user.phone}
                                        autoComplete="phone"
                                        {...register("phone")}
                                        className="shadow-sm block w-full sm:text-sm rounded-md p-2 border"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="text"
                                        name="password"
                                        type="password"
                                        autoComplete="password"
                                        {...register("password")}
                                        className="shadow-sm block w-full sm:text-sm rounded-md p-2 border"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Confirm Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="text"
                                        name="confirmpassword"
                                        type="confirmpassword"
                                        {...register("confirmpassword")}
                                        autoComplete="confirmpassword"
                                        className="shadow-sm block w-full sm:text-sm rounded-md p-2 border"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div className="pt-5">
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={gotoHome}
                            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
  }