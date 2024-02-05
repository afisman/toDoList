import { createSlice } from "@reduxjs/toolkit";

const toDoSlice = createSlice({
    name: 'toDo',
    initialState: [
        { id: 1, title: 'todo1', completed: false },
        { id: 2, title: 'todo2', completed: false },
        { id: 3, title: 'todo3', completed: true },
    ],
    reducers: {
        addToDo: (state, action) => {
            console.log(state)
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false
            };

            console.log(newTodo)

            state.push(newTodo);
        },
        removeToDo: (state, action) => {
            const idToRemove = action.payload.id;

            return state.filter(el => el.id !== idToRemove)
        },
        toggleComplete: (state, action) => {
            const idToToggle = action.payload.id;

            const index = state.findIndex((todo) => todo.id === idToToggle);

            state[index].completed = action.payload.completed;
        }
    }
})

export const { addToDo, removeToDo, toggleComplete } = toDoSlice.actions;

export default toDoSlice.reducer;