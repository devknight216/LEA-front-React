import React from 'react';
import { ClipboardCopyIcon } from '@heroicons/react/outline';
import Slider from 'react-slick';
import { useHistory } from 'react-router';
import BedroomImg from 'assets/imgs/property/bedroom.jpg';
import KitchenImg from 'assets/imgs/property/kitchen.jpg';

function DetailViewComponent({selected}) {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        arrows: false,
        autoplaySpeed: 1500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    // Redirect to Subpages
    const history = useHistory();
    const gotoEditPropertyPage = () => {
        history.push(`/admin/properties/edit/${selected.id}`);
    }
    const gotoDetailPropertyPage = () => {
        history.push(`/admin/properties/detail/${selected.id}`);
    }

    return (
        <div className="shadow-lg rounded-xl p-2">
            <div className="space-y-4">
                <div className="aspect-w-3 aspect-h-2">
                    {/* <img className="object-cover shadow-lg rounded-lg" src={person.imageUrl} alt="" /> */}
                    <Slider {...settings}>
                        <div>
                            <img className="object-cover shadow-lg w-full rounded-lg" src={BedroomImg} alt="" />
                        </div>
                        <div>
                            <img className="object-cover shadow-lg w-full rounded-lg" src={KitchenImg} alt="" />
                        </div>
                    </Slider>
                </div>

                <div className="space-y-2 px-3">
                    <div className="leading-6 space-y-1 text-sm">
                        <p>Nightly Rate: <span className="text-indigo-600 font-medium text-lg">${selected?.rate}</span></p>
                        <p>Property Name:</p> 
                        <span className="text-indigo-600 font-semibold text-lg">{selected?.name}</span> 
                        <div className="flex justify-start">
                            <p>Airbnb Link:</p>
                            <div 
                                className="ml-3 bg-red-500 hover:bg-red-600 rounded-sm px-1 cursor-pointer has-tooltip"
                                onClick={() => {navigator.clipboard.writeText(selected.airbnb)}}
                            >
                                <ClipboardCopyIcon className="text-white h-5"/>
                                <span className='tooltip bg-gray-900 text-white rounded-md px-1'>Copy Link</span>
                            </div>

                        </div>
                        <a href={selected.airbnb} target="_blank"><p className="truncate text-blue-600 underline">{selected.airbnb}</p></a>
                        <p>Item property:</p>
                        <div className="flex justify-start flex-wrap">
                            <div className="px-2 m-1 bg-red-600 rounded-md text-white">Apartment</div>
                            <div className="px-2 m-1 bg-blue-600 rounded-md text-white">Condominium (Condo)</div>
                            <div className="px-2 m-1 bg-yellow-600 rounded-md text-white">An entire place</div>
                            <div className="px-2 m-1 bg-gray-600 rounded-md text-white">Family-Friendly</div>
                            <div className="px-2 m-1 bg-green-600 rounded-md text-white">Weapons</div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center flex-wrap">
                    <div className="px-10 py-2 w-max mx-auto bg-yellow-500 text-white text-center hover:bg-yellow-700 rounded-md cursor-pointer" onClick={gotoDetailPropertyPage}>Detail</div>
                    <div className="px-10 py-2 w-max mx-auto bg-green-500 text-white text-center hover:bg-green-700 rounded-md cursor-pointer" onClick={gotoEditPropertyPage} >Edit Fields</div>
                </div>
            </div>
        </div>
    )
}

export default DetailViewComponent
