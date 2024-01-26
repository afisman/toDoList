import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from '../features/toDoSlice/toDoSlice';

export const store = configureStore({
    reducer: {
        toDo: toDoReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})