# eslint-plugin-can-not-use-console

eslint-plugin-can-not-use-console

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-can-not-use-console`:

```
$ npm install eslint-plugin-can-not-use-console --save-dev
```

## Usage

Add `can-not-use-console` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["can-not-use-console"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "can-not-use-console/remove-log": 2
  }
}
```

## Supported Rules

- Fill in provided rules here
