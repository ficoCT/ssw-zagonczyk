import AboutUsImage from "./AboutUsImage";

function HomeAboutUs() {

    return (
        <section id="homeAboutUs" className="aboutUs">
            <AboutUsImage />
            <div className="aboutUs__text">
                Stowarzyszenie nosi nazwę Stowarzyszenie Szkoleniowo – Edukacyjno – Wychowawcze ZAGOŃCZYK,
                zwane dalej Stowarzyszeniem.
                <br />
                <br />
                Stowarzyszenie może używać nazwy skróconej SSEW ZAGOŃCZYK
                <br />
                <br />
                Terenem działania Stowarzyszenia jest obszar Rzeczpospolitej Polskiej ze szczególnym
                uwzględnieniem województwa mazowieckiego i świętokrzyskiego.
                Siedzibą Stowarzyszenia jest Miasto Szydłowiec.
                <br />
                <br />
                Celami głównymi Stowarzyszenia jest:  <br />
                1. Krzewienie świadomości narodowej i kulturowej.  <br />
                2. Szkolenie z zakresu szeroko pojętej wojskowości i obronności państwa.  <br />
                3. Działanie na rzecz wychowania obywatelskiego opartego na ideologii państwowotwórczej i dyscyplinie
                społecznej.  <br />
                4. Działanie na rzecz współpracy z organami władzy publicznej, administracji rządowej i samorządowej,
                placówkami oświaty i wychowania, a także z organizacjami społecznymi i podmiotami, których cele
                i działalność nie są sprzeczne z celami Stowarzyszenia.
            </div>
        </section>
    );
}

export default HomeAboutUs;