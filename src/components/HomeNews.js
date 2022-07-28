import NewsImage from "./NewsImage";
import SeeMore from "./SeeMore";
import ImageSlider from "./ImageSlider";

import image1 from "../assets/NewsImage1.jpg";
import image2 from "../assets/NewsImage2.jpg";
import image3 from "../assets/NewsImage3.jpg";

function HomeNews() {

    return (
        <section id="homeNews" className="news">
            {/*<NewsImage />*/}
            <ImageSlider
                images={[image1, image2, image3]}
                text={["image1", "image2", "image3"]}
            />
            {/*<div className="news__text">*/}
            {/*    W dniach 14-19.06.2022 roku Stowarzyszenie Szkoleniowo-Edukacyjno-Wychowawcze*/}
            {/*    Zagończyk na terenie miasta Szydłowiec oraz sołectwa Barak realizowało zadanie*/}
            {/*    publiczne współfinansowane przez MON pt. „Żelazne Mundury 2022”.*/}
            {/*    <br />*/}
            {/*    Stowarzyszenie Szkoleniowo-Edukacyjno-Wychowawcze Zagończyk jest nowo*/}
            {/*    powstałym Stowarzyszeniem z siedzibą w Szydłowcu. Terenem działania*/}
            {/*    Stowarzyszenia jest obszar Rzeczpospolitej Polskiej ze szczególnym uwzględnieniem*/}
            {/*    województwa mazowieckiego i świętokrzyskiego.*/}
            {/*    <br />*/}
            {/*    Celami głównymi Stowarzyszenia są: krzewienie świadomości narodowej i kulturowej,*/}
            {/*    szkolenie z zakresu szeroko pojętej wojskowości i obronności państwa, działanie*/}
            {/*    na rzecz wychowania obywatelskiego opartego na ideologii państwowotwórczej*/}
            {/*    i dyscyplinie społecznej, działanie na rzecz współpracy z organami władzy publicznej,*/}
            {/*    administracji rządowej i samorządowej, placówkami oświaty i wychowania, a także*/}
            {/*    z organizacjami społecznymi i podmiotami, których cele i działalność nie są sprzeczne*/}
            {/*    z celami Stowarzyszenia.*/}
            {/*    <br />*/}
            {/*    <SeeMore />*/}
            {/*</div>*/}
        </section>
    );
}

export default HomeNews;