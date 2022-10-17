import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

const TodoList = () => {
    const todos = useSelector((state) => {
        return state.tasks
    })

    return (
        <>
            <ul className="tasks-list">
                {todos.map((todo) => (
                    <div>
                        <TodoItem
                            key={todo.id}
                            id={todo.id}
                            title={todo.name}
                            completed={todo.status}
                        />
                    </div>
                ))}
            </ul>
        </>
    )
}

export default TodoList
