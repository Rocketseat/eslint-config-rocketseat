# Rocketseat ESLint config

## Whats included?

- Standard config base;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;
- Prettier;

## Setup

### React (with Next.js)

Install dependencies:
```
npm i -D eslint @rocketseat/eslint-config
```
Inside `.eslintrc.json`
```
{
  "extends": [
    "@rocketseat/eslint-config/next", 
    "next/core-web-vitals"
  ]
}
```

### React (without Next.js)

Install dependencies:
```
npm i -D eslint @rocketseat/eslint-config
```
Inside `.eslintrc.json`
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

### Node.js

Install dependencies:
```
npm i -D eslint @rocketseat/eslint-config
```
Inside `.eslintrc.json`
```
{
  "extends": "@rocketseat/eslint-config/node"
}
```
