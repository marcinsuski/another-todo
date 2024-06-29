import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { TodoListProvider } from "./store/todoListContext.tsx";
import App from "./index.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Router>
			<TodoListProvider>
				<App />
			</TodoListProvider>
		</Router>
	</StrictMode>
);
