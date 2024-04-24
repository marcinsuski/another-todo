export interface Todo {
	id: string;
	name: string;
	completed: boolean;
}

export type TodoFilters = "all" | "active" | "completed";

export type TodoListState = {
	todos: Todo[];
	filter?: TodoFilters;
};

export type ButtonMode = "primary" | "flat" | "outline" | "round";

export type Button = {
	color?: "error" | "success";
	dataTestId?: string;
	disabled?: boolean;
	icon?: string;
	title?: string;
	mode?: ButtonMode;
	type?: "submit" | "reset" | "button";
	className?: string;
	onClick?: (e: React.SyntheticEvent<EventTarget>) => void;
};

export interface IStore<T> {
	getState(): T;
	setState(newState: T): void;
}

export interface ITodoStore extends IStore<TodoListState> {}
