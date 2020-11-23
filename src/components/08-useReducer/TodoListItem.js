import React from 'react'

export const TodoListItem = ({t, i, handleDelete, handleToggle}) => {
    return (
        <li 
            key={t.id}
            className='list-group-item'
        >
            <p 
                className={`${ t.done && 'complete' }`}
                onClick={() => handleToggle(t.id)}
            >{i+1}. {t.desc}</p>

            <button 
                className="btn btn-danger"
                onClick={() => handleDelete(t.id)}
                >
                Borrar
            </button>
        </li>
    )
}
