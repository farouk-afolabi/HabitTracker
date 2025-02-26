import globals from "globals";

export default [
  {
    ignores: ["node_modules/", "dist/","docs/", "logs/"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        document: "readonly",
        console: "readonly",
        window: "readonly",
        localStorage: "readonly",
        navigator: "readonly",
        URL: "readonly",
        fetch: "readonly",
      },
    },
    rules: {
      // Set rules to either 'error' or 'off' - avoid 'warn' 

      'no-undef': 'off',
      'no-unused-vars': 'off',
      'semi': ['off', 'always'],
      'indent': ['off', 2],
    },
  },
];