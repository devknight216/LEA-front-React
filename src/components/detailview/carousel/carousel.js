import React from 'react';
import Slider from 'react-slick';
import BedRoom from 'assets/imgs/property/bedroom.jpg';

function DetailViewCarouselComponent() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        lazyLoad: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed:1500,
        pauseOnHover: true,
        dots: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };
    return (
        <div className="mx-auto container">
            <Slider {...settings}>
                <div className="px-2">
                    <img src={BedRoom} className="w-full"/>
                </div>
                <div className="px-2">
                    <img src={BedRoom} className="w-full"/>
                </div>
                <div className="px-2">
                    <img src={BedRoom} className="w-full"/>
                </div>
                <div className="px-2">
                    <img src={BedRoom} className="w-full"/>
                </div>
                <div className="px-2">
                    <img src={BedRoom} className="w-full"/>
                </div>
                <div className="px-2">
                    <img src={BedRoom} className="w-full"/>
                </div>
            </Slider>
        </div>
    )
}

export default DetailViewCarouselComponent
