# ESLint config

## Whats included?

- Standard config base;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;
- Eslint Plugin Import Helper;
- Prettier;

## Setup

### React (with Next.js)

Install dependencies:
```
npm i -D eslint @holymos/eslint-config
```
Inside `.eslintrc.json`
```
{
  "extends": [
    "@holymos/eslint-config/next", 
    "next/core-web-vitals"
  ]
}
```

### React (without Next.js)

Install dependencies:
```
npm i -D eslint @holymos/eslint-config
```
Inside `.eslintrc.json`
```
{
  "extends": "@holymos/eslint-config/react"
}
```

### Node.js

Install dependencies:
```
npm i -D eslint @holymos/eslint-config
```
Inside `.eslintrc.json`
```
{
  "extends": "@holymos/eslint-config/node"
}
```
