import React, { useEffect } from "react";
import Slider from "react-slick";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
import { getAllProperties } from "reduxstore/propertyreducer/action";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";



export default function CarouselPropertyComponent() {  

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProperties());
  }, []);
  const properties = useSelector((state) => state.properties.properties);
  return (
    <div className="container mx-auto w-full">
      <div className="mt-10 text-center">
        <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Our Properties
        </h3>
      </div>
      <Slider {...settings}>
        {properties.map((property) => {
          return (
            <div key={property._id}>
              <CardItem item={property} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

const CardItem = ({ item }) => {
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
  //Go to Detail view
  const history = useHistory();
  const gotoDetail = () => {
    history.push(`/details/${item._id}`)
  }
  return (
    <>
      <div className="space-y-4 mx-4 my-10 bg-white rounded-lg shadow-xl">
          <Slider {...settingsChildren}>
            {item.imageURLs.map((img) => {
              return (
                <div className="aspect-w-3 aspect-h-2 p-5 h-72"  key={img._id}> 
                  <img
                    className="object-cover w-full h-full shadow-lg rounded-lg"
                    src={img.url}
                    alt=""
                  />
                </div>        
              );
            })}
          </Slider>
        <div className="text-lg leading-6 font-medium space-y-1 px-5 w-full">
          <h3 className="truncate ">{item.propertyName}</h3>
          <p className="text-indigo-600">Nightly Rate: ${item.nightlyRate}</p>
        </div>
        <ul className="flex space-x-5 px-5 pt-3 p-10">
          <li>
            <span className="px-2 py-1 bg-red-400 rounded-lg text-white cursor-pointer hover:bg-red-600" onClick={gotoDetail}>
              View Details
            </span>
          </li>
          <li>
            <span className="px-2 py-1 bg-red-400 rounded-lg text-white cursor-pointer hover:bg-red-600" onClick={gotoDetail}>
              Airbnb
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

