import AboutUsImage from "./AboutUsImage";

function HomeAboutUs() {

    return (
        <section id="homeAboutUs" className="aboutUs">
            <AboutUsImage />
            <div className="aboutUs__text">
                Działanie na rzecz wychowania obywatelskiego opartego na ideologii państwowotwórczej i dyscyplinie
                społecznej. Działanie na rzecz współpracy z organami władzy publicznej, administracji rządowej
                i samorządowej, placówkami oświaty i wychowania, a także z organizacjami społecznymi i podmiotami,
                których cele i działalność nie są sprzeczne z celami Stowarzyszenia. Pozostałymi celami jest
                kształtowanie patriotyzmu i walorów moralnych. Poczucia godności osobistej. Zrozumienia zasad dyscypliny
                i solidarności oraz potrzeb sumiennego wypełniania obowiązków społecznych i obywatelskich. Przekazywanie
                i propagowanie wiedzy historycznej oraz tradycji oręża Wojska Polskiego.
            </div>
        </section>
    );
}

export default HomeAboutUs;