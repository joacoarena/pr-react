import React, { useState } from 'react'
import { Todo } from './todo'

const TodoApp = () => {
    const [title, setTitle] = useState('hola')
    const [todos, setTodos] = useState([])

      
    function handlerChange(event) {
        const value = event.target.value
        setTitle(value)
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newTodo={
            id: crypto.randomUUID(),
            title: title,
            completed: false
            
        }

        const temp = [...todos]
        
        temp.unshift(newTodo)
        setTodos(temp)
    }
    return (
    <div className='todocontainer'>
        <form action="" className='todoCreateForm' onSubmit={handleSubmit}>

            <input onChange={handlerChange} className='todoInput' value={title}/>

            <input onClick={handleSubmit} type="submit" value='create todo' className='buttonCreate' />

        </form>
        <div className='todosContainer'>
            {
                todos.map(item =>(
                    <Todo key={item.id} item={item}/>
                    ))
            }
        </div>

    </div>
  )
}

export default TodoApp