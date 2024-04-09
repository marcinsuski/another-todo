import { ChangeEvent, useState } from "react";
import styles from "./modal.module.css";

import Button from "./button";

interface ModalProps {
	isOpen: boolean;
	onDismiss: () => void;
}

interface ContentProps {
	onDismiss: () => void;
}

interface Todo {
	name: string;
	completed: boolean;
}

function Content({ onDismiss }: ContentProps) {
	const [todo, setTodo] = useState<Todo>({ name: "", completed: false });

	const setName = (e: ChangeEvent<HTMLInputElement>) => {
		setTodo({ ...todo, [e.target.name]: e.target.value });
	};

	const setCompleted = (e: ChangeEvent<HTMLInputElement>) => {
		setTodo({ ...todo, completed: e.target.checked });
	};

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
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
			<form className={styles.addTodoForm} onSubmit={onSubmit}>
				<label className={styles.formField}>
					Nazwa:
					<input type="text" name="name" value={todo.name} onChange={setName} />
				</label>

				<label className={styles.formField}>
					Ukończone:
					<input
						type="checkbox"
						name="completed"
						checked={todo.completed}
						onChange={setCompleted}
					/>
				</label>

				<Button type="submit" mode="secondary" title="Dodaj taski" />
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
