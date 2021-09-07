import React, { useEffect, useState } from "react";
import ImgsViewer from "react-images-viewer";

export default function ImageViewComponent({images, isOpen, closeViewer}){
    const [currImg, setCurrImg] = useState(0);
    const gotoPrev = () => {
        if(currImg !== 0){
            setCurrImg(currImg - 1);
        }
    }

    const gotoNext = () => {
        if(true){
            setCurrImg(currImg + 1);
        }
    }

    const [imageArray, setImageArray ] = useState([]);
    useEffect(() => {
        const imageArray = [];
        images.forEach(element => (
            setImageArray(prev => [...prev, {src:element.url}])
        ));
    }, [])

    return (
        <ImgsViewer
            imgs={imageArray}
            isOpen={isOpen}
            currImg={currImg}
            onClickPrev={ gotoPrev }
            onClickNext={gotoNext}
            onClose={closeViewer}
        />
    )
}