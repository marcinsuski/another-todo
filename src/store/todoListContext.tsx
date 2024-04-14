import { createContext, ReactNode } from "react";
import { useDispatch } from "react-redux";
import TodoList from "../classes/TodoList";

export const TodoListContext = createContext<TodoList | null>(null);

type props = {
	children: ReactNode;
};
export const TodoListProvider = ({ children }: props) => {
	const dispatch = useDispatch();

	const todoList = new TodoList(dispatch);
	return (
		<TodoListContext.Provider value={todoList}>
			{children}
		</TodoListContext.Provider>
	);
};
