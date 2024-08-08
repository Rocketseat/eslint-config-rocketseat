// @ts-check

import globals from 'globals'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import config from './base.mjs'

export default [
  ...config,
  {
    plugins: {
      'react-hooks': eslintPluginReactHooks,
    },
    rules: {
      ...eslintPluginReactHooks.configs.recommended.rules,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
]
