import React from "react";
import Slider from "react-slick";
import { iconList } from "components/detailview/amenities/icons";
export default function StatusComponent() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    lazyLoad: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-yellow-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">Enjoy and make the most of your stay</h2>
          <p className="mt-3 text-2xl text-white sm:mt-4">
            Our properties come with various amenities you can enjoy. Envision yourself taking pleasure in these facilities.
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {Object.keys(iconList).map((key) => (
              <div key={key} className="py-2 mt-10 flex justify-center">
                <img src={iconList[key]} className="h-12 w-12 mx-auto" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
