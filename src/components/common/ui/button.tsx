import styles from "./ui.module.css";

import { BUTTON_TYPES } from "../../../constants";

import type { Button } from "types";

/**
 * Returns a Button component customized by parameters specified as props
 * @param {string} title - text visible on the button
 * @param {string} mode - type of button style (flat, outline, primary, secondary)
 * @param {string} icon - icon URL
 * @param {string} type - type of button(submit, reset, button) - if not provided, type will we set to button
 * @returns {React.JSX.Element}
 */
export default function Button({
	mode,
	title,
	type,
	disabled = false,
	color,
	onClick,
}: Button) {
	const buttonStyle =
		mode === BUTTON_TYPES.PRIMARY
			? styles.primary
			: mode === BUTTON_TYPES.SECONDARY
			? styles.secondary
			: mode === BUTTON_TYPES.OUTLINE
			? styles.outline
			: styles.flat;

	const buttonColor = color === "error" ? styles.error : "";

	return (
		<div className={styles.button_container}>
			<button
				type={type ? type : "button"}
				disabled={disabled}
				className={[styles.button, buttonStyle, buttonColor].join(" ")}
				onClick={onClick}
			>
				{title && <div>{title}</div>}
			</button>
		</div>
	);
}
