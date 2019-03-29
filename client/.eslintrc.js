module.exports = {
  root: true,
  extends: ['@kiwicom/eslint-config'],
  parser: 'babel-eslint',
  env: {
    jest: true,
    node: true,
  },
  rules: {
    "prettier/prettier": ["error", {
      bracketSpacing: true,
      printWidth: 80,
      singleQuote: false,
      tabWidth: 2,
      trailingComma: 'all',
    }],
    "flowtype/define-flow-type": 0,
    "flowtype/no-dupe-keys": 0,
    "flowtype/no-primitive-constructor-types": 0,
    "flowtype/no-weak-types": 0,
    "flowtype/require-parameter-type": 0,
    "flowtype/require-return-type": 0,
    "flowtype/require-valid-file-annotation": [0, 'never'],
    "flowtype/newline-after-flow-annotation": [0, 'never'],
    "flowtype/require-variable-type": 0,
    "flowtype/sort-keys": 0,
    "flowtype/type-id-match": 0,
    "flowtype/use-flow-type": 0,
    "flowtype/valid-syntax": 0,
  }
};