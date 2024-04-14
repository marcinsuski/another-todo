import { v4 as uuidv4 } from "uuid";
import { AppDispatch } from "../store/store";
import { setState } from "../store/todos-slice";

import Todo from "./Todo";

import type { TodoType, TodoListType } from "../types";

export default class TodoList implements TodoListType {
	public todos: Todo[];
	public dispatch: AppDispatch;

	constructor(dispatch: AppDispatch) {
		this.dispatch = dispatch;
		this.todos = this.getFromLocalStorage();
	}

	public addTodo(todoName: string): void {
		const todoId = uuidv4();
		const newTodo = new Todo(todoId, todoName, false);
		this.todos = [...this.todos, newTodo];
		this.dispatch(setState(this.getTodos()));
		this.saveToLocalStorage();
	}

	public getTodos(): Todo[] {
		return this.todos;
	}

	public deleteTodo(id: string): void {
		this.todos = this.todos.filter((todo) => todo.getId() !== id);
		this.dispatch(setState(this.getTodos()));
		this.saveToLocalStorage();
	}

	public deleteAllTodos(): void {
		if (window.confirm("Na pewno usunąć wszystkie zadania?")) {
			this.todos = [];
			this.dispatch(setState(this.getTodos()));
			this.saveToLocalStorage();
		}
	}

	public toggleTodo(id: string): void {
		this.todos = this.todos.map((todo) => {
			return todo.getId() === id
				? new Todo(todo.id, todo.name, (todo.completed = !todo.completed))
				: todo;
		});
		this.dispatch(setState(this.getTodos()));
		this.saveToLocalStorage();
	}

	private getFromLocalStorage(): Todo[] {
		const localStorageData = localStorage.getItem("todos");
		// prettier-ignore
		return localStorageData	
		? JSON.parse(localStorageData).map((todo: TodoType) => new Todo(todo.id, todo.name, todo.completed)) 
		: [];
	}

	private saveToLocalStorage(): void {
		localStorage.setItem("todos", JSON.stringify(this.todos));
	}
}
