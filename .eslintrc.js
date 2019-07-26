module.exports = {
  root: true,
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module', // Allows for the use of imports
    // project: "./tsconfig.json"
  },
  env: {
    browser: true,
    jest: true // 添加 jest 环境
  },
  globals: {
    PROD: true
  },
  rules: {
    // eslint common
    "camelcase": 0, // 所有的数据库内数据都是下划线的，所以这里需要兼容两种标准
    "comma-dangle": [2, {
      "arrays": "ignore",
      "objects": "ignore", // 对象并不总是需要的
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "ignore",
    }],
    "brace-style": ["error", "stroustrup"],
    'no-console': 1,
    'no-debugger': 2,
    "no-multi-spaces": ["error", {
      "ignoreEOLComments": true
    }],
    "no-var": 2,
    "prefer-const": 2,
    "space-before-function-paren": ["error", "always"],
    "semi": [2, "never"],
    "no-useless-constructor": 0, // typescript 中 constructor 存在只是明确参数类型的情况
    "no-dupe-class-members": 0, // typescript 中存在方法重载的情况，eslint 还无法区分
    "quotes": ["error", "single"],
    "indent": ["error", 2 , {
      "SwitchCase": 1
    }],
    "no-trailing-spaces": ["error", {
      "skipBlankLines": true,
      "ignoreComments": true
    }],
    "template-curly-spacing": 0,
    "keyword-spacing": ["error"],
    // typescript only
    "@typescript-eslint/no-unused-vars": 2,
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    // other
    "import/no-named-default": 0
  }
}
