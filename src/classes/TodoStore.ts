import { ITodoStore, Todo as TodoType } from "../types";
import Cache from "./Cache";

export default class Store implements ITodoStore {
	localData: TodoType[] = [];
	store;

	constructor() {
		this.store = new Cache("todos");
	}
	async add(data: TodoType) {
		this.localData.push(data);
		await this.store.save(this.localData);
	}

	async getOne(id?: string) {
		const todo = this.localData.find((todo) => todo.id === id);
		return todo ? todo : null;
	}
	async getAll() {
		this.localData = await this.store.load();
		return this.localData;
	}

	async update(id: string, data?: Partial<TodoType>) {
		if (!id) {
			throw new Error("ID is required to update a todo");
		}
		const index = this.localData.findIndex((todo) => todo.id === id);
		if (index !== -1 && data) {
			const updatedTodo = { ...this.localData[index], ...data };
			this.localData[index] = updatedTodo;
		}
		await this.store.save(this.localData);
	}

	async delete(id?: string, data?: Partial<TodoType>) {
		if (id) {
			this.localData = this.localData.filter((todo) => todo.id !== id);
			await this.store.save(this.localData);
		} else if (data) {
			this.localData = this.localData.filter(
				(todo) =>
					!Object.entries(data).some(
						([key, value]) => todo[key as keyof TodoType] === value
					)
			);
			this.store.save(this.localData);
		} else {
			this.localData = [];
			await this.store.save(this.localData);
		}
	}
}
