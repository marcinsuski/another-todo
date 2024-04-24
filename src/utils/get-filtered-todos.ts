import { Todo } from "../types";
import { FILTERED_TODOS } from "../constants";

export default function getFilteredTodos(
	Todos: Todo[],
	filter: string
): Todo[] {
	const filteredTodos = {
		[FILTERED_TODOS.ALL]: Todos,
		[FILTERED_TODOS.ACTIVE]: Todos.filter(
			(item: Todo) => item.completed == false
		),
		[FILTERED_TODOS.COMPLETED]: Todos.filter(
			(item: Todo) => item.completed == true
		),
	};

	return filteredTodos[filter];
}
