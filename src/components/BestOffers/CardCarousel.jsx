import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import React from "react";

function CardCarousel({images}) {
  return (
    <Slide
      autoplay={false}
      onChange={function noRefCheck() {}}
      onStartChange={function noRefCheck() {}}
      arrows={false}
      indicators={true}
      
    >
      {images.map(image => 
        <div className="each-slide-effect" key={image}>
        <div
          style={{
            backgroundImage:
              `url(images/${image})`,
          }}
        >
        </div>
      </div>
      )}
    </Slide>
  );
}

export default CardCarousel;
