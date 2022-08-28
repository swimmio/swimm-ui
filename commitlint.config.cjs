module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [0, 'always', 'lower-case'],
  },
  ignores: [
    (message) => /^chore\(release\): set `package.json` to.*?$/m.test(message),
  ],
};
