# Rocketseat ESLint config

## Whats included?

- Standard config base;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;
- Prettier;

## Setup

1. Install the dependencies
```
npm i -D eslint @rocketseat/eslint-config
```

2. Create a `.eslintrc.json` file extending the config:
```
{
  "extends": "@rocketseat/eslint-config/react"
}
```
3. You can add/override any ESLint config by changing your own `.eslintrc.json` file. The example below will only add the self-closing tag rule and leave all the default rules untouched.
```
{
  "extends": "@rocketseat/eslint-config/react",
  "rules": {
    "react/self-closing-comp": "error"
  }
}
```

> You can also use a `.eslintrc.js` instead of JSON if you prefer.
