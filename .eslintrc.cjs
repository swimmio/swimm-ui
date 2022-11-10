/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
    '@vue/eslint-config-typescript/recommended',
  ],
  env: {
    node: true,
  },
  rules: {
    // TODO: remove these rules after fixing the components
    'vue/multi-word-component-names': 'warn',
    'vue/no-mutating-props': 'warn',
    'vue-scoped-css/no-unused-selector': 'off',
  },
};
