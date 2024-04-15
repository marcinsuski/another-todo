import { v4 as uuidv4 } from "uuid";
import { AppDispatch } from "../store/store";
import { setState } from "../store/todos-slice";

import Todo from "./Todo";
import { TodoStringifiedType } from "types";

export default class TodoList {
	private todos: Todo[];
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

	public deleteCompletedTodos(): void {
		if (window.confirm("Na pewno usunąć ukończone zadania?")) {
			this.todos = this.todos.filter((todo) => todo.completed === false);
			this.dispatch(setState(this.getTodos()));
			this.saveToLocalStorage();
		}
	}

	public toggleTodo(id: string): void {
		this.todos = this.todos.map((todo) => {
			return todo.getId() === id
				? new Todo(todo.getId(), todo.name, (todo.completed = !todo.completed))
				: todo;
		});
		this.dispatch(setState(this.getTodos()));
		this.saveToLocalStorage();
	}

	private getFromLocalStorage(): Todo[] {
		const localStorageData = localStorage.getItem("todos");
		// prettier-ignore
		return localStorageData	
		? JSON.parse(localStorageData).map((todo: TodoStringifiedType) => {
			const {id, name, completed } = todo;
			return new Todo(id, name, completed)
		}
		) 
		: [];
	}

	private saveToLocalStorage(): void {
		localStorage.setItem("todos", JSON.stringify(this.todos));
	}
}
