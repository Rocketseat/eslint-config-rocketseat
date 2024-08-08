import globals from 'globals'
import config from './base.mjs'

export default [
  ...config,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
]
