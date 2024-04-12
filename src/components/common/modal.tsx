import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../../redux/todos-slice";

import styles from "./modal.module.css";

import Button from "./button";

interface ModalProps {
	isOpen: boolean;
	onDismiss: () => void;
}

interface ContentProps {
	onDismiss: () => void;
}

function Content({ onDismiss }: ContentProps) {
	const [todoName, setTodoName] = useState<string>("");
	const dispatch = useDispatch();

	const setName = (e: ChangeEvent<HTMLInputElement>) => {
		setTodoName(e.target.value);
	};

	const addTodoHandler = () => {
		if (!todoName) {
			alert("Należy podać nazwę zadania");
			return;
		}
		dispatch(addTodo({ id: uuidv4(), name: todoName, completed: false }));
		setTodoName("");
		onDismiss();
	};

	return (
		<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
			<div className={styles.closeButtonWrapper}>
				<Button
					onClick={onDismiss}
					icon={"./src/static/close_icon.svg"}
					mode="flat"
				/>
			</div>
			<form className={styles.addTodoForm}>
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
					type="submit"
					mode="secondary"
					title="Dodaj taski"
					onClick={addTodoHandler}
				/>
			</form>
		</div>
	);
}

export default function Modal({ isOpen, onDismiss }: ModalProps) {
	return isOpen ? (
		<div className={styles.overlay} onClick={onDismiss}>
			<Content onDismiss={onDismiss} />
		</div>
	) : null;
}
