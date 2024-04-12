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
	disabled?: boolean;
	icon?: string;
	title?: string;
	mode?: "primary" | "secondary" | "flat" | "outline" | "round";
	type?: "submit" | "reset" | "button";
	className?: string;
	onClick?: () => void;
};
