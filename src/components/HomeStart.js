import HomeVideo from "./HomeVideo";

function HomeStart() {

    return (
        <section id="homeStart" className="start">
            <HomeVideo />
            <div className="start__text">
                <p>
                    Stowarzyszenie
                </p>
                <p>
                    Szkoleniowo-Edukacyjno-Wychowawcze
                </p>
                <p style={{ color: 'deepskyblue'}}>
                    Zagończyk
                </p>
            </div>
        </section>
    );
}

export default HomeStart;