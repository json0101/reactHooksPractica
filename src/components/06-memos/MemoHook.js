import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helper/procesoPesado';
import { useCounter } from '../../hooks/useCounter';

import '../02-useEffect/effects.css';


export const MemoHook = () => {

    const {counter, increment} = useCounter(5000);
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>Memohook</h1>
            <hr></hr>
            <p>
                {memoProcesoPesado}
            </p>

            <h3>
                Counter: <small>{counter}</small>
            </h3>
            <button className="btn btn-primary" onClick={increment}>
                Incrementar
            </button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick= { () => {
                    setShow(!show);
                }}
            >
                Show/Hide { JSON.stringify(show) }
            </button>
        </div>
    )
}
