export type TodoType = {
	id: string;
	name: string;
	completed: boolean;
};

export type TodoListType = {
	todos: TodoType[];
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
