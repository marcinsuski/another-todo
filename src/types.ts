export interface Todo {
	id: string;
	name: string;
	completed: boolean;
}

export interface TodoStore {
	todos: Todo[];
}

export interface IStore<T> {
	localData: T[];
	store: unknown;
	add(data: T): void;
	getOne(id: string): T | null;
	getAll(): T[];
	update(id?: string, data?: Partial<T>): void;
	delete(id?: string, data?: Partial<T>): void;
}

export interface ITodoStore extends IStore<Todo> {}
