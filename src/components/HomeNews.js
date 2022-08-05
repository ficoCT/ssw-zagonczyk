import ImageSlider from "./ImageSlider";

import image1 from "../assets/NewsImage1.jpg";
import image2 from "../assets/NewsImage2.jpg";
import image3 from "../assets/NewsImage3.jpg";

function HomeNews() {

    return (
        <section id="homeNews" className="news">
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

export default HomeNews;