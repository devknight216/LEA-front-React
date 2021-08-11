import React from 'react';
import Slider from "react-slick";
import BedRoom from 'assets/imgs/property/bedroom.jpg';
import { ArrowNarrowRightIcon } from '@heroicons/react/outline';

export default function CarouselPropertyComponent() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed:1500,
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
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
        <div className="container mx-auto w-full">
            <div className="mt-10 text-center">
                <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Properties</h3>
            </div>
            <Slider {...settings}>
                <div>
                   <CardItem item={ person }/>
                </div>
                <div>
                    <CardItem item={ person }/>
                </div>
                <div>
                    <CardItem item={ person }/>
                </div>
                <div>
                   <CardItem item={ person }/>
                </div>
                <div>
                    <CardItem item={ person }/>
                </div>
                <div>
                    <CardItem item={ person }/>
                </div>
            </Slider>
        </div>
    )
}


const CardItem = ({item}) => {
    return<>      
        <div className="space-y-4 mx-4 my-10 bg-white rounded-lg shadow-xl">
            <div className="aspect-w-3 aspect-h-2 p-5">
                <img className="object-cover w-full shadow-lg rounded-lg" src={item.imageUrl} alt="" />
            </div>
            <div className="text-lg leading-6 font-medium space-y-1 px-5">
                <h3>{item.name}</h3>
                <p className="text-indigo-600">Nightly Rate: ${item.cost}</p>
            </div>

            <ul className="flex space-x-5 px-5 pt-3">
                <li>
                    <span className="px-2 py-1 bg-red-400 rounded-lg text-white cursor-pointer hover:bg-red-600">View Details</span>
                </li>
                <li>
                    <span className="px-2 py-1 bg-red-400 rounded-lg text-white cursor-pointer hover:bg-red-600">Flyer</span>
                </li>
                <li>
                    <span className="px-2 py-1 bg-red-400 rounded-lg text-white cursor-pointer hover:bg-red-600 ">Airbnb</span>
                </li>
            </ul>
            <div className="pb-5 flex justify-end px-5">
                <div className="bg-blue-200 rounded-full h-10 w-10 flex items-center justify-center cursor-pointer hover:bg-blue-600">
                    <ArrowNarrowRightIcon className="h-6 text-white"/>
                </div>
            </div>
        </div>               
    </>
}

const person = {
    name: 'Spacious Apartment',
    cost: 100,
    imageUrl: BedRoom,
}