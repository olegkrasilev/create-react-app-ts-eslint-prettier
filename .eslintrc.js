module.exports = {
  env: {
    browser: true, // Browser global variables like `window` etc.
    commonjs: true, // CommonJS global variables and CommonJS scoping.Allows require, exports and module.
    es6: true, // Enable all ECMAScript 6 features except for modules.
    jest: true, // Jest global variables like `it` etc.
    node: true // Defines things like process.env when generating through node
  },
  plugins: [
    "jsx-a11y",
    "promise",
    "unicorn",
    "sonarjs",
    "jest",
    "eslint-comments",
    //
    "import",
    "write-good-comments"
  ],
  extends: [
    "plugin:jsx-a11y/recommended",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "plugin:sonarjs/recommended",
    "plugin:jest/recommended",
    "plugin:react/recommended",
    "plugin:eslint-comments/recommended",
    //
    "plugin:react-hooks/recommended",
    "eslint:recommended",
    "plugin:testing-library/react",
    "prettier",
    "plugin:prettier/recommended",
    "airbnb",
    "airbnb/hooks"
  ],
  parser: "babel-eslint", // Uses babel-eslint transforms.
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module" // Allows for the use of imports
  },
  root: true, // For configuration cascading.
  rules: {
    "import/order": [
      "warn",
      {
        alphabetize: {
          caseInsensitive: true,
          order: "asc"
        },
        groups: ["builtin", "external", "index", "sibling", "parent", "internal"]
      },
    ],
    "padding-line-between-statements": [
      "error",
      { blankLine: "never", prev: "import", next: "import" },
      { blankLine: "always", prev: "*", next: ["return", "function", "if", "export", "switch"] },
      { blankLine: "always", prev: ["if", "switch"], next: "*" },
      { blankLine: "always", prev: ["const", "let"], next: "expression" }
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variable",
        types: ["boolean"],
        format: ["PascalCase"],
        prefix: ["is", "IS_", "should", "has", "can", "did", "will"]
      },
      {
        selector: "interface",
        format: ["StrictPascalCase"],
        prefix: ["I"]
      },
      {
        selector: "typeParameter",
        format: ["PascalCase"],
        prefix: ["T"]
      }
    ],
    "linebreak-style": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        "comma-dangle": "off",
      }
    ],
    "unicorn/prefer-module": "off",
    "unicorn/filename-case": "off",
    "write-good-comments/write-good-comments": "warn",
    "react/self-closing-comp": ["error", {
      "component": true,
      "html": true
    }],
    "react/function-component-definition": ['warn', {
      "namedComponents": "arrow-function",
      "unnamedComponents": "arrow-function"
    }],
    "react/jsx-one-expression-per-line": ['off', {
      "allow":"single-child"
    }],
    'object-curly-newline': 'off',
  },
  settings: {
    react: {
      version: "detect" // Detect react version
    }
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 2018,
        project: "tsconfig.json",
        tsconfigRootDir: __dirname,
        sourceType: "module",
      },
      plugins: ["@typescript-eslint"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        'airbnb-typescript'
      ],
      // You can add Typescript specific rules here.
      // If you are adding the typescript variant of a rule which is there in the javascript
      // ruleset, disable the JS one.
      rules: {
        "@typescript-eslint/no-array-constructor": "warn",
        "no-array-constructor": "off",
        "comma-dangle": "off",
        "@typescript-eslint/comma-dangle": ["off"],
        "@typescript-eslint/no-unused-vars" : "warn"
      }
    }
  ]
};
