import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./index.tsx";
import TodoListProvider from "./store/todoListContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<TodoListProvider>
			<Router>
				<App />
			</Router>
		</TodoListProvider>
	</StrictMode>
);
