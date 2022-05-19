/** @type {import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config} */
const config = {
  extends: 'eslint:recommended',
  parser: '@typescript-eslint/parser',
  plugins: ['import', 'react'],
  ignorePatterns: ['*.scss'],
  rules: {
    'no-undef': 'off',
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type', 'unknown'],
        pathGroups: [
          {
            pattern: '@components/**',
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
  },
}

module.exports = config
