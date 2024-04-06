import styles from "./main.module.css";

type MainProps = {
	children: React.ReactNode;
};

export default function Main({ children }: MainProps) {
	return <main className={styles.main}>{children}</main>;
}
