import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import AvatarEditorComponent from '../avatarupload';
import { Disclosure } from '@headlessui/react'
import { InputBox } from 'components/basicui/basicui';

function EditAccountPersonalInfoComponent() {
    const user = useSelector(state => state.auth.user);
    console.log(user);

    //layout
    const layout = [
        { label: "Legal Name", value: user?.name, onEdit: () => {}, editChild: InputBox },
        { label: "Email Address", value: user?.email, onEdit: () => {}, editChild: InputBox },
        { label: "Phone Number", value: user?.phone, onEdit: () => {}, editChild: InputBox },
        { label: "Date of Birth", value: user?.birthday, onEdit: () => {}, editChild: InputBox },
        { label: "Address", value: user?.birthday, onEdit: () => {}, editChild: EditAddress },
    ]

    return (
        <div className="pb-10">
            <div className="py-5">
                <AvatarEditorComponent userId={user?.userID}/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8">
                <div>
                    <div>
                    {
                        layout.map((item, index) => (
                            <Disclosure key={index} className="border-b">
                                {({ open }) => (
                                    <div className="border-b">
                                        <Disclosure.Button className="flex justify-between w-full py-3 items-center">
                                            <div className="text-left">
                                                <p className="text-sm font-medium text-gray-700">{item.label}</p>
                                                {
                                                    item.value ? <p className="py-1">{item.value}</p> : <p className="py-1">No Added yet</p>
                                                }
                                            </div>
                                            <div>
                                                {
                                                    item.value ? <p className="text-indigo-500 cursor-pointer">Edit</p> : <p className="text-indigo-500 cursor-pointer">Add</p>
                                                }
                                            </div>
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-5 py-3">
                                            <item.editChild label={item.label} type={"text"}/>
                                            <div className="py-3 flex justify-end px-5">
                                                <p className="text-indigo-500 cursor-pointer border rounded-md px-2">Save</p>
                                            </div>
                                        </Disclosure.Panel>
                                    </div>
                                )}
                            </Disclosure>
                        ))
                    }
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}


const EditAddress = () => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6">
                <div>
                    <InputBox label="Country/Region"/>
                </div>
                <div>
                    <InputBox label="Street"/>
                </div>
                <div className="col-span-2">
                    <InputBox label="Apt, suite"/>
                </div>
                <div className="col-span-2">
                    <InputBox label="City"/>
                </div>
                <div className="col-span-1">
                    <InputBox label="State"/>
                </div>
                <div className="col-span-1">
                    <InputBox label="Zip"/>
                </div>
            </div>
        </div>
    )
}

export default EditAccountPersonalInfoComponent
