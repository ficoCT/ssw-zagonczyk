import Dot from "./Dot";

function Indicator({currentSlide, amountSlides, nextSlide}) {



    return (
        <div style={{
            display: 'flex',
            marginBottom: '0.5rem',
            marginRight: '2rem'
        }}>
            {Array(amountSlides)
                .fill(1)
                .map((_, i) => (
                    <Dot
                        key={i}
                        isActive={currentSlide === i}
                        onClick={() => nextSlide(i)}
                    />
            ))}
        </div>
    );
}

export default Indicator;