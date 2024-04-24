export default function formatDate(date: Date, locale = "default"): string {
	const formatter = new Intl.DateTimeFormat(locale, {
		day: "2-digit",
		month: "long",
		year: "numeric",
	});
	return formatter.format(date);
}
