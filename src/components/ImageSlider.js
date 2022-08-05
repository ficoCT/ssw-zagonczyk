import React, {useEffect, useState} from "react";
import Indicator from "./Indicator";

const ImageSlider = ({
                         images = [],
                         text = [],
                         autoPlay = true,
                         autoPlayTime = 3000,
                         ...props
                     }) => {

    const [currentSlide, setCurrentSlide] = useState(0);

    function nextSlide(slideIndex = currentSlide + 1) {
        const newSlideIndex = slideIndex >= images.length ? 0 : slideIndex;

        setCurrentSlide(newSlideIndex);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            nextSlide();
        }, autoPlayTime);

        return () => clearTimeout(timer);
    }, [currentSlide]);

    return (
        <div style={{
            height: '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end',
            alignContent: 'end',
            alignItems: 'end'
        }}>
            {images.map((imageUrl, index) => (
                <img
                key={index}
                src={images[index]}
                style={{
                    width: '100vw',
                    height: '100%',
                    position: 'absolute',
                    zIndex: '-1',
                    objectFit: 'cover',
                    right: index === currentSlide ? `0%` : `${index * 100}%`
                }}
                />
            ))}
                <Indicator
                    currentSlide={currentSlide}
                    amountSlides={images.length}
                    nextSlide={nextSlide}
                />
                <div style={{
                    backgroundColor: 'rgba(0,0,0,.4)',
                    width: '100%',
                    padding: '0.5rem 0',
                    textAlign: 'center',
                    fontSize: '1.5rem',
                }}>
                    <p style={{

                    }}>
                        {text[currentSlide]}
                    </p>
                </div>
        </div>
    );
};

export default ImageSlider;