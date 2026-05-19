module.exports = {
  extends: [
    '@mate-academy/eslint-config',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  env: {
    jest: true,
    node: true,
  },
  rules: {
    'no-proto': 0,
    '@typescript-eslint/no-explicit-any': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    indent: 'off',
  },
  plugins: ['@typescript-eslint', 'jest'],
};
