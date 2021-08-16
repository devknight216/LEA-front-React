import React from 'react';
import Slider from 'react-slick';
import { useHistory } from 'react-router';
import BedroomImg from 'assets/imgs/property/bedroom.jpg';
import KitchenImg from 'assets/imgs/property/kitchen.jpg';

function DetailViewComponent( {selected} ) {
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
        history.push(`/admin/properties/edit/${selected._id}`);
    }
    const gotoDetailPropertyPage = () => {
        const win = window.open(`/details/${selected._id}`, "_blank");
        win.focus();
    }

    return (
        <div className="shadow-lg rounded-xl p-2">
            <div className="space-y-4">
                <div className="aspect-w-3 aspect-h-2">
                    <Slider {...settings}>
                        {
                            selected?.imageURLs?.map((item, index )=> (
                                <div key={index}>
                                    <img className="object-cover shadow-lg w-full rounded-lg" src={item.url} alt="" />
                                </div>
                            ))
                        }
                    </Slider>
                </div>

                <div className="space-y-2 px-3">
                    <div className="leading-6 space-y-1 text-sm">
                        <p>Nightly Rate: <span className="text-indigo-600 font-medium text-lg">${selected?.nightlyRate}</span></p>
                        <p>Property Name:</p> 
                        <span className="text-indigo-600 font-semibold text-lg">{selected?.propertyName}</span> 
                        <p>Item Features:</p>
                        <div className="flex justify-start flex-wrap">
                            <div className="px-2 m-1 bg-red-600 rounded-md text-white">{selected?.propertyType}</div>
                            <div className="px-2 m-1 bg-blue-600 rounded-md text-white">{selected?.propertySpaceFeature}</div>    
                        </div>
                        <p>Description:</p>
                        <div className="border-2 rounded-lg p-3">
                            <span className="text-gray-800 font-semibold ">{selected?.propertyDescription}</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center flex-wrap">
                    <div className="px-10 py-2 w-max mx-auto bg-yellow-500 text-white text-center hover:bg-yellow-700 rounded-md cursor-pointer" onClick={gotoDetailPropertyPage}>Detail View</div>
                    <div className="px-10 py-2 w-max mx-auto bg-green-500 text-white text-center hover:bg-green-700 rounded-md cursor-pointer" onClick={gotoEditPropertyPage} >Edit Fields</div>
                </div>
            </div>
        </div>
    )
}

export default DetailViewComponent
