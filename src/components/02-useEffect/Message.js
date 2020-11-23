import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
        console.log("componente montado");
        return () => {
            console.log("componente desmontado");
        }
    }, [])
    return (
        <>
          <h1>Holaa soy el mensaje</h1>  
        </>
    )
}
