import React, { useState } from "react";
import { iconList } from "./icons";

function AmenitiesComponent({ data }) {
  const [viewItem, setViewItme] = useState(6);

  const expand = () => {
    if (viewItem == 6) {
      setViewItme(data?.length);
    } else setViewItme(6);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">
        {data?.slice(0, viewItem).map((item, index) => (
          <div key={index} className="flex">
            <img src={iconList[item]} className="w-8 h-8" />
            <span className="text-gray-600 ml-3">{item}</span>
          </div>
        ))}
      </div>
      <div className="text-gray-600 hover:text-gray-800  rounded-lg px-4 mt-3 cursor-pointer w-max" onClick={expand}>
        {viewItem == 6 ? "View More >>" : "View Less <<"}
      </div>
    </div>
  );
}

export default AmenitiesComponent;
