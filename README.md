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
