import React from 'react'
import {TodoListItem} from './TodoListItem';

export const TodoList = ({todos, handleDelete, handleToggle}) => {
    return (
        <ul className='list-group list-group-flush'>
            {
                todos.map((t,i) => {
                    return (
                        <TodoListItem
                            key={t.id}
                            t = {t}
                            i = {i}
                            handleDelete = {handleDelete}
                            handleToggle = {handleToggle}
                        ></TodoListItem>
                    )
                })
            }
        </ul>
    )
}
