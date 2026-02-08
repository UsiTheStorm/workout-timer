import antfu from '@antfu/eslint-config';

export default antfu(
  {
    formatters: true,
    perfectionist: true,
    react: true,
    stylistic: {
      indent: 2,
      quotes: 'single',
      // semi: true,
    },
    typescript: false,
  },
  {
    rules: {
      'no-console': 'warn',
      // Sort rules
      'perfectionist/sort-classes': ['error', { order: 'asc', type: 'natural' }],
      'perfectionist/sort-enums': ['error', { order: 'asc', type: 'natural' }],
      'perfectionist/sort-jsx-props': ['error', { order: 'asc', type: 'natural' }],
      'perfectionist/sort-maps': ['error', { order: 'asc', type: 'natural' }],
      'perfectionist/sort-named-exports': ['error', { order: 'asc', type: 'natural' }],
      'perfectionist/sort-named-imports': ['error', { order: 'asc', type: 'natural' }],
      // 'perfectionist/sort-objects': ['error', { order: 'asc', type: 'natural' }],

      // Custom import sorting
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'natural',
          order: 'asc',

          customGroups: [
            {
              groupName: 'css-modules',
              elementNamePattern: ['\\.(c|s[ac]|le)ss$'],
            },
          ],

          groups: [
            'type',
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'css-modules',
            'unknown',
          ],

          internalPattern: ['^@/.*'],
        },
      ],

      'react-x/no-implicit-key': 'off',
      'react/no-implicit-key': 'off',

      'style/jsx-one-expression-per-line': 'off',
      'react/jsx-one-expression-per-line': 'off',

      'antfu/no-top-level-await': 'off',

      'node/prefer-global/process': 'off',
    },
  },
);
