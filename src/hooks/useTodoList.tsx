import { useContext } from "react";
import { TodoListContext } from "../store/todoListContext";

export default function useTodoList() {
	const context = useContext(TodoListContext);

	if (context === null) {
		throw new Error(
			"TodoListContext is null. Make sure TodoListProvider is in the component tree."
		);
	}

	return context;
}
