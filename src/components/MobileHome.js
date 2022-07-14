import MobileHomeStart from "./MobileHomeStart";
import MobileHomeStartNavbar from "./MobileHomeStartNavbar";
import MobileLogoImage from "./MobileLogoImage";
import MobileHomeNews from "./MobileHomeNews";
import MobileHomeTraining from "./MobileHomeTraining";
import MobileHomeAboutUs from "./MobileHomeAboutUs";
import MobileHomeContact from "./MobileHomeContact";

function MobileHome() {

    return (
        <>
            <MobileLogoImage />
            <MobileHomeStartNavbar />
            <MobileHomeStart />
            {/*<MobileHomeNews />*/}
            {/*<MobileHomeTraining />*/}
            {/*<MobileHomeAboutUs />*/}
            {/*<MobileHomeContact />*/}
        </>
    );
}

export default MobileHome;