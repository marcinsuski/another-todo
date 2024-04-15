import path from "path";

module.exports = {
	process(sourcePath: string) {
		return {
			code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,
		};
	},
};
