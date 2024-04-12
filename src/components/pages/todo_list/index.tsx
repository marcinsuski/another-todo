import { useState } from "react";

import Button from "../../common/button";
import Modal from "../..//common/modal";
import Table from "../../common/table";

export default function TodoTable() {
	const [isOpen, setIsOpen] = useState(false);

	const onDismiss = () => {
		setIsOpen(false);
	};

	const showModal = () => {
		setIsOpen(true);
	};

	return (
		<>
			<Table />

			<Button
				mode="round"
				className={"addTodo"}
				title=""
				icon={"src/static/add_white.svg"}
				onClick={showModal}
			/>
			{isOpen && <Modal isOpen={isOpen} onDismiss={onDismiss} />}
		</>
	);
}
