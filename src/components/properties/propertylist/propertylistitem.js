import { useHistory } from "react-router-dom"
import Slider from "react-slick";

export default function PropertyIistItem ({item}){

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
        history.push(`/details/${item?._id}`)
    }
    return<>      
        <div className="space-y-4 z-10 mx-4 my-10 bg-white rounded-lg shadow-xl">
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
            <div className="text-lg leading-6 font-medium space-y-1 px-5 pb-10 cursor-pointer" onClick={gotoDetailView}>
                <h3 className="truncate">{item.propertyName}</h3>
                <p className="text-indigo-600">Nightly Rate: ${item.nightlyRate}</p>
            </div>
        </div>               
    </>
}
