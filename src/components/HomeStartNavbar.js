import {Link as ScrollLink} from "react-scroll";
import LogoImage from "./LogoImage";

function HomeStartNavbar() {
    return (
            <nav className="navbar">
                <div className="navbar__container container">
                    <LogoImage />
                    <ScrollLink
                        className="navbar__container__single"
                        to="start"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        Start
                    </ScrollLink>
                    <ScrollLink
                        className="navbar__container__single"
                        to="news"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        Aktualności
                    </ScrollLink>
                    <ScrollLink
                        className="navbar__container__single"
                        to="training"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        Szkolenia
                    </ScrollLink>
                    <ScrollLink
                        className="navbar__container__single"
                        to="aboutUs"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        O Nas
                    </ScrollLink>
                    <ScrollLink
                        className="navbar__container__single"
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        Kontakt
                    </ScrollLink>
                </div>
            </nav>
    );
}

export default HomeStartNavbar;