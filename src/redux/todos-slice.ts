import { createSlice } from "@reduxjs/toolkit";
import { TodoType } from "types";

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
		addTodo: (state, action) => {
			state.value.push(action.payload);
		},
		deleteTodo: (state, action) => {
			state.value = state.value.filter(
				(item: TodoType) => item.id !== action.payload.id
			);
		},
		completeTodo: (state, action) => {
			state.value.map((item: TodoType) => {
				if (item.id == action.payload.id) {
					item.completed = !item.completed;
				}
			});
		},
		clearCompleted: () => {},
	},
});

export const { addTodo, clearCompleted, completeTodo, deleteTodo } =
	TodoSlice.actions;

export default TodoSlice.reducer;
