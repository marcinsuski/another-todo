import type { IStore, Todo } from "../types";
import { v4 as uuidv4 } from "uuid";

export default class TodoList {
	#database;

	constructor(database: IStore<Todo>) {
		this.#database = database;
	}

	async getTodos(): Promise<Todo[]> {
		try {
			return await this.#database.getAll();
		} catch (err) {
			console.log("Error getting todos: ", err);
			return [];
		}
	}

	async addTodo(name: string): Promise<void> {
		try {
			if (!name.length) {
				throw new Error("name not provided");
			}
			const escapedName = name.trim().replace(/<[^>]*>/g, "");
			const newTodo = { id: uuidv4(), name: escapedName, completed: false };
			await this.#database.add(newTodo);
			console.log("successfully added todo");
		} catch (err) {
			console.log("Error adding todo: ", err);
		}
	}

	async deleteTodo(id: string): Promise<void> {
		try {
			await this.#database.delete(id);
			console.log("action completed");
		} catch (err) {
			console.log("Error deleting todo: ", err);
		}
	}
	async deleteAllTodos(): Promise<void> {
		try {
			await this.#database.delete();
			console.log("action completed");
		} catch (err) {
			console.log("Error deleting all todos: ", err);
		}
	}

	async deleteCompletedTodos(): Promise<void> {
		try {
			await this.#database.delete(undefined, { completed: true });
			console.log("action completed");
		} catch (err) {
			console.log("Error deleting completed todos: ", err);
		}
	}

	async toggleCompleted(id: string): Promise<void> {
		try {
			const todo = await this.#database.getOne(id);
			if (!todo) {
				throw new Error("Todo not found");
			}
			await this.#database.update(id, { completed: !todo.completed });
			console.log("todo status changed");
		} catch (err) {
			console.log("Error toggling todo: ", err);
		}
	}
}
