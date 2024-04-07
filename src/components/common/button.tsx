import styles from "./button.module.css";

import { BUTTON_TYPES } from "../../constants";

import type { Button } from "types";

/**
 * Returns a Button component customized by parameters specified as props
 * @param {string} title - text visible on the button
 * @param {string} mode - type of button style (flat, outline, primary, secondary, round)
 * @param {string} icon - icon URL
 * @param {string} type - type of button(submit, reset, button) - if not provided, type will we set to button
 * @returns {React.JSX.Element}
 */
export default function Button({
	color,
	className,
	disabled = false,
	icon,
	mode,
	title,
	type,
	onClick,
}: Button) {
	const buttonStyle =
		mode === BUTTON_TYPES.PRIMARY
			? styles.primary
			: mode === BUTTON_TYPES.SECONDARY
			? styles.secondary
			: mode === BUTTON_TYPES.OUTLINE
			? styles.outline
			: mode === BUTTON_TYPES.ROUND
			? styles.round
			: styles.flat;

	const buttonColor = color === "error" ? styles.error : "";
	const customClass = styles[`${className}`];

	return (
		<div className={styles.button_container}>
			<button
				data-testid="my-button"
				type={type ? type : "button"}
				disabled={disabled}
				className={[styles.button, buttonStyle, buttonColor, customClass].join(
					" "
				)}
				onClick={onClick}
			>
				{icon && <img src={icon} alt="" width={20} height={20} />}
				{title && <div>{title}</div>}
			</button>
		</div>
	);
}
