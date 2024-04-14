import { useState } from "react";
import useTodoList from "../../../hooks/useTodoList";
import styles from "../index.module.css";

import Button from "../../common/button";
import Table from "../../common/table";
import Modal from "../../common/modal";
import AddTodoContent from "./add/add-todo";

export default function TodoTable() {
	const [isAddOpen, setIsAddOpen] = useState(false);
	const todoList = useTodoList();

	if (!todoList) return;

	const deleteAllTodosHandler = () => {
		todoList.deleteAllTodos();
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
					mode="primary"
					className={"error"}
					title="usuń wszystkie"
					icon={""}
					onClick={deleteAllTodosHandler}
				/>
				<Button
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
