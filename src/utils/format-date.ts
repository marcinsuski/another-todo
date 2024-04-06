export default function formatDate(date: Date): string {
	const today = new Date(date);
	const dd = String(today.getDate()).padStart(2, "0");
	const months = [
		"stycznia",
		"lutego",
		"marca",
		"kwietnia",
		"maja",
		"czerwca",
		"lipca",
		"sierpnia",
		"września",
		"października",
		"listopada",
		"grudnia",
	];
	const mm = months[today.getMonth()];
	const yyyy = today.getFullYear();
	const currentDate = `${dd} ${mm} ${yyyy}`;
	return currentDate;
}
