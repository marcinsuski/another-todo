import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store/store.tsx";
import { TodoListProvider } from "./store/todoListContext";

import App from "./index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider store={store}>
			<Router>
				<TodoListProvider>
					<App />
				</TodoListProvider>
			</Router>
		</Provider>
	</StrictMode>
);
