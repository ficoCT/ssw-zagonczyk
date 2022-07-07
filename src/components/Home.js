import HomeStart from "./HomeStart";
import HomeNews from "./HomeNews";
import HomeTraining from "./HomeTraining";
import HomeAboutUs from "./HomeAboutUs";
import HomeContact from "./HomeContact";
import HomeStartNavbar from "./HomeStartNavbar";

function Home() {

    return (
        <>
            <HomeStartNavbar />
            <HomeStart />
            {/*<HomeNews />*/}
            <HomeTraining />
            <HomeAboutUs />
            <HomeContact />
        </>
    );
}

export default Home;