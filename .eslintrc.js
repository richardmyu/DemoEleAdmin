module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended'],
  rules: {
    'no-console': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-irregular-whitespace': 0,
    'no-async-promise-executor': 0,
    'no-unused-vars': 0,
    'vue/no-reserved-keys': 0,
    'require-atomic-updates': 0,
    // 'semi': 0,
    // 'quotes': [2, 'single']
  }
}
