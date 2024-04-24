import TodoList from "../../src/classes/TodoList";
import { ITodoStore } from "../../src/types";
import { v4 as uuidv4 } from "uuid";

describe("TodoList", () => {
	let store: ITodoStore;
	let todoList: TodoList;

	beforeEach(() => {
		store = {
			getState: jest.fn().mockReturnValue({
				todos: [{ id: "123", name: "Test Todo", completed: false }],
			}),
			setState: jest.fn(),
		};
		todoList = new TodoList(store);
	});

	it("should add a new todo item", () => {
		const newTodoName = "New Todo";
		todoList.addTodo(newTodoName);
		expect(store.setState).toHaveBeenCalledWith(
			expect.objectContaining({
				todos: expect.arrayContaining([
					expect.objectContaining({ name: newTodoName, completed: false }),
				]),
			})
		);
	});

	it("should delete a todo item", () => {
		const todoId = uuidv4();
		(store.getState as jest.Mock).mockReturnValueOnce({
			todos: [{ id: todoId, name: "Test Todo", completed: false }],
		});
		todoList.deleteTodo(todoId);
		expect(store.setState).toHaveBeenCalledWith(
			expect.objectContaining({ todos: [] })
		);
	});

	it("should toggle a todo item", () => {
		todoList.toggleTodo("123");
		expect(store.setState).toHaveBeenCalledWith(
			expect.objectContaining({
				todos: expect.arrayContaining([
					expect.objectContaining({ completed: true }),
				]),
			})
		);
	});
});
