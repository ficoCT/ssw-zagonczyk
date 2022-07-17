import {useState} from "react";

function ButtonNav({onShowNavbar}) {

    const [show, setShow] = useState(false);

    const ShowNavbar = (e) => {
        setShow(prev => !prev);
        e.preventDefault();
        if (typeof onShowNavbar !== 'function') return;
        onShowNavbar(show);
    }

    return (
        <button className={show ? "mobile__nav__toggle mobile__nav__toggle__hamburger" : "mobile__nav__toggle mobile__nav__toggle__close"} onClick={ShowNavbar} />
    );
}

export default ButtonNav;