module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint",
  },
};
