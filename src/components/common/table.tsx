import { useContext, useState } from "react";
import styles from "./table.module.css";
import Button from "./button";
import Item from "./item";

import { TodoListContext } from "../../store/todoListContext";
import getFilteredTodos from "../../utils/get-filtered-todos";

export default function Table() {
	const [filter, setFilter] = useState("all");
	const { todos, deleteTodo } = useContext(TodoListContext);

	const filteredTodos = todos && getFilteredTodos(todos, filter);

	return (
		<div className={styles.table}>
			<div className={styles.table__head}>
				<h3>
					Zadania:
					<span className={styles.todos_count} data-testid="todos-number">
						{filteredTodos ? filteredTodos.length : "0"} /{" "}
						{todos ? todos.length : "0"}
					</span>
				</h3>
			</div>
			<div className={styles.filterTodos}>
				<p>Filtruj zadania:</p>
				<div className={styles.flex}>
					<Button
						onClick={() => setFilter("all")}
						dataTestId="filter-all"
						mode={"flat"}
						title="wszystkie"
						className={"filterAll"}
						icon={""}
					/>
					<span className={styles.md}>{"|"}</span>
					<Button
						onClick={() => setFilter("completed")}
						dataTestId="filter-completed"
						mode={"flat"}
						title="ukończone"
						className={"filterCompletedTodos"}
						icon={""}
					/>
					<span className={styles.md}>{"|"}</span>
					<Button
						onClick={() => setFilter("active")}
						dataTestId="filter-active"
						mode={"flat"}
						title="aktywne"
						className={"filterActiveTodos"}
						icon={""}
					/>
				</div>
			</div>
			<div className={styles.table__body}>
				{todos &&
					todos.map((todo, index) => (
						<Item
							key={index}
							todo={todo}
							deleteHandler={() => deleteTodo(todo.id)}
						/>
					))}
			</div>
		</div>
	);
}
