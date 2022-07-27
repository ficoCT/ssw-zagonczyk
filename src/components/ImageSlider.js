import React, {useEffect, useState} from "react";

const ImageSlider = ({
                         images = [],
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
            overflow: 'visible'
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
                    right: index === currentSlide ? `0%` : `${index * 100}%`,
                }}
                />
            ))}
        </div>
    );
};

export default ImageSlider;