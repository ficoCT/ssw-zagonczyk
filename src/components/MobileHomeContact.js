import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faAt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import ContactImage from "./ContactImage";

function MobileHomeContact() {

    return (
        <section id="mobileHomeContact" className="mobile__contact">
            <ContactImage />
            <div className="mobile__contact__container">
                <div className="mobile__contact__container__text">
                    <p>Skontaktuj się</p>
                    <p>z Nami</p>
                </div>
                <div className="mobile__contact__container__footer">
                    <div className="mobile__contact__container__footer__single ">
                        <FontAwesomeIcon
                            icon={faLocationDot}
                            className="mobile__contact__container__footer__single__icons"
                        />
                        <p>26-500 Szydłowiec</p>
                        <p>ul. Kamienna</p>
                    </div>
                    <div className="mobile__contact__container__footer__single">
                        <FontAwesomeIcon
                            icon={faPhone }
                            className="mobile__contact__container__footer__single__icons"
                        />
                        <p>+48 512-597-010</p>
                    </div>
                    <div className="mobile__contact__container__footer__single">
                        <FontAwesomeIcon
                            icon={faAt }
                            className="mobile__contact__container__footer__single__icons"
                        />
                        <p>ssew.zagonczyk@gmail.com</p>
                    </div>
                    <div className="mobile__contact__container__footer__single">
                        <a href="https://www.facebook.com/profile.php?id=100079740142149">
                            <FontAwesomeIcon
                                className="mobile__contact__container__footer__single__icons"
                                icon={faFacebookF}
                            />
                            <p>Jesteśmy również na Facebooku.</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MobileHomeContact;