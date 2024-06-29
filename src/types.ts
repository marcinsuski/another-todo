export interface Todo {
	id: string;
	name: string;
	completed: boolean;
}

export interface TodoStore {
	todos: Todo[];
}

export interface IStore<T> {
	add: (data: T) => Promise<void>;
	getAll: () => Promise<T[]>;
	getOne: (id: string) => Promise<T | null>;
	update: (id: string, data?: Partial<T>) => Promise<void>;
	delete: (id?: string, data?: Partial<T>) => Promise<void>;
}

export interface ITodoStore extends IStore<Todo> {}

export type TodoFilters = "all" | "active" | "completed";

export interface TodoListContextType {
	todos: Todo[];
	addTodo: (name: string) => Promise<void>;
	deleteTodo: (id: string) => Promise<void>;
	deleteAllTodos: () => Promise<void>;
	deleteCompletedTodos: () => Promise<void>;
	toggleCompleted: (id: string) => Promise<void>;
}
