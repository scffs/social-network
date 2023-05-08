module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['react', 'react-hooks', '@typescript-eslint', 'react-refresh'],
    rules: {
        'array-bracket-spacing': ['error', 'never'],
        'react-refresh/only-export-components': 'warn',
        quotes: ['error', 'single'],
        semi: [1, 'always'],
        'jsx-quotes': [2, 'prefer-single'],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        indent: ['error', 2],
    },
};
