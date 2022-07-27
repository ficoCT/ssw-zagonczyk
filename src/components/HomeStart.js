import HomeVideo from "./HomeVideo";

function HomeStart() {

    return (
        <section id="homeStart" className="start">
            <HomeVideo />
            <div className="start__text container">
                <p>„Jedynie czyn ma znaczenie. Najlepsze chęci pozostają bez skutku, o ile nie
                pociągają za sobą następstw praktycznych”</p>
                <p>J. Piłsudski</p>
            </div>
        </section>
    );
}

export default HomeStart;