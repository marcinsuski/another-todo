import TodoList from "./classes/TodoList";
import Store from "./classes/TodoStore";
import "./index.css";

declare global {
	interface Window {
		app: TodoList;
	}
}

const store = new Store();
const app = new TodoList(store);
window.app = app;

document.querySelector<HTMLDivElement>("#root")!.innerHTML = `
  <div class="main">
    <h1>Another Todo App</h1>
    <h2>Control app with window.app</h2>
    <p>Available options:</p>
    <ul>
    <li>getTodos()</li>
    <li>addTodo(name: string)</li>
    <li>deleteTodo(id: string)</li>
    <li>deleteCompletedTodos()</li>
    <li>deleteAllTodos()</li>
    <li>toggleCompleted()</li>
    </ul>
  </div>
`;
