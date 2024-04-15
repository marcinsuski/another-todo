import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
	preset: "ts-jest",
	testEnvironment: "jest-environment-jsdom",
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
	moduleNameMapper: {
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
			"<rootDir>/mocks/fileMock.js",
		"\\.(css|less)$": "<rootDir>/mocks/styleMock.js",
		"\\\\.module\\\\.css$": "<rootDir>/mocks/styleMock.js",
	},
	collectCoverage: true,
	coverageReporters: ["json", "html"],
	collectCoverageFrom: [
		"**/src/**/*.{js,jsx,ts,tsx}",
		"!**/node_modules/**",
		"!**/vendor/**",
		"!**/coverage/**",
		"!**/mocks/**",
	],
};

export default config;
