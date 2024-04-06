import formatDate from "../../src/utils/format-date";

describe("formatDate function", () => {
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

	it("should correctly format the date", () => {
		const testDate = new Date("2024-04-02");
		const result = formatDate(testDate);
		expect(result).toEqual("02 kwietnia 2024");
	});

	it("should return today's date in the correct format", () => {
		const testDate = new Date();
		const result = formatDate(testDate);
		const expectedDate = `${String(testDate.getDate()).padStart(2, "0")} ${
			months[testDate.getMonth()]
		} ${testDate.getFullYear()}`;

		expect(result).toEqual(expectedDate);
	});
});
