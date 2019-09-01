module.exports = {
  plugins: [
    'stylelint-order',
    'stylelint-scss',
  ],
  extends: [
    'stylelint-config-standard',
  ],
  ignoreFiles: [
    '**/node_modules/**',
  ],
  rules: {
    'indentation': 2,
    'string-quotes': 'single',
    'order/properties-alphabetical-order': true,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
};
