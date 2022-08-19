// refs: https://github.com/standard/eslint-config-standard/blob/master/.eslintrc.json
// refs: https://github.com/xojs/eslint-config-xo/blob/main/index.js

/**
 * This is baisc eslint config.
 */
module.exports = {
	parseOptions: {
		ecmaVersion: "latest",
		ecmaFeatures: {
			jsx: true,
		},
		sourceType: "module",
	},
	env: {
		es2021: true,
	},

	reportUnusedDisableDirectives: true,

	plugins: [],

	globals: {},

	overrides: [
		{
			files: ["package.json"],
			parser: "jsonc-eslint-parser",
			rules: {},
		},
		{
			files: ["*.json", "*.json5"],
			parser: "jsonc-eslint-parser",
			rules: {},
		},
		{
			files: ["*.yaml", "*.yml"],
			parser: "yaml-eslint-parser",
			rules: {
				"spaced-comment": "off",
			},
		},
	],

	rules: {},
};
