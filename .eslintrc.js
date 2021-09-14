module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "no-console": "warn",
    "import/first": "error",
    "react/prop-types": 0,
    "prettier/prettier": "error",
    "linebreak-style": "off",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "import/first": "off",
    "no-unused-vars": "warn",
    "no-undef": "off",
  },
}