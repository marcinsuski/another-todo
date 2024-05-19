import { ITodoStore, Todo } from "../types";
import Cache from "./Cache";

export default class Store implements ITodoStore {
	localData: Todo[] = [];
	store;

	constructor() {
		this.store = new Cache("todos");
	}
	add(data: Todo) {
		this.localData.push(data);
		this.store.save(this.localData);
	}

	getOne(id?: string) {
		const todo = this.localData.find((todo) => todo.id === id);
		return todo ? todo : null;
	}
	getAll() {
		this.localData = this.store.load();
		return this.localData;
	}

	update(id: string, data?: Partial<Todo>) {
		const index = this.localData.findIndex((todo) => todo.id === id);
		if (index !== -1 && data) {
			const updatedTodo = { ...this.localData[index], ...data };
			this.localData[index] = updatedTodo;
		}
		this.store.save(this.localData);
	}

	delete(id?: string, data?: Partial<Todo>) {
		if (id) {
			this.localData = this.localData.filter((todo) => todo.id !== id);
			this.store.save(this.localData);
		} else if (data) {
			this.localData = this.localData.filter(
				(todo) =>
					!Object.entries(data).some(
						([key, value]) => todo[key as keyof Todo] === value
					)
			);
			this.store.save(this.localData);
		} else {
			this.localData = [];
			this.store.save(this.localData);
		}
	}
}
