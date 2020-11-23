import React,{useState, useEffect} from 'react'
import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });
    const { name, email} = formState;
    
    useEffect(() => {
       
    }, [])

    useEffect(() => {
        
    }, [formState]);

    useEffect(() => {
        
    }, [name]);


    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name] : target.value
        });
    }

    return (
        <>
          <h1>useEffect</h1>
          <hr></hr>
          <div className="form-group">
            <input
                type="text"
                name='name'
                className='form-control'
                placeholder='Ingreso su nombre'
                autoComplete='off'
                value={name}
                onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
                type="text"
                name='email'
                className='form-control'
                placeholder='Ingreso su correo'
                autoComplete='off'
                value =  {email}
                onChange={handleInputChange}
            />
          </div>

          { name==='123' && <Message></Message> }
        </>
    )
}
