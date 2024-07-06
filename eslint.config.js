// eslint.config.js
export default [
  {
    ignores: ["node_modules/**"],
  },
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      // Добавьте свои правила ESLint здесь
    },
  },
];
