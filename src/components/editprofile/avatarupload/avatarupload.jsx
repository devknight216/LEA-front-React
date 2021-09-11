import React, { useState } from "react";
import { useSelector } from "react-redux";
import { saveAvatarUrlToBackend } from "shared/api";
import { uploadImageToAWS } from "shared/function";

const AvatarEditorComponent = ({ userId }) => {
  //Upload Image to AWS S3 Buchet
  const authUser = useSelector((state) => state.auth.user);
  const [avatarURL, setAvatarURL] = useState(authUser?.avatarURL);
  const authToken = useSelector((state) => state.auth.token);

  const handlfileChange = async (e) => {
    if (e.target.files[0]) {
      const avatar = new File([e.target.files[0]], `avatar_${userId}.${e.target.files[0].name.split(".").pop()}`);
      const res = await uploadImageToAWS(avatar, "avatar");
      setAvatarURL(res.location);
      saveAvatarUrlToBackend(userId, res.location, authToken);
    }
  };
  return (
    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
      <div className="sm:col-span-6">
        <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
          Photo
        </label>
        <div className="mt-1 flex items-center">
          {avatarURL ? (
            <div>
              <img src={avatarURL} className="h-16 w-16 object-cover rounded-full" />
            </div>
          ) : (
            <span className="h-16 w-16 rounded-full overflow-hidden bg-gray-100">
              <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
          )}
          <div>
            <label htmlFor="file-upload" className="relative cursor-pointer  rounded-md font-medium">
              <div
                type="button"
                className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Change
              </div>
              <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handlfileChange} />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarEditorComponent;
