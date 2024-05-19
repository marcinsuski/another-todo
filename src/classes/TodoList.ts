import type { ITodoStore, Todo } from "../types";
import { v4 as uuidv4 } from "uuid";

export default class TodoList {
	#database;

	constructor(database: ITodoStore) {
		this.#database = database;
	}

	getTodos(): Todo[] {
		return this.#database.getAll();
	}

	addTodo(name: string): void {
		if (!name.length) {
			console.log("name not provided"); // for debugging purposes
		}
		const escapedName = name.trim().replace(/<[^>]*>/g, "");
		const newTodo = { id: uuidv4(), name: escapedName, completed: false };
		try {
			this.#database.add(newTodo);
			console.log("successfully added todo"); // for debugging purposes
		} catch (err) {
			console.log("unable to complete action."); // for debugging purposes
		}
	}

	deleteTodo(id: string): void {
		this.#database.delete(id);
		console.log("action completed"); // for debugging purposes
	}
	deleteAllTodos(): void {
		this.#database.delete();
		console.log("action completed"); // for debugging purposes
	}

	deleteCompletedTodos(): void {
		this.#database.delete(undefined, { completed: true });
		console.log("action completed"); // for debugging purposes
	}

	toggleCompleted(id: string): void {
		const todo = this.#database.getOne(id);
		if (!todo) {
			return;
		}
		this.#database.update(id, { completed: !todo.completed });
		console.log("todo status changed"); // for debugging purposes
	}
}
