import React,{useRef} from 'react';
import '../02-useEffect/effects.css';

export const FocusScreen = () => {

    const inputRef = useRef();
    
    const handleClick = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            <h1>Focus Screen</h1>

            <input
                className="form-control"
                placeholder="su nombre"
                ref={inputRef}
            ></input>

            <button 
                className="btn btn-outline-primary mt-5"
                onClick={handleClick}>
                Focus
            </button>
        </div>
    )
}
