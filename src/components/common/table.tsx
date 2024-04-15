import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "../../store/store";
import useTodoList from "../../hooks/useTodoList";

import styles from "./table.module.css";

import Button from "./button";
import Item from "./item";
import Todo from "../../classes/Todo";
import { FILTERED_TODOS } from "../../constants";
import getFilteredTodos from "../../utils/get-filtered-todos";

export default function Table() {
	const [presentedTodos, setPresentedTodos] = useState<string>(
		FILTERED_TODOS.ALL
	);
	const todoList = useTodoList();
	const Todos = useSelector<RootState, Todo[]>((state) => state.todos.value);

	const filteredTodos = getFilteredTodos(Todos, presentedTodos);

	useEffect(() => {
		Todos && localStorage.setItem("todos", JSON.stringify(Todos));
	}, [Todos]);

	return (
		<div className={styles.table}>
			<div className={styles.table__head}>
				<h3>
					Zadania:
					<span className={styles.todos_count} data-testid="todos-number">
						{Todos ? filteredTodos.length : "0"} / {Todos ? Todos.length : "0"}
					</span>
				</h3>
			</div>
			<div className={styles.filterTodos}>
				<p>Filtruj zadania:</p>
				<div className={styles.flex}>
					<Button
						onClick={() => setPresentedTodos(FILTERED_TODOS.ALL)}
						dataTestId="filter-all"
						mode={"flat"}
						title="wszystkie"
						className={"filterAll"}
						icon={""}
					/>
					<span className={styles.md}>{"|"}</span>
					<Button
						onClick={() => setPresentedTodos(FILTERED_TODOS.COMPLETED)}
						dataTestId="filter-completed"
						mode={"flat"}
						title="ukończone"
						className={"filterCompletedTodos"}
						icon={""}
					/>
					<span className={styles.md}>{"|"}</span>
					<Button
						onClick={() => setPresentedTodos(FILTERED_TODOS.ACTIVE)}
						dataTestId="filter-active"
						mode={"flat"}
						title="aktywne"
						className={"filterActiveTodos"}
						icon={""}
					/>
				</div>
			</div>
			<div className={styles.table__body}>
				{Todos &&
					filteredTodos.map((todo: Todo, index) => (
						<Item
							key={index}
							todo={todo}
							deleteHandler={() => todoList.deleteTodo(todo.getId())}
						/>
					))}
			</div>
		</div>
	);
}
