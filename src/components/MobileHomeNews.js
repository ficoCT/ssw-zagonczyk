import image1 from "../assets/NewsImage1.jpg";
import image2 from "../assets/NewsImage2.jpg";
import image3 from "../assets/NewsImage3.jpg";
import ImageSlider from "./ImageSlider";

function MobileHomeNews() {

    return (
        <section id="mobileHomeNews" className="mobile__news">
            <ImageSlider
                images={[image1, image2, image3]}
                text={[
                    "Żelazne Mundury 2022 - szkolenie survivalowe oraz szkolenie strzelecko-taktyczne.",
                    "Żelazne Mundury 2022 - szkolenie survivalowe oraz szkolenie strzelecko-taktyczne.",
                    "Żelazne Mundury 2022 - szkolenie survivalowe oraz szkolenie strzelecko-taktyczne."
                ]}
            />
        </section>
    );
}

export default MobileHomeNews;