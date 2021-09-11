import React from "react";
import { InputBox } from "components/basicui/basicui";

function EditAccountSecuritySettingComponent() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="py-5">
          <p className="border-b">Password Setting</p>
          <div className="border-b py-5 px-5">
            <div>
              <InputBox label="Password" type="password" />
            </div>
            <div>
              <InputBox label="Confirm Password" type="password" />
            </div>
            <div className="py-3 flex justify-end px-5">
              <p className="text-indigo-500 cursor-pointer border rounded-md px-4 hover:bg-gray-200">Save</p>
            </div>
          </div>
          <p className="py-10">Account</p>
          <div className="border-b py-2 px-5">
            <p>Deactivate your account</p>
            <div className="py-5 flex justify-end px-5">
              <p className="text-red-500 cursor-pointer border rounded-md px-4 hover:bg-gray-200">Deactive</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditAccountSecuritySettingComponent;
