import MobileHomeStart from "./MobileHomeStart";
import MobileHomeStartNavbar from "./MobileHomeStartNavbar";
import MobileLogoImage from "./MobileLogoImage";
import MobileHomeNews from "./MobileHomeNews";
import MobileHomeTraining from "./MobileHomeTraining";
import MobileHomeAboutUs from "./MobileHomeAboutUs";
import MobileHomeContact from "./MobileHomeContact";
import ButtonNav from "./ButtonNav";
import {useState} from "react";

function MobileHome() {

    const [show, setShow] = useState();

    function showNavbar(s) {
        setShow(s);
    }

    return (
        <>
            <MobileLogoImage />
            <ButtonNav onShowNavbar={showNavbar}/>
            <MobileHomeStartNavbar show={show}/>
            <MobileHomeStart />
            <MobileHomeNews />
            <MobileHomeTraining />
            <MobileHomeAboutUs />
            <MobileHomeContact />
        </>
    );
}

export default MobileHome;