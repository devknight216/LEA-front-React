import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AvatarEditorComponent from "../avatarupload";
import { Disclosure } from "@headlessui/react";
import { InputBox } from "components/basicui/basicui";
import { updateUser } from "reduxstore/userreducer/slice";

function EditAccountPersonalInfoComponent() {
  const user = useSelector((state) => state.auth.user);

  //layout
  const layout = [
    {
      label: "Legal Name",
      variable: "name",
      value: user?.name,
      onEdit: () => {
        updateUserData("name", userInfo.name);
      },
      editChild: InputBox,
    },
    {
      label: "Email Address",
      variable: "email",
      value: user?.email,
      onEdit: () => {
        updateUserData("email", userInfo.email);
      },
      editChild: InputBox,
    },
    {
      label: "Phone Number",
      variable: "phone",
      value: user?.phone,
      onEdit: () => {
        updateUserData("phone", userInfo.phone);
      },
      editChild: InputBox,
    },
    {
      label: "Address",
      variable: "address",
      value: user?.address,
      onEdit: () => {
        updateUserData("address", userInfo.address);
      },
      editChild: EditAddress,
    },
  ];

  //const update user profile
  const [userInfo, setUserInfo] = useState({
    name: user?.name,
    email: user?.email,
    phone: user?.phone,
    address: {
      country: user?.address?.country,
      street: user?.address?.street,
      apt: user?.address?.address,
      city: user?.address?.state,
      state: user?.address?.state,
      zip: user?.address?.zip,
    },
  });
  const getValue = (e, field) => {
    setUserInfo({
      ...userInfo,
      [field]: e.target.value,
    });
  };

  const dispatch = useDispatch();
  const updateUserData = (field, value) => {
    if (user?.userID) {
      const payload = {
        id: user?.userID,
        body: {
          [field]: value,
        },
      };
      dispatch(updateUser(payload));
    }
  };

  return (
    <div className="pb-10">
      <div className="py-5">
        <AvatarEditorComponent userId={user?.userID} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8">
        <div>
          <div>
            {layout.map((item, index) => (
              <Disclosure key={index} className="border-b">
                {({ open }) => (
                  <div className="border-b">
                    <Disclosure.Button className="flex justify-between w-full py-3 items-center">
                      <div className="text-left">
                        <p className="text-sm font-medium text-gray-700">{item.label}</p>
                        {item.value ? <p className="py-1">{item.value}</p> : <p className="py-1">No Added yet</p>}
                      </div>
                      <div>
                        {item.value ? (
                          <p className="text-indigo-500 cursor-pointer">Edit</p>
                        ) : (
                          <p className="text-indigo-500 cursor-pointer">Add</p>
                        )}
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-5 py-3">
                      <item.editChild
                        label={item.label}
                        type={"text"}
                        onchange={(e) => {
                          getValue(e, item.variable);
                        }}
                        value={userInfo[item.variable]}
                      />
                      <div className="py-3 flex justify-end px-5">
                        <p className="text-indigo-500 cursor-pointer border rounded-md px-2" onClick={item.onEdit}>
                          Save
                        </p>
                      </div>
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

const EditAddress = ({ onchange, value }) => {
  const [addressInfo, setAddressInfo] = useState({
    apt: value.apt,
    city: value.city,
    country: value.country,
    state: value.state,
    street: value.street,
    zip: value.zip,
  });

  const getValue = (e, field) => {
    setAddressInfo({
      ...addressInfo,
      [field]: e.target.value,
    });
  };

  useEffect(() => {
    const temp = {
      target: {
        value: addressInfo,
      },
    };
    onchange(temp);
  }, [addressInfo]);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6">
        <div>
          <InputBox
            label="Country/Region"
            value={value.country}
            onchange={(e) => {
              getValue(e, "country");
            }}
          />
        </div>
        <div>
          <InputBox
            label="Street"
            value={value.street}
            onchange={(e) => {
              getValue(e, "street");
            }}
          />
        </div>
        <div className="col-span-2">
          <InputBox
            label="Apt, suite"
            value={value.apt}
            onchange={(e) => {
              getValue(e, "apt");
            }}
          />
        </div>
        <div className="col-span-2">
          <InputBox
            label="City"
            value={value.city}
            onchange={(e) => {
              getValue(e, "city");
            }}
          />
        </div>
        <div className="col-span-1">
          <InputBox
            label="State"
            value={value.state}
            onchange={(e) => {
              getValue(e, "state");
            }}
          />
        </div>
        <div className="col-span-1">
          <InputBox
            label="Zip"
            value={value.zip}
            onchange={(e) => {
              getValue(e, "zip");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default EditAccountPersonalInfoComponent;
