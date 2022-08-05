import IndicatorWrapper from "./IndicatorWrapper";
import Dot from "./Dot";

function Indicator({currentSlide, amountSlides, nextSlide}) {

    console.log('amountSlides', amountSlides);

    return (
        <>
            {/*{Array(amountSlides)*/}
            {/*    .fill(1)*/}
            {/*    .map((_, i) => (*/}
            {/*        <Dot*/}
            {/*            key={i}*/}
            {/*            isActive={currentSlide === i}*/}
            {/*            onClick={() => nextSlide(i)}*/}
            {/*        />*/}
            {/*))}*/}
            <Dot
                key={4}
                isActive={currentSlide === 4}
                onClick={() => nextSlide(4)}
            />
        </>
    );
}

export default Indicator;