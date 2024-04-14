import Todo from "classes/Todo";

export type TodoType = {
	name: string;
	completed: boolean;
};

export type TodoStringifiedType = TodoType & {
	id: string;
};

export type TodoListType = {
	addTodo: (todoName: string) => void;
	getTodos: () => Todo[];
	deleteTodo: (id: string) => void;
	deleteAllTodos: () => void;
	toggleTodo: (id: string) => void;
};

export type Button = {
	color?: "error" | "success";
	dataTestId?: string;
	disabled?: boolean;
	icon?: string;
	title?: string;
	mode?: "primary" | "secondary" | "flat" | "outline" | "round";
	type?: "submit" | "reset" | "button";
	className?: string;
	onClick?: (e: React.SyntheticEvent<EventTarget>) => void;
};
