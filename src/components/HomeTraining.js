import TrainingImage from "./TrainingImage";
import ImageSlider from "./ImageSlider";
import image1 from "../assets/TrainingImage1.jpg";
import image2 from "../assets/TrainingImage2.jpg";
import image3 from "../assets/TrainingImage3.jpg";
import image4 from "../assets/TrainingImage4.jpg";
import image5 from "../assets/TrainingImage5.jpg";

function HomeTraining() {

    return (
        <section id="homeTraining" className="training">
            <TrainingImage />
            <ImageSlider
                images={[image1, image2, image3, image4, image5]}
                text={[
                    "Szkolenia medyczne",
                    "Szkolenia strzeleckie",
                    "Szkolenia survivalowe",
                    "Pakiety szkoleń dla uczniów kandydujących do klas mundurowych",
                    "Szkolenia dla nauczycieli klas mundurowych"
                ]}
            />
        </section>
    );
}

export default HomeTraining;