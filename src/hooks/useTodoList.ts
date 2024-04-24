import { useEffect, useState } from "react";
import TodoList from "../classes/TodoList";

export default function useTodoList(todoList: TodoList) {
	const [state, setState] = useState(todoList.getTodos());

	useEffect(() => {
		setState(todoList.getTodos());
	}, [todoList]);

	return {
		state,
		addTodo: todoList.addTodo,
		deleteTodo: todoList.deleteTodo,
		deleteAllTodos: todoList.deleteAllTodos,
		deleteCompletedTodos: todoList.deleteCompletedTodos,
		toggleTodo: todoList.toggleTodo,
	};
}
