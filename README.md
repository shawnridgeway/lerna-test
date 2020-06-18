# Learna Test

This is a sandbox repo to test out how to structure a Lerna based monorepo. It is otherwise very boring. Proceed with caution.

## Structure

```
.
├── Makefile
├── lerna.json
├── package-lock.json
├── package.json
├── apps
│   └── my-app
│       ├── .babelrc
│       ├── Makefile
│       ├── dist
│       │   ├── index.html
│       │   └── main.js
│       ├── package-lock.json
│       ├── package.json
│       ├── src
│       │   ├── index.html
│       │   └── index.tsx
│       ├── tsconfig.json
│       └── webpack.config.js
└── packages
    ├── packages.tsconfig.json
    ├── multi-div
    │   ├── dist
    │   │   └── index.js
    │   ├── package.json
    │   ├── src
    │   │   └── index.tsx
    │   └── tsconfig.json
    └── timer
        ├── dist
        │   ├── index.d.ts
        │   └── index.js
        ├── package.json
        ├── src
        │   └── index.tsx
        └── tsconfig.json
```

