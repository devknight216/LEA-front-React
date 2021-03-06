import React, { useState } from "react";
import ImgsViewer from "react-images-viewer";

export default function ImageViewComponent({ images, isOpen, closeViewer }) {
  const [currImg, setCurrImg] = useState(0);
  const gotoPrev = () => {
    if (currImg !== 0) {
      setCurrImg(currImg - 1);
    }
  };

  const gotoNext = () => {
    setCurrImg(currImg + 1);
  };

  return (
    <ImgsViewer
      imgs={images?.map((element) => ({ src: element.url }))}
      isOpen={isOpen}
      currImg={currImg}
      onClickPrev={gotoPrev}
      onClickNext={gotoNext}
      onClose={closeViewer}
    />
  );
}
