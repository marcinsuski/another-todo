import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./todos-slice";

export const store = configureStore({
	reducer: {
		todos: TodoReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
