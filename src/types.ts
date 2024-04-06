export type Todo = {
	id: number;
	name: string;
	completed: boolean;
};

export type Button = {
	title?: string;
	icon?: string;
	mode?: "primary" | "secondary" | "flat" | "outline";
	type?: "submit" | "reset" | "button";
	disabled?: boolean;
	color?: "error" | "success";
	style?: object;
	onClick?: () => void;
};
