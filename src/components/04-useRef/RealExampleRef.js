import React, { useState } from 'react';
import '../02-useEffect/effects.css';
import { MultipleCustomHook } from '../03-examples/MultipleCustomHook';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);


    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr></hr>

            {show && <MultipleCustomHook></MultipleCustomHook> }

            <button className="btn btn-primary"
                onClick={() => {
                    setShow(!show)
                }}>
                Mostrar MultipleCustomHook
            </button>
        </div>
    )
}
