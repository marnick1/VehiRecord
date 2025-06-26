// https://docs.expo.dev/guides/using-eslint/
import { includeIgnoreFile } from '@eslint/compat';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import expoConfig from 'eslint-config-expo/flat.js';
import prettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';
import { fileURLToPath } from 'node:url';
import prettierOptions from './prettier.config.js';

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url));

export default defineConfig([
    expoConfig,
    // Ignore files based on .gitignore
    includeIgnoreFile(gitignorePath, 'Imported .gitignore patterns'),
    // Prettier plugin configuration
    {
        files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
        ignores: ['dist/*'],
        plugins: {
            prettier,
        },
        settings: {
            prettier: prettierOptions,
            'import/resolver': {
                typescript: {
                    project: './tsconfig.json',
                    node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
                },
            },
        },
        rules: {
            'prettier/prettier': 'error',
            // other rules
        },
    },
    // TypeScript plugin configuration
    {
        files: ['**/*.ts', '**/*.tsx'],
        ignores: ['dist/*'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: './tsconfig.json',
                sourceType: 'module',
            },
        },
        plugins: {
            typescript: tsPlugin,
        },
        rules: {
            ...tsPlugin.configs.recommended.rules,
            // other rules
        },
    },
    // CJS files configuration
    {
        files: ['**/*.cjs'],
        env: {
            node: true,
        },
        parserOptions: {
            sourceType: 'script',
        },
    },
]);
