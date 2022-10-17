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
        <form action="" onClick={onSubmit}>
            <input
                type="text"
                className="input-area"
                placeholder="Add task"
                value={todo}
                onChange={(event) => setTodo(event.target.value)}
            />
        </form>
    )
}

export default AddTodo
