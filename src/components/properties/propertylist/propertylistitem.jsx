import React from "react";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";

export default function PropertyIistItem({ item }) {
  const settingsChildren = {
    dots: false,
    infinite: true,
    fade: true,
    pauseOnHover: false,
    swipeToSlide: false,
    swipe: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    arrows: true,
    autoplay: false,
  };

  const history = useHistory();
  const gotoDetailView = () => {
    history.push(`/details/${item?._id}`);
  };
  return (
    <>
      <div className="space-y-4 z-10 mx-4 my-10 bg-white rounded-lg shadow-xl">
        <Slider {...settingsChildren}>
          {item.imageURLs.map((img) => {
            return (
              <div className="aspect-w-3 aspect-h-2 p-5 h-72" key={img._id}>
                <img className="object-cover w-full h-full shadow-lg rounded-lg" src={img.url} alt="" />
              </div>
            );
          })}
        </Slider>
        <div className="text-lg leading-6 font-medium space-y-1 px-3 pb-5 cursor-pointer" onClick={gotoDetailView}>
          <h3 className="truncate text-gray-900 text-sm font-medium">{item.propertyName}</h3>
          <div className="flex flex-wrap space-x-4">
            <p className="text-indigo-500 text-sm">Nightly Rate: ${item.nightlyRate}</p>
            <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-500 rounded">
              {item.propertyType}
            </span>
            <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-yellow-100 bg-yellow-500 rounded">
              {item.propertySpaceFeature}
            </span>
          </div>
          <div className="flex space-x-3 flex-wrap">
            <p className="text-indigo-500 text-sm">Guests: {item.guestNum}</p>
            <p className="text-indigo-500 text-sm">Bedrooms: {item.bedroomNum}</p>
            <p className="text-indigo-500 text-sm">Beds: {item.bedsNum}</p>
            <p className="text-indigo-500 text-sm">baths: {item.fullBathNum | 0}</p>
          </div>
        </div>
      </div>
    </>
  );
}
