import { ChangeEvent, useState } from "react";
import useTodoList from "../../../../hooks/useTodoList";

import styles from "../../../common/modal.module.css";

import Button from "../../../common/button";

interface ContentProps {
	onDismiss: () => void;
}

export default function AddTodoContent({ onDismiss }: ContentProps) {
	const [todoName, setTodoName] = useState<string>("");
	const todoList = useTodoList();

	const setName = (e: ChangeEvent<HTMLInputElement>) => {
		setTodoName(e.target.value);
	};

	const addTodoHandler = (e: React.SyntheticEvent<EventTarget>) => {
		e.preventDefault();
		if (!todoName) {
			alert("Należy podać nazwę zadania");
		} else {
			todoList.addTodo(todoName);
			setTodoName("");
			onDismiss();
		}
	};

	return (
		<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
			<div className={styles.closeButtonWrapper}>
				<Button
					dataTestId="close-button"
					onClick={onDismiss}
					icon={"./src/static/close_icon.svg"}
					mode="flat"
				/>
			</div>
			<div className={styles.modalContent}>
				<h4>Wprowadź nazwę zadania</h4>
				<form data-testid="add-todo-form" className={styles.addTodoForm}>
					<label className={styles.formField}>
						Nazwa:
						<input
							type="text"
							name="name"
							value={todoName}
							placeholder="Dodaj zadanie"
							onChange={(e) => setName(e)}
						/>
					</label>
					<Button
						dataTestId="submit-button"
						type="submit"
						mode="primary"
						className="success"
						title="Dodaj taski"
						icon={""}
						onClick={(e: React.SyntheticEvent<EventTarget>) =>
							addTodoHandler(e)
						}
					/>
				</form>
			</div>
		</div>
	);
}
