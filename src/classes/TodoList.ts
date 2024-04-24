import { Todo, ITodoStore } from "../types";
import { v4 as uuidv4 } from "uuid";

export default class TodoList {
	#store;

	constructor(store: ITodoStore) {
		this.#store = store;
	}

	getTodos(): Todo[] {
		return this.#store.getState().todos;
	}

	addTodo(name: string): void {
		const newTodo = { id: uuidv4(), name, completed: false };
		const currentState = this.#store.getState();
		this.#store.setState({
			...currentState,
			todos: [...(currentState.todos || []), newTodo],
		});
	}

	deleteTodo(id: string): void {
		const currentState = this.#store.getState();
		this.#store.setState({
			...currentState,
			todos: currentState.todos.filter((todo) => todo.id !== id),
		});
	}
	deleteAllTodos(): void {
		if (window.confirm("Na pewno usunąć wszystkie zadania?")) {
			const currentState = this.#store.getState();
			this.#store.setState({ ...currentState, todos: [] });
		}
	}

	deleteCompletedTodos(): void {
		if (window.confirm("Na pewno usunąć ukończone zadania?")) {
			const currentState = this.#store.getState();
			this.#store.setState({
				...currentState,
				todos: this.getTodos().filter((todo) => !todo.completed),
			});
		}
	}

	toggleTodo(id: string): void {
		const currentState = this.#store.getState();
		this.#store.setState({
			...currentState,
			todos: this.getTodos().map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			),
		});
	}
}
