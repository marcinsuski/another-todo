import { ITodoStore, TodoListState } from "types";

export default class Cache implements ITodoStore {
	public getState() {
		const data = localStorage.getItem("todos");
		return data ? JSON.parse(data) : null;
	}

	public setState(todos: TodoListState) {
		localStorage.setItem("todos", JSON.stringify(todos));
	}
}
