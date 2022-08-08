import HomeVideo from "./HomeVideo";

function MobileHomeStart() {

    return (
        <section id="mobileHomeStart" className="mobile__start">
            <HomeVideo />
            <div className="mobile__start__text mobile__container">
                <p>„Jedynie czyn ma znaczenie. Najlepsze chęci pozostają bez skutku, o ile nie
                    pociągają za sobą następstw praktycznych”</p>
                <p>J. Piłsudski</p>
            </div>
        </section>
    );
}

export default MobileHomeStart;