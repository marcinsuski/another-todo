import styles from "./modal.module.css";

type ModalProps = {
	isOpen: boolean;
	onDismiss: () => void;
	content: React.ComponentType<{ onDismiss: () => void }>;
};

export default function Modal({
	isOpen,
	onDismiss,
	content: Content,
}: ModalProps) {
	return isOpen ? (
		<div className={styles.overlay} onClick={onDismiss}>
			<Content onDismiss={onDismiss} />
		</div>
	) : null;
}
