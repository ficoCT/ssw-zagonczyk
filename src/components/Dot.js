function Dot({onClick, isActive}) {

    function clickDot() {

        if (typeof onClick !== 'function') return;
        onClick();
    }

    return (
        <div
            onClick={clickDot}
            style={{
            width: '1.25rem',
            height: '1.25rem',
            borderRadius: '2.5rem',
            backgroundColor: 'white',
            opacity: `${isActive ? 1 : 0.5}`,
            margin: '10px',
            transition: '750ms all ease-in-out',
        }}>
        </div>
    );
}

export default Dot;