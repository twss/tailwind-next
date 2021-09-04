module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:react/recommended',
  ],
  globals: {
    'module': 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
    }],
    'object-curly-spacing': ['error', 'always'],
    'no-unused-vars': ['error', {
      varsIgnorePattern: '^_.*$',
    }],
    quotes: ['error', 'single'],
    'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-max-props-per-line': ['error', { when: 'always' }],
    'react/react-in-jsx-scope': 'off',
    'react/sort-prop-types': ['error', { callbacksLast: true, sortShapeProp: true }],
    semi: ['error', 'always'],
    'sort-vars': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
