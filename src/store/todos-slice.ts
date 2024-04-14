import { createSlice } from "@reduxjs/toolkit";
import Todo from "classes/Todo";

const todos = localStorage.getItem("todos") || [];

let parsed;

if (typeof todos === "string") {
	parsed = JSON.parse(todos);
}

const initialState: Todo[] = parsed || [];

const TodoSlice = createSlice({
	name: "todo",
	initialState: { value: initialState },
	reducers: {
		setState: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { setState } = TodoSlice.actions;

export default TodoSlice.reducer;
