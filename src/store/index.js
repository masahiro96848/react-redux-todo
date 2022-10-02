import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './todo/reducers'

const store = configureStore({
    reducer: {
        tasks: taskReducer,
    },
})

export default store
