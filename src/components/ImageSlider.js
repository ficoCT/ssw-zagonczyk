import React, {useState} from "react";

const ImageSlider = ({
                         images = [],
                         ...props
                     }) => {

    const [currentSlide, setCurrentSlide] = useState(2);

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