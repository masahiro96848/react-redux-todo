import { createSlice } from '@reduxjs/toolkit'

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
        },
        deleteTask: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id)
        },
    },
})

export const { addTask, deleteTask } = tasksSlice.actions

export default tasksSlice.reducer
