import { TodoType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const todos = localStorage.getItem("todos") || [];

let parsed;

if (typeof todos === "string") {
	parsed = JSON.parse(todos);
}

const initialState: TodoType[] = parsed || [];

const TodoSlice = createSlice({
	name: "todo",
	initialState: { value: initialState },
	reducers: {
		addTodo: () => {},
		clearCompleted: () => {},
		completeTodo: () => {},
		deleteTodo: () => {},
		updateTodo: () => {},
	},
});

export const { addTodo, clearCompleted, completeTodo, deleteTodo, updateTodo } =
	TodoSlice.actions;

export default TodoSlice.reducer;
