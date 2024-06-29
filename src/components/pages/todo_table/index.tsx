import { useContext, useState } from "react";
import styles from "../index.module.css";

import Button from "../../common/button";
import Table from "../../common/table";
import Modal from "../../common/modal";
import AddTodoContent from "./add/add-todo";
import { TodoListContext } from "../../../store/todoListContext";

export default function TodoTable() {
	const [isAddOpen, setIsAddOpen] = useState(false);
	const { deleteAllTodos, deleteCompletedTodos } = useContext(TodoListContext);

	const deleteAllTodosHandler = (): void => {
		deleteAllTodos();
	};
	const deleteCompletedTodosHandler = (): void => {
		deleteCompletedTodos();
	};
	const onDismiss = (): void => {
		setIsAddOpen(false);
	};

	const showModal = (): void => {
		setIsAddOpen(true);
	};

	return (
		<>
			<Table />
			<div className={styles.flex}>
				<Button
					dataTestId="delete-all-btn"
					mode="primary"
					className={"error"}
					title="usuń wszystkie"
					icon={""}
					onClick={deleteAllTodosHandler}
				/>
				<Button
					dataTestId="delete-completed-btn"
					mode="primary"
					className={"error"}
					title="usuń ukończone "
					icon={""}
					onClick={deleteCompletedTodosHandler}
				/>
				<Button
					dataTestId="add-todo-btn"
					mode="primary"
					className="success"
					title="Dodaj zadanie"
					icon={""}
					onClick={() => showModal()}
				/>
				{isAddOpen && (
					<Modal
						isOpen={isAddOpen}
						onDismiss={() => onDismiss()}
						content={AddTodoContent}
					/>
				)}
			</div>
		</>
	);
}
