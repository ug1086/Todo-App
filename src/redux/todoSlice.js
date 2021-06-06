import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: [
        {id: 1, text: "Learn React", isCompleted: false, editMode: false},
        {id: 2, text: "Learn Redux", isCompleted: false, editMode: false},
        {id: 3, text: "Learn Hooks", isCompleted: false, editMode: false}
    ],
    reducers: {
        addNewTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                text: action.payload.text,
                isCompleted: false,
                editMode: false    
            }
            state.push(newTodo)
        },
        editTodoAction : (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id)
            state[index].text = action.payload.text;
            state[index].editMode = false;
          },
        toggleInput : (state, action) => {
            console.log(action.payload.editMode)
            const index = state.findIndex((todo) => todo.id === action.payload.id)
            state[index].editMode = action.payload.editMode;
        },
        completeTodoAction : (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id)
            state[index].isCompleted = action.payload.isCompleted;
        },
        removeTodoAction :  (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
        }
    },
});

export const { addNewTodo, editTodoAction, toggleInput, completeTodoAction, removeTodoAction } = todoSlice.actions;

export default todoSlice.reducer;