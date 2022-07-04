import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faAt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

function HomeContact() {

    return (
        <section id="homeContact" className="contact">
            <div className="contact__container container">
                <div className="contact__container__single">
                    <FontAwesomeIcon
                        icon={faLocationDot}
                        className="contact__container__single__icons"
                    />
                    <p>26-500 Szydłowiec</p>
                    <p>ul. Kamienna</p>
                </div>
                <div className="contact__container__single">
                    <FontAwesomeIcon
                        icon={faPhone }
                        className="contact__container__single__icons"
                    />
                    <p>+48 512-597-010</p>
                </div>
                <div className="contact__container__single">
                    <FontAwesomeIcon
                        icon={faAt }
                        className="contact__container__single__icons"
                    />
                    <p>ssew.zagonczyk@gmail.com</p>
                </div>
                <div className="contact__container__single">
                    <FontAwesomeIcon
                        className="contact__container__single__icons"
                        icon={faFacebookF}
                    />
                    <p>Jesteśmy również na Facebooku.</p>
                </div>
            </div>
        </section>
    );
}

export default HomeContact;