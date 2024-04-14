import type { TodoType } from "types";
export default class Todo implements TodoType {
	public id: string;
	public name: string;
	public completed: boolean;

	constructor(id: string, name: string, completed: boolean) {
		this.id = id;
		this.name = name;
		this.completed = completed;
	}

	public getId(): string {
		return this.id;
	}

	public complete() {
		this.completed = true;
	}
}
