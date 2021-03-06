/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
  ],
  env: {
    node: true,
    'vue/setup-compiler-macros': true,
  },
  rules: {
    // TODO: remove these rules after fixing the components
    'vue/multi-word-component-names': 'warn',
    'vue/no-mutating-props': 'warn',
  },
};
