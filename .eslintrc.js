module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
      "space-before-function-paren": [0, "never"],//允许函数括号之间存在空格
      "semi": [0, "always"],//语句强制分号结尾
      "indent": [2, 4],//缩进风格
  },
  globals: {}
}
