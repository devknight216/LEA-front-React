import React, { useState } from "react";
import ImageViewComponent from "./imageview";

function DetailViewCarouselComponent({ images }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mx-auto container">
      {images && (
        <div
          className="mt-6 max-w-7xl mx-auto cursor-pointer"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
            <div className="hidden rounded-lg overflow-hidden lg:block">
              <img src={images[0]?.url} alt={images[0]?.filename} className="w-full h-full object-center object-cover" />
            </div>
            <div className="col-span-2 space-y-6">
              <div className="rounded-lg overflow-hidden px-4 sm:px-0 h-72">
                <img src={images[1]?.url} alt={images[1]?.filename} className="w-full h-full object-center object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden px-4 sm:px-0 h-72 hidden md:block">
                <div className="grid grid-cols-1 md:grid-cols-3 h-full md:gap-x-4 ">
                  <div className="hidden rounded-lg overflow-hidden lg:block">
                    <img src={images[2]?.url} alt={images[2]?.filename} className="w-full h-full object-center object-cover" />
                  </div>
                  <div className="hidden rounded-lg overflow-hidden lg:block">
                    <img src={images[3]?.url} alt={images[3]?.filename} className="w-full h-full object-center object-cover" />
                  </div>
                  <div className="hidden rounded-lg overflow-hidden lg:block">
                    <img src={images[4]?.url} alt={images[5]?.filename} className="w-full h-full object-center object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {images && (
        <ImageViewComponent
          isOpen={isOpen}
          closeViewer={() => {
            setIsOpen(false);
          }}
          images={images}
        />
      )}
    </div>
  );
}

export default DetailViewCarouselComponent;
