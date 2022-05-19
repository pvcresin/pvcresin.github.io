/** @type {import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config} */
const config = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['import', 'react', '@typescript-eslint'],
  ignorePatterns: ['*.scss'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'no-undef': 'off',
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        groups: ['builtin', 'external', 'parent', 'index', 'type', 'unknown'],
        pathGroups: [
          {
            pattern: '@components/**/*',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@data/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@pages/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@utils/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '**/*.scss',
            group: 'unknown',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
      },
    ],
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
  },
}

module.exports = config
