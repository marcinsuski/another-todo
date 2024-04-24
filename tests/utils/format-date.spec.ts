import formatDate from "../../src/utils/format-date";

describe("formatDate function", () => {
	it("should correctly format the date", () => {
		const testDate = new Date("2024-04-02");
		const result = formatDate(testDate, "pl-PL");
		expect(result).toEqual("02 kwietnia 2024");
	});
});
