import React from 'react';

function DetailViewCarouselComponent({images}) {
    return (
      <div className="mx-auto container">
        {
          images && 
          <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
              <img
                src={images[0]?.url}
                alt={images[0]?.filename}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden h-72">
                <img
                  src={images[1]?.url}
                  alt={images[1]?.filename}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden h-72">
                <img
                  src={images[2]?.url}
                  alt={images[2]?.filename}
                  className="w-full h-full object-center object-cover"
                />
              </div>
            </div>
            <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
              <img
                src={images[3]?.url}
                alt={images[3]?.filename}
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
        }
      </div>
    )
}

export default DetailViewCarouselComponent
