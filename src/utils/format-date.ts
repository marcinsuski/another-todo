export default function formatdDate(date: Date): string {
	const today = new Date(date);
	const dd = String(today.getDate()).padStart(2, "0");
	let mm = String(today.getMonth() + 1).padStart(2, "0");
	if (mm === "01") mm = "stycznia";
	if (mm === "02") mm = "lutego";
	if (mm === "03") mm = "marca";
	if (mm === "04") mm = "kwietnia";
	if (mm === "05") mm = "maja";
	if (mm === "06") mm = "czerwca";
	if (mm === "07") mm = "lipca";
	if (mm === "08") mm = "sierpnia";
	if (mm === "09") mm = "września";
	if (mm === "10") mm = "października";
	if (mm === "11") mm = "listopada";
	if (mm === "12") mm = "grudnia";

	const yyyy = today.getFullYear();
	const currentDate = `${dd} ${mm} ${yyyy}`;
	return currentDate;
}
