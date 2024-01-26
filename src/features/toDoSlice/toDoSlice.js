import { createSlice } from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
    name: 'toDo',
    initialState: {
        toDos: []
    },
    reducers: {
        addToDo: (state, action) => {
            const newToDo = action.payload
            console.log(newToDo)
            state.toDos.push(newToDo);
        },
        removeToDo: (state, action) => {
            const deleteId = action.payload;
            state.toDos = state.toDos.filter((toDo) => toDo.id !== deleteId);
        }
    }
})

export const getToDoList = (state) => state.toDo.toDos;

export const { addToDo, removeToDo } = toDoSlice.actions;
export default toDoSlice.reducer