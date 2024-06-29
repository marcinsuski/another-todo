import {
	createContext,
	useState,
	useEffect,
	useCallback,
	ReactNode,
} from "react";
import { Todo, TodoListContextType } from "types";
import Store from "../classes/TodoStore";
import TodoList from "../classes/TodoList";

type props = {
	children: ReactNode;
};

const store = new Store();
const todoList = new TodoList(store);

export const TodoListContext = createContext<TodoListContextType>({
	todos: [],
	addTodo: async () => {},
	deleteTodo: async () => {},
	deleteAllTodos: async () => {},
	deleteCompletedTodos: async () => {},
	toggleCompleted: async () => {},
});

export function TodoListProvider({ children }: props) {
	const [todos, setTodos] = useState<Todo[]>([]);

	const fetchTodos = useCallback(async () => {
		const todos = await todoList.getTodos();
		setTodos(todos);
	}, [todoList]);

	useEffect(() => {
		fetchTodos();
	}, [fetchTodos]);

	const addTodo = useCallback(
		async (name: string) => {
			await todoList.addTodo(name);
			fetchTodos();
		},
		[todoList, fetchTodos]
	);

	const deleteTodo = useCallback(
		async (id: string) => {
			await todoList.deleteTodo(id);
			fetchTodos();
		},
		[todoList, fetchTodos]
	);

	const deleteAllTodos = useCallback(async () => {
		await todoList.deleteAllTodos();
		fetchTodos();
	}, [todoList, fetchTodos]);

	const deleteCompletedTodos = useCallback(async () => {
		await todoList.deleteCompletedTodos();
		fetchTodos();
	}, [todoList, fetchTodos]);

	const toggleCompleted = useCallback(
		async (id: string) => {
			await todoList.toggleCompleted(id);
			fetchTodos();
		},
		[todoList, fetchTodos]
	);

	return (
		<TodoListContext.Provider
			value={{
				todos,
				addTodo,
				deleteTodo,
				deleteAllTodos,
				deleteCompletedTodos,
				toggleCompleted,
			}}
		>
			{children}
		</TodoListContext.Provider>
	);
}
