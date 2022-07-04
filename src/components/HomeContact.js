import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faAt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

function HomeContact() {

    return (
        <section id="contact" className="contact">
            <div className="contact__container container">
                <div>
                    <FontAwesomeIcon
                        icon={faLocationDot}
                        className="contact__container__icons"
                    />
                </div>
                <div>
                    <FontAwesomeIcon
                        icon={faPhone }
                        className="contact__container__icons"
                    />
                </div>
                <div>
                    <FontAwesomeIcon
                        icon={faAt }
                        className="contact__container__icons"
                    />
                </div>
                <div>
                    <FontAwesomeIcon
                        className="contact__container__icons"
                        icon={faFacebookF}
                    />
                </div>
            </div>
        </section>
    );
}

export default HomeContact;