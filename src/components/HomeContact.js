import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faAt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import ContactImage from "./ContactImage";

function HomeContact() {

    return (
        <section id="homeContact" className="contact">
            <ContactImage />
            <div className="contact__container">
                <div className="contact__container__text">
                    Skontaktuj się z Nami
                </div>
                <div className="contact__container__footer container">
                    <div className="contact__container__footer__single ">
                        <FontAwesomeIcon
                            icon={faLocationDot}
                            className="contact__container__footer__single__icons"
                        />
                        <p>26-500 Szydłowiec</p>
                        <p>ul. Kamienna 16</p>
                    </div>
                    <div className="contact__container__footer__single">
                        <FontAwesomeIcon
                            icon={faPhone }
                            className="contact__container__footer__single__icons"
                        />
                        <p>+48 512-597-010</p>
                    </div>
                    <div className="contact__container__footer__single">
                        <FontAwesomeIcon
                            icon={faAt }
                            className="contact__container__footer__single__icons"
                        />
                        <p>ssew.zagonczyk@gmail.com</p>
                    </div>
                    <div className="contact__container__footer__single">
                        <a href="https://www.facebook.com/profile.php?id=100079740142149">
                            <FontAwesomeIcon
                                className="contact__container__footer__single__icons"
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

export default HomeContact;