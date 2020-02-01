import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

export default () => {
    const nameInput = useRef('');
    const roomInput = useRef('');
    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Unirse</h1>
                <div><input className="joinInput" ref={nameInput} placeholder="Nombre" type="text" /></div>
                <div><input className="joinInput mt-20" ref={roomInput} placeholder="Sala" type="text" /></div>
                <Link onClick={e => (!nameInput.current.value || !roomInput.current.value) ? e.preventDefault() : null} to={`/chat?nombre=${nameInput.current.value}&sala=${roomInput.current.value}`}>
                    <button className="button mt-20">Ingresar</button>
                </Link>
            </div>
        </div>
    );
};