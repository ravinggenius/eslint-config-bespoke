module.export = {
	"env": {
		"es6": true
	},

	"parserOptions": {
		"ecmaFeatures": {
			"impliedStrict": true
		},
		"ecmaVersion": 2018,
		"sourceType": "module"
	},

	"extends": [
		"eslint:recommended",
		"plugin:simple-import-sort",
		"plugin:import/errors",
		"plugin:import/warnings"
	],

	"rules": {
		"array-bracket-spacing": ["error", "always"],

		"comma-dangle": ["error", "never"],

		"func-names": ["warn", "never"],

		"indent": ["error", "tab"],

		"import/order": ["off"],

		"linebreak-style": ["error", "unix"],

		"max-len": ["warn", {
			"tabWidth": 4
		}],

		"no-else-return": ["off"],

		"no-tabs": ["off"],

		"no-underscore-dangle": ["warn"],

		"no-unused-vars": ["error", {
			"argsIgnorePattern": "^_"
		}],

		"quote-props": ["error", "consistent-as-needed"],

		"quotes": ["error", "single"],

		"semi": ["error", "always"],

		"simple-import-sort/sort": ["error"],

		"sort-imports": ["off"]
	}
};
