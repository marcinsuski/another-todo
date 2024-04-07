import styles from "./checkbox.module.css";

type CheckboxProps = {
	completed: boolean;
};

export default function Checkbox({ completed }: CheckboxProps) {
	const className = [styles.checkbox, completed ? styles.completed : ""].join(
		" "
	);

	return (
		<button data-testid="checkbox" className={className}>
			{completed ? "✔" : ""}
		</button>
	);
}
