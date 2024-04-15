import Todo from "../classes/Todo";
import { FILTERED_TODOS } from "../constants";

export default function getFilteredTodos(
	Todos: Todo[],
	filteredTodosName: string
): Todo[] {
	const activeTodos =
		Todos && Todos.filter((item: Todo) => item.completed == false);

	const completedTodos =
		Todos && Todos.filter((item: Todo) => item.completed == true);

	return filteredTodosName == FILTERED_TODOS.ALL
		? Todos
		: filteredTodosName == FILTERED_TODOS.ACTIVE
		? activeTodos
		: filteredTodosName == FILTERED_TODOS.COMPLETED
		? completedTodos
		: Todos;
}
