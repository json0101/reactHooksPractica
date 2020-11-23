import React, { useReducer , useEffect } from 'react'
import './styles.css';
import { todoReducer } from './todoReducer';

import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';


const init = () => {    
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)
    
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
        
    }, [todos])

    const handleDelete = (todoId) => {
        console.log(todoId);
        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action);
    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        })
    }

    

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr></hr>

            <div className='row'>
                <div className='col-7'>
                    <TodoList
                        todos = {todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    >
                    </TodoList>
                </div>
                <div className="col-5">
                    <TodoAdd
                        handleAddTodo={handleAddTodo}
                    ></TodoAdd>
                </div>
            </div>
        </div>
    )
}
