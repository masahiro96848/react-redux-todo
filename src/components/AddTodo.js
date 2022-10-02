import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../store/todo/reducers'

const AddTodo = () => {
    const [todo, setTodo] = useState('')

    const dispatch = useDispatch()

    const onSubmit = (event) => {
        event.preventDefault()

        if (todo.trim().length === 0) {
            alert('文字を入力してください')
            setTodo('')
            return
        }

        dispatch(
            addTask({
                task: {
                    todo: todo,
                },
            })
        )
        setTodo('')
    }
    return (
        <div className="add-todo">
            <input
                type="text"
                className="task-input"
                placeholder="Add task"
                value={todo}
                onChange={(event) => setTodo(event.target.value)}
            />
            <button className="task-button" onClick={onSubmit}>
                追加
            </button>
        </div>
    )
}

export default AddTodo
