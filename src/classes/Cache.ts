export default class Cache {
	dataName: string;

	constructor(dataName: string) {
		if (!dataName) {
			this.dataName = "data";
		} else {
			this.dataName = dataName;
		}
	}
	load() {
		const data = localStorage.getItem(this.dataName);
		return data ? JSON.parse(data) : {};
	}

	save(data: object) {
		localStorage.setItem(this.dataName, JSON.stringify(data));
	}
}
