import { createContext, useState, useEffect, ReactNode, useMemo } from "react";
import TodoList from "../classes/TodoList";
import TodoStore from "../classes/TodoStore";
import type { Todo, TodoListState } from "../types";

type props = {
	children: ReactNode;
};

export type TodoListContextType = {
	todos: Todo[];
	addTodo: (name: string) => void;
	deleteTodo: (id: string) => void;
	deleteAllTodos: () => void;
	deleteCompletedTodos: () => void;
	toggleTodo: (id: string) => void;
};

export const TodoListContext = createContext<TodoListContextType>({
	todos: [],
	addTodo: () => {},
	deleteTodo: () => {},
	deleteAllTodos: () => {},
	deleteCompletedTodos: () => {},
	toggleTodo: () => {},
});

export default function TodoListProvider({ children }: props) {
	const initialStore: TodoListState = { todos: [] };
	const store = useMemo(() => new TodoStore(initialStore), []);
	const todoList = useMemo(() => new TodoList(store), [store]);

	const [todos, setTodos] = useState<Todo[]>([]);

	useEffect(() => {
		setTodos(todoList.getTodos());
	}, [todoList]);

	const addTodo = (name: string) => {
		todoList.addTodo(name);
		setTodos(todoList.getTodos());
	};

	const deleteTodo = (id: string) => {
		todoList.deleteTodo(id);
		setTodos(todoList.getTodos());
	};

	const deleteAllTodos = () => {
		todoList.deleteAllTodos();
		setTodos(todoList.getTodos());
	};

	const deleteCompletedTodos = () => {
		todoList.deleteCompletedTodos();
		setTodos(todoList.getTodos());
	};

	const toggleTodo = (id: string) => {
		todoList.toggleTodo(id);
		setTodos(todoList.getTodos());
	};

	return (
		<TodoListContext.Provider
			value={{
				todos,
				addTodo,
				deleteTodo,
				deleteAllTodos,
				deleteCompletedTodos,
				toggleTodo,
			}}
		>
			{children}
		</TodoListContext.Provider>
	);
}
