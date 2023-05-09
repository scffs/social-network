module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: ['react', '@typescript-eslint', '@typescript-eslint/eslint-plugin'],
    extends: ['airbnb', 'airbnb-typescript'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
    },
    settings: {
        react: {
            version: '^18.2.0',
        },
    },
    rules: {
        quotes: ['error', 'single'],
        semi: [1, 'always'],
        indent: 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.{ts,tsx,js,jsx}'] }],
        'max-len': ['warn', { code: 120 }],
        'default-param-last': 0,
        '@typescript-eslint/default-param-last': 'off',
        'linebreak-style': 'off',
    },
    overrides: [
        {
            files: ['bin/*.js', 'lib/*.js', '*.ts', '*.tsx'],
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],
        },
        {
            files: ['*.tsx', '*.ts'],
            rules: {
                quotes: ['error', 'single'],
                'jsx-quotes': [2, 'prefer-single'],
                'react/function-component-definition': [2, {
                    namedComponents: 'arrow-function',
                    unnamedComponents: 'arrow-function',
                },
                ],
                '@typescript-eslint/no-unnecessary-type-assertion': 'off',
                'import/prefer-default-export': 'off',
                'no-console': 'off',
                'react/jsx-fragments': 'off',
                'react/jsx-props-no-spreading': 'off',
                'react/jsx-no-useless-fragment': 'off',
                '@typescript-eslint/no-misused-promises': 'off',
                '@typescript-eslint/no-unsafe-assignment': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/restrict-template-expressions': 'off',
                'no-param-reassign': 'off',
                '@typescript-eslint/naming-convention': 'off',
            },
            parserOptions: {
                project: ['./tsconfig.json'],
            },
        },
    ],
};
