import { useContext, useState } from "react";
import { TodoListContext } from "../../store/todoListContext";
import styles from "./table.module.css";
import getFilteredTodos from "../../utils/get-filtered-todos";

import Button from "./button";
import Item from "./item";

import type { Todo, TodoFilters } from "../../types";

export default function Table() {
	const { todos, deleteTodo } = useContext(TodoListContext);
	const [filter, setFilter] = useState<TodoFilters>("all");

	const filteredTodos = todos && getFilteredTodos(todos, filter);

	return (
		<div className={styles.table}>
			<div className={styles.table__head}>
				<h3>
					Zadania:
					<span className={styles.todos_count} data-testid="todos-number">
						{todos ? filteredTodos.length : "0"} / {todos ? todos.length : "0"}
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
					filteredTodos.map((todo: Todo, index) => (
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
