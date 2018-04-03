## eslint-config-bespoke

Sorry about the name. All my first choices were taken.

## Usage

Install dependencies:

```shell
npm install --save-dev eslint eslint-config-bespoke eslint-plugin-import
```

Add the following to your `.eslintrc.json` file:

```json
{
  "env": {
    "browser": true,
    "node": true
  },

  "extends": [
    "bespoke"
  ]
}
```
