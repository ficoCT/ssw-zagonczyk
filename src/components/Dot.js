function Dot() {

    return (
        <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '6px',
            backgroundColor: 'white',
            opacity: `${(props) => (props.isActive ? 1 : 0.5)}`,
            margin: '5px',
            transition: '750ms all ease-in-out'
        }}>
         XXX
        </div>
    );
}

export default Dot;