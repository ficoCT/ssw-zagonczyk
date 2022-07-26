import {Link as ScrollLink} from "react-scroll";
import LogoImage from "./LogoImage";

function HomeStartNavbar() {
    return (
                <div className="navbar">
                    <div className="navbar__container container">
                    <LogoImage />
                    <div className="navbar__container__right">
                        <nav className="navbar__container__right__links">
                            <ScrollLink
                                className="navbar__container__right__links__single"
                                to="homeStart"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                Start
                            </ScrollLink>
                            <ScrollLink
                                className="navbar__container__right__links__single"
                                to="homeNews"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                Aktualności
                            </ScrollLink>
                            <ScrollLink
                                className="navbar__container__right__links__single"
                                to="homeTraining"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                Szkolenia
                            </ScrollLink>
                            <ScrollLink
                                className="navbar__container__right__links__single"
                                to="homeAboutUs"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                O Nas
                            </ScrollLink>
                            <ScrollLink
                                className="navbar__container__right__links__single"
                                to="homeContact"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                Kontakt
                            </ScrollLink>
                        </nav>
                        <div className="navbar__container__right__name">
                            <p>
                                Stowarzyszenie Szkoleniowo-Edukacyjno-Wychowawcze
                            </p>
                            <p>
                                ZAGOŃCZYK
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
    );
}

export default HomeStartNavbar;